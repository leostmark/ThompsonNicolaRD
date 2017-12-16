
/* Begin Script: Resources/TSout/GcxTempest_Modules_ts_out.js ------------------------- */ 
var geocortex;
(function (geocortex) {
    var services;
    (function (services) {
        var GcxTempest_Modules;
        (function (GcxTempest_Modules) {
            var KeyValuePair = (function () {
                function KeyValuePair(key, value) {
                    this.key = key;
                    this.value = value;
                    this._key = key;
                    this._value = value;
                }
                return KeyValuePair;
            })();
            GcxTempest_Modules.KeyValuePair = KeyValuePair;
        })(GcxTempest_Modules = services.GcxTempest_Modules || (services.GcxTempest_Modules = {}));
    })(services = geocortex.services || (geocortex.services = {}));
})(geocortex || (geocortex = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var geocortex;
(function (geocortex) {
    var services;
    (function (services) {
        var GcxTempest_Modules;
        (function (GcxTempest_Modules) {
            var gcxInfrastructure = geocortex.essentialsHtmlViewer.mapping.infrastructure;
            // Two workflows, TempestToEssentials and EssentialsToTempest, are to update the ms sql database data table to synch between the Tempest and the GIS app.
            // NOTE: very important to do cross-check if the ms sql database table is actually referring the GIS app TEMPEST selection on the Viewer, or it should be synched.
            // TempestToEssentials workflow is executed whenver an event 'ApplicationResizedEvent' is published (see the code below). An event, 'ApplicationResizedEvent', is occured
            // when toolbar/leftpanel (DataRegion) is expand/shrinked.
            // EssetialsToTempest workflow is executed various point of the code to support the different user action.
            //---
            // !!! Important to know that Viewer configuration(Desktop.json.js) has the id of TabbedToolbar for Tempest Tool as 'TempestIdentifyPolygonTool'. 
            // So if Map Click (SHIFT - Click) after activiating Tempest tool does not work. ID is not correct mostly since GE mananger updates it when it is saved.
            var TempestModule = (function (_super) {
                __extends(TempestModule, _super);
                function TempestModule(app, libraryId) {
                    _super.call(this, app, libraryId);
                    this.CLASS_NAME = "Tempest_Module";
                    this.GIS_LINK_ID = "GISLINK";
                    this.TEMPEST_MODULE_CONFIGURATION_NAME = "Tempest";
                    this.TEMPEST_WORKFLOW_SESSION_ID_NAME = "TempestSessionID";
                    this.TEMPEST_POLYGON_IDENTIFY_TOOL_ID = "TempestIdentifyPolygonTool";
                    this.IS_FIRST_LOAD = "IsFirstLoad";
                    this.START_YEAR = 1970;
                    this.TEMPEST_MAPSERVICE_ID = "tempestMapServiceId";
                    this.FEATURESET_COLLECTION_SOURCE_NAME = "featureSetCollectionSourceName";
                    this.TEMPEST_SESSION_ID_NAME = "tempestSessionIdName";
                    this.TEMPEST_TO_ESSENTIALS_WORKFLOW_ID = "tempestToEssentialsWorkflowId";
                    this.ESSENTIALS_TO_TEMPEST_WORKFLOW_ID = "essentialsToTempestWorkflowId";
                    this.TEMPEST_APPLICATION_NAME_ID = "tempestApplicationName";
                    this.FEATURESET_COLLECTION_SOURCE_NAME_DEFAULT = "Workflow";
                    this.TEMPEST_TO_ESSENTIALS_WORKFLOW_ID_DEFAULT = "TempestToEssentials";
                    this.ESSENTIALS_TO_TEMPEST_WORKFLOW_ID_DEFAULT = "EssentialsToTempest";
                    this.DEFAULT_PROCESSING_MESSAGE = "Processing...";
                    this.processingBufferMsg = "Finding features on buffered geometry... please wait.";
                    this.TEMPEST_COLLECTION_ID = "Tempest";
                    //!! configurable?
                    this.TEMPEST_GRAPHICS_LAYER_ID = "Tempest";
                    //!!! This SHOULD Be Configurable
                    this.tempestBufferMarkupLayerId = "TempestBufferMarkup";
                    this.tempestUserGeoMarkupLayerId = "TempestUserGeoMarkup";
                    this.removeMarkupOnError = true;
                    this.messsage_OverMaxRecords_Buffer = "The buffer contains more than the maximum features allowed ({0}).";
                    this.messsage_OverMaxRecords_Select = "The selection contains more than the maximum features allowed ({0}).";
                    this._savedSubscriptions = [];
                    this.maxRecordCount = 1000;
                    this._suppressExportToTempest = false;
                    this._gisZoomFields = null;
                    this._layerNameMappings = [];
                    // Workflow expects Dictionary<string, List<string>>
                    this._tempestExportData = [];
                    this._shiftIsDownOnDocument = false;
                    this._shiftIsDownOnMapClick = false;
                    this._mapClickActivated = false;
                    // Buffer variables
                    this._pointSelected = null;
                    this._extentSelected = null;
                    this._polygonSelected = null;
                    this._lastUpdatedTime = new Date(this.START_YEAR, 1, 1);
                    this._lastRefreshFromTempest = new Date(this.START_YEAR, 1, 1);
                    this._suppressExportToTempest = false;
                }
                TempestModule.prototype.initialize = function (config) {
                    var _this = this;
                    _super.prototype.initialize.call(this, config);
                    this._config = config;
                    var site = this.app.site;
                    if (site && site.isInitialized) {
                        this._handleInitializedSite(site);
                    }
                    else {
                        this.app.eventRegistry.event("SiteInitializedEvent").subscribe(this, this._handleInitializedSite);
                    }
                    this.registerCommands();
                    $(document).keydown(function (evt) {
                        if (evt.keyCode == 16) {
                            _this._shiftIsDownOnDocument = true;
                        }
                    });
                    $(document).keyup(function (evt) {
                        if (evt.keyCode == 16) {
                            _this._shiftIsDownOnDocument = false;
                        }
                    });
                };
                TempestModule.prototype.registerCommands = function () {
                    this.app.commandRegistry.command("SetBusy").register(this, this.executeSetBusyCommand);
                    // Custom command to take a polygon a user drawn, and start the identify task to update FSM collection (result).
                    this.app.command("TempestIdentifyPolygon").register(this, this._executeTempestIdentifyPolygonCommand, this._canExecuteTempestIdentifyPolygon);
                    this.app.command("TempestIdentifyPolygon_WF").register(this, this._executeTempestIdentifyPolygonCommand_WF, this._canExecuteTempestIdentifyPolygon);
                    this.app.command("ClearTempestSelection").register(this, this.executeClearTempestSelectionCommand, this.canExecuteClearTempestSelectionCommand);
                    //Debugging to simulate onFocus/Resize
                    this.app.command("RefreshFromTempest").register(this, this._handlerRefreshFromTempest);
                    // Buffer commands
                    this.app.command("TempestBufferGeometryWF").register(this, this.executeTempestBufferGeometryWFCommand);
                    this.app.command("TempestBufferedFeatureWF").register(this, this.executeTempestBufferedFeatureCommand, this.canExecuteTempestBufferedFeature);
                    this.app.command("TempestBufferedFeatureSetCollectionWF").register(this, this.executeTempestBufferedFeatureSetCollectionCommand, this.canExecuteTempestBufferedFeatureSetCollection);
                    this.app.command("ClearTempestBufferMarkup").register(this, this.executeClearBufferMarkupCommand, this.canExecuteClearBufferMarkupCommand);
                };
                TempestModule.prototype.executeSetBusyCommand = function (flag) {
                    var messageId = this.DEFAULT_PROCESSING_MESSAGE;
                    if (flag == true) {
                        var args = new geocortex.essentialsHtmlViewer.mapping.infrastructure.commandArgs.AddStatusArgs(this.DEFAULT_PROCESSING_MESSAGE);
                        args.id = messageId;
                        args.showBusyIcon = true;
                        this.app.command("AddStatus").execute(args);
                    }
                    else {
                        this.app.command("RemoveStatus").execute(messageId);
                    }
                };
                /**!!! Start Buffer  Commands Codes**/
                TempestModule.prototype._getGeometry = function () {
                    var geometry = null;
                    if (this._pointSelected) {
                        console.log("point = ({0}, {1})".format(this._pointSelected.x, this._pointSelected.y));
                        geometry = this._pointSelected;
                    }
                    if (this._extentSelected) {
                        console.log("extent center = ({0}, {1})".format(this._extentSelected.getCenter().x, this._extentSelected.getCenter().y));
                        geometry = this._extentSelected;
                    }
                    if (this._polygonSelected) {
                        console.log("polygon center = ({0}, {1})".format(this._polygonSelected.getExtent().getCenter().x, this._polygonSelected.getExtent().getCenter().y));
                        geometry = this._polygonSelected;
                    }
                    return geometry;
                };
                TempestModule.prototype._setGeometry = function (geometry) {
                    if (geometry instanceof esri.geometry.Point) {
                        this._pointSelected = geometry;
                    }
                    else if (geometry instanceof esri.geometry.Extent) {
                        this._extentSelected = geometry;
                    }
                    else if (geometry instanceof esri.geometry.Polygon) {
                        this._polygonSelected = geometry;
                    }
                    else {
                        console.warn("!!! No geometry type to handle on _setGeometry.");
                        return;
                    }
                };
                TempestModule.prototype._retrieveGeometries = function (inputObj) {
                    var geomArray = [];
                    var featureSets = [];
                    if (inputObj instanceof gcxInfrastructure.FeatureSet) {
                        featureSets.push(inputObj);
                    }
                    if (inputObj instanceof gcxInfrastructure.FeatureSetCollection) {
                        featureSets = inputObj.featureSets.get();
                    }
                    for (var x = 0; x < featureSets.length; x++) {
                        var fs = featureSets[x];
                        for (var y = 0; y < fs.features.length(); y++) {
                            var feat = fs.features.getAt(y);
                            var geom = feat.esriFeature.get() ? feat.esriFeature.get().geometry : null;
                            if (geom && gcxInfrastructure.GeometryUtils.isValidGeometry(geom)) {
                                geomArray.push(geom);
                            }
                        }
                    }
                    return geomArray;
                };
                TempestModule.prototype._markupExists = function () {
                    return this._markupExistsById(this.tempestBufferMarkupLayerId) || this._markupExistsById(this.tempestUserGeoMarkupLayerId);
                };
                TempestModule.prototype._markupExistsById = function (id) {
                    var markupExists = false;
                    if (this.app.map) {
                        var layer = this._getGraphicsLayer(false, id);
                        if (layer && layer.graphics && layer.graphics.length > 0) {
                            markupExists = true;
                        }
                    }
                    return markupExists;
                };
                TempestModule.prototype.executeClearTempestSelectionCommand = function () {
                    var _this = this;
                    // Find the collection to modify, then combine it with the supplied feature set.
                    this._findCollectionForSelectFeaturesActivity(this.TEMPEST_COLLECTION_ID)
                        .then(function (collection) {
                        if (_this.app.featureSetManager.isCollectionOpen(_this.TEMPEST_COLLECTION_ID) === false) {
                            _this.app.featureSetManager.openCollection(_this.TEMPEST_COLLECTION_ID);
                        }
                        // remove All Tempest features from the collection
                        collection.clear();
                        if (_this.app.featureSetManager.tryCloseCollection(_this.TEMPEST_COLLECTION_ID)) {
                            _this._highlightTempestFeatureSetCollection(collection);
                            //this.app.eventRegistry.event("TempestFSMChanged").publish(collection);
                            _this._executeWorkflowEssentialToTempest(collection);
                        }
                    }, function (err) {
                        _this.app.trace.error("Error on _findCollectionForSelectFeaturesActivity call, Error is " + err);
                    });
                };
                TempestModule.prototype.executeClearBufferMarkupCommand = function () {
                    this.clearMakupByGraphicID(this.tempestBufferMarkupLayerId);
                    this.clearMakupByGraphicID(this.tempestUserGeoMarkupLayerId);
                };
                TempestModule.prototype.clearMakupByGraphicID = function (id) {
                    if (this._markupExists()) {
                        var layer = this._getGraphicsLayer(false, id);
                        if (!layer) {
                            return;
                        }
                        var graphicsLength = layer.graphics.length;
                        for (var i = 0; i < graphicsLength; i++) {
                            // Note that this is intentionally [0] as opposed to [i], 
                            //as esri's api truncates the array after each deletion. 
                            //That means that a normal iteration would get an index out of bound error, 
                            // so I am deleting n times at the first position instead. 
                            layer.remove(layer.graphics[0]);
                        }
                    }
                };
                TempestModule.prototype.canExecuteClearBufferMarkupCommand = function () {
                    // There has to be markup in order to delete it
                    return this._markupExists();
                };
                TempestModule.prototype.canExecuteClearTempestSelectionCommand = function () {
                    var existTempestFeaure = false;
                    var tempestColl = this.app.featureSetManager.getCollectionById(this.TEMPEST_COLLECTION_ID);
                    if (tempestColl && tempestColl.featureSets && tempestColl.featureSets.getLength() > 0) {
                        var fsArray = tempestColl.featureSets.getItems();
                        for (var i = 0, fsLen = fsArray.length; i < fsLen; i++) {
                            var fs = fsArray[i];
                            var fArray = fs.features.getItems();
                            if (fArray.length > 0) {
                                existTempestFeaure = true;
                                break;
                            }
                        }
                    }
                    return existTempestFeaure;
                };
                TempestModule.prototype.executeTempestBufferGeometryWFCommand = function (geometry) {
                    geometry.setSpatialReference(this.app.site.getMap().spatialReference);
                    if (geometry.type == "extent") {
                        // Convert to Polygon since BufferTask handle only one of type  "geometryType" : "<esriGeometryPoint | esriGeometryMultipoint | esriGeometryPolyline | esriGeometryPolygon>"
                        var polygonGeom = new esri.geometry.Polygon(geometry.spatialReference);
                        polygonGeom.rings.push(gcxInfrastructure.GeometryUtils.toRing(geometry));
                        geometry = polygonGeom;
                    }
                    var workflowParamsBuffer = {
                        workflowId: "ShowBufferForm",
                        GeometryInput: geometry
                    };
                    this.app.commandRegistry.command("RunWorkflowWithArguments").execute(workflowParamsBuffer);
                };
                TempestModule.prototype.executeTempestBufferedFeatureCommand = function (feature) {
                    var geometry = feature instanceof esri.Graphic ? feature.geometry : feature && feature.esriFeature.get() ? feature.esriFeature.get().geometry : null;
                    //var commandIdentifier: string = "IdentifyBufferedFeature";
                    if (geometry) {
                        // Use WF
                        var workflowParamsBuffer = {
                            workflowId: "ShowBufferForm",
                            GeometryInput: geometry
                        };
                        this.app.commandRegistry.command("RunWorkflowWithArguments").execute(workflowParamsBuffer);
                        // Disable the Tempest tool
                        this._disableTempestTool();
                    }
                };
                TempestModule.prototype.canExecuteTempestBufferedFeature = function (feature) {
                    var geom = null;
                    if (feature && feature instanceof esri.Graphic) {
                        geom = feature.geometry;
                    }
                    else if (feature && feature instanceof gcxInfrastructure.Feature) {
                        if (feature.esriFeature && feature.esriFeature.get()) {
                            geom = feature.esriFeature.get().geometry;
                        }
                    }
                    return !!geom && gcxInfrastructure.GeometryUtils.isValidGeometry(geom);
                };
                // Union Geometries to Geometry.
                TempestModule.prototype._unionGeometries = function (geometries) {
                    var _this = this;
                    var executeDirective = function (resolve, reject) {
                        var geometryService = gcxInfrastructure.GeometryUtils.getGeometryService(_this.app);
                        geometryService.union(geometries, function (geometry) {
                            resolve(geometry);
                        }, function (error) {
                            reject(error);
                        });
                    };
                    return new Promise(executeDirective);
                };
                TempestModule.prototype.executeTempestBufferedFeatureSetCollectionCommand = function (fsc) {
                    var _this = this;
                    //var commandIdentifier: string = "IdentifyBufferedFeatureSetCollection";
                    var featSetColl = fsc;
                    if (featSetColl) {
                        var geometries = this._retrieveGeometries(featSetColl);
                        if (geometries.length) {
                            this._unionGeometries(geometries).then(function (geometry) {
                                // Use WF
                                var workflowParamsBuffer = {
                                    workflowId: "ShowBufferForm",
                                    GeometryInput: geometry
                                };
                                _this.app.commandRegistry.command("RunWorkflowWithArguments").execute(workflowParamsBuffer);
                                // Disable the Tempest tool
                                _this._disableTempestTool();
                            }).error(function (e) {
                                _this.app.trace.error("Failed to union the geometry. The reason is " + e);
                            });
                        }
                        else {
                            this.app.trace.warning("No geometries on the Featureset collection.");
                        }
                    }
                    else {
                        //var err = "Could not execute IdentifyBufferedFeatureSetCollection operation. Feature Set Collection not found.";
                        //this._reportBufferingError(this._generateErrorObjFromString(err, commandIdentifier));
                        this.app.trace.error("Error to execute a command, TempestBufferedFeatureSet");
                        this.app.command("Alert").execute("Error to execute a command, TempestBufferedFeatureSet");
                    }
                };
                TempestModule.prototype.canExecuteTempestBufferedFeatureSetCollection = function (fsc) {
                    return !!fsc && typeof fsc === "string" ? !!this.app.featureSetManager.getCollectionById(fsc) : !!fsc;
                };
                /**!!! End Buffer  Commands Codes**/
                // Debugging to Development
                TempestModule.prototype._handlerRefreshFromTempest = function () {
                    console.log("called _handlerRefreshFromTempest() at " + (new Date()).toString());
                    this.refreshFromTempest();
                };
                TempestModule.prototype._canExecuteTempestIdentifyPolygon = function (geomObject) {
                    return true;
                };
                TempestModule.prototype._executeTempestIdentifyPolygonCommand = function (geometry) {
                    if (geometry instanceof esri.geometry.Extent) {
                        this._executeTempestIdentifyPolygon(geometry, 0);
                    }
                };
                TempestModule.prototype._executeTempestIdentifyPolygonCommand_WF = function (geometry) {
                    //!! 2016-may-6 to support all geometry
                    //if (geometry instanceof esri.geometry.Extent) {
                    //console.log("-- Draw geometry input on _executeTempestIdentifyPolygonCommand as temporary markup before calling _executeTempestIdentifyPolygon");
                    this.app.command("ClearTempestBufferMarkup").raiseCanExecuteChanged();
                    this._executeTempestIdentifyPolygon_WF(geometry, 0);
                    //}
                };
                TempestModule.prototype._disableTempestTool = function () {
                    var activeTool = this.app.toolRegistry.getActiveTool();
                    if (activeTool && activeTool.name === this.TEMPEST_POLYGON_IDENTIFY_TOOL_ID) {
                        activeTool.setActive(false);
                    }
                };
                TempestModule.prototype._executeTempestIdentifyByPoint = function (clickEvent) {
                    var geometry = clickEvent.mapPoint;
                    if (clickEvent.type === "click" && geometry instanceof esri.geometry.Point) {
                        // 2015 July 16: Required that two actions - click' and 'shift-click'- handles if and only if a user manually set the Tempest Tool active.
                        var activeTool = this.app.toolRegistry.getActiveTool();
                        if (activeTool && activeTool.name === this.TEMPEST_POLYGON_IDENTIFY_TOOL_ID) {
                            var pt = geometry;
                            this._executeTempestIdentifyPoint(geometry, 0);
                        }
                    }
                };
                TempestModule.prototype._readyIdentifyTempestLayer = function () {
                    // handleRetrieveTempestMappings(), which should be called from TempestToEssential workflow will set _layerNameMapping. 
                    var retVal = false;
                    if (this._layerNameMappings) {
                        retVal = this._layerNameMappings.length > 0;
                    }
                    else {
                        this.app.trace.warning("{0}: _readyIdentifyTempestLayer(): This SHOULD NOT happend if GVH is started from Tempest app since _layerNameMappings should exist.".format(this.CLASS_NAME));
                    }
                    return retVal;
                };
                TempestModule.prototype.refreshFromTempest = function () {
                    if (this._lastRefreshFromTempest) {
                        var diffTime = (new Date()).getTime() - this._lastRefreshFromTempest.getTime();
                        if (diffTime < 1) {
                            return;
                        }
                        this._lastRefreshFromTempest = new Date();
                        if (String.isNullOrEmpty(this._tempestSessionId)) {
                            this.app.trace.warning("The value of the Tempest session id parameter '{0}' is null or empty.".format(this._tempestSessionIdName));
                            return;
                        }
                    }
                    if (this.app && this.app.commandRegistry) {
                        //this.app.trace.info("Execute runWorkflowById for " + this._tempestToEssentialsWorkflowId);
                        this.app.commandRegistry.command("RunWorkflowById").execute(this._tempestToEssentialsWorkflowId);
                    }
                };
                TempestModule.prototype.resetTempestValues = function (workflow) {
                    if (workflow.id == this._tempestToEssentialsWorkflowId) {
                        this._suppressExportToTempest = false;
                    }
                    else {
                        this._suppressExportToTempest = true;
                    }
                    //console.log("**** Set this._suppressExportToTempest = {0}. *** by resetTempestValues().".format(this._suppressExportToTempest));
                };
                TempestModule.prototype._customMapClickHandler = function () {
                    var _this = this;
                    var isDisabled = false;
                    var isMapClicked = false;
                    // ESRI map Click handling
                    this.app.map.on("click", function (event) {
                        if (!isDisabled && isMapClicked) {
                            _this._mapClickActivated = true;
                            if (event.shiftKey) {
                                _this._shiftIsDownOnMapClick = true;
                                _this._executeTempestIdentifyByPoint(event);
                            }
                            else {
                                _this._shiftIsDownOnMapClick = false;
                                _this._executeTempestIdentifyByPoint(event);
                            }
                        }
                        else {
                            _this._mapClickActivated = false;
                        }
                    });
                    this.app.event("ActiveToolChangedEvent").subscribe(this, function (args) {
                        if (args.tool && args.tool.name !== _this.TEMPEST_POLYGON_IDENTIFY_TOOL_ID) {
                            isDisabled = true;
                        }
                        else {
                            isDisabled = false;
                        }
                    });
                    this.app.event("MapClickedEvent").subscribe(this, function (args) {
                        isMapClicked = true;
                    });
                };
                TempestModule.prototype._handleInitializedSite = function (site) {
                    var _this = this;
                    this._handleConfiguration();
                    this._customMapClickHandler();
                    this.refreshFromTempest();
                    //  Disable SHIFT-ZOOM Tool (GVH default)
                    dojo.connect(this.app.toolRegistry.tool(this.TEMPEST_POLYGON_IDENTIFY_TOOL_ID), "onActivated", function () {
                        var activeTool = _this.app.toolRegistry.getActiveTool();
                        // This is necessary to have to disable Zoom Tool
                        _this.app.map.disableRubberBandZoom();
                    });
                    dojo.connect(this.app.toolRegistry.tool(this.TEMPEST_POLYGON_IDENTIFY_TOOL_ID), "onDeactivated", function () {
                    });
                    // If there are no query parameters (which would be weird), or no
                    // tempest session id, then don't do anything. If there is a tempest
                    // session id pass it to a workflow to retrieve the layers and parcels.
                    if (String.isNullOrEmpty(this.app.getUrlParameter(this._tempestSessionIdName))) {
                        this.app.trace.warning("{0}: Tempest session id parameter '{1}' not found in query string.".format(this.CLASS_NAME, this._tempestSessionIdName));
                        return;
                    }
                    // Get the QueryString to set tempestSessionID
                    this._tempestSessionId = this.app.getUrlParameter(this._tempestSessionIdName);
                    // Register event handlers
                    this.app.event("FSMCollectionClosedEvent").subscribe(this, this.handlerFSMCollectionClosedEvent);
                    this.app.event("FSMCollectionChangedEvent").subscribe(this, this.handlerFSMCollectionChangedEvent);
                    this.app.event("WorkflowCompletedEvent").subscribe(this, function (workflow) {
                        _this.resetTempestValues(workflow);
                    });
                    this.app.event("WorkflowAbortedEvent").subscribe(this, function (workflow) {
                        _this.resetTempestValues(workflow);
                    });
                    //!!! Subscribe to window events
                    var appResizedSubToken = this.app.event("ApplicationResizedEvent").subscribe(this, function () {
                        // Get an update from Tempest when the browser resizes.
                        // This is a kludge used to detect browser minimize/maximize events and 
                        // when Tempest switches focus to the viewer it adjusts the window size
                        // by one pixel. Only do the refresh if the window is larger than 10px so
                        // that we avoid minimize events (10px is just an arbitrarily small value).
                        // This is the way to synch between Tempest and GIS app which is launched on VBWrapper.
                        //if (this._suppressExportToTempest == false) {
                        if (window.outerHeight > 10) {
                            //console.log("called ApplicationResizedEvent() and about to call 'refreshFromTempest' at " + (new Date()).toString());
                            _this.refreshFromTempest();
                        }
                        //} else {
                        //    console.log("Unsubscribe an event, ApplicationResizedEvent.");
                        //    this.app.event("ApplicationResizedEvent").unsubscribe(appResizedSubToken);
                        //    appResizedSubToken = null;
                        //}
                    });
                    // Make sure workflow module is loaded before we register the activity handler
                    this.app.moduleManager.notifyModuleLoaded("Workflow", function () {
                        // Register activity handlers by type
                        _this.app.registerActivityTypeHandler("Geocortex.Workflow.Tempest.Activities.TempestStart", function (activityContext) {
                            _this.handleTempestStartActivity(activityContext);
                        });
                        _this.app.registerActivityTypeHandler("Geocortex.Workflow.Tempest.Activities.RetrieveTempestMappings", function (activityContext) {
                            _this.handleRetrieveTempestMappings(activityContext);
                        });
                        // Register activity handlers by external ID (some of these are duplicates of those registered by type)
                        _this.app.registerActivityIdHandler("SetLastUpdateTime", function (activityContext) {
                            _this.handleSetLastUpdatedTimeActivity(activityContext);
                        });
                        _this.app.registerActivityIdHandler("CheckIfRefreshTimeExceeded", function (activityContext) {
                            _this.handleCheckIfRefreshTimeExceeded(activityContext);
                        });
                    });
                };
                TempestModule.prototype._executeTempestIdentifyPoint = function (geometry, tolerance) {
                    if (geometry == null || geometry == undefined || this.tempestGcxMapService == null || this.tempestGcxMapService == undefined) {
                        this.app.command("Alert").execute("Invalid Input Argument on geometry, and missing Tempest Map Service to proceed.");
                        return;
                    }
                    // --- identify Task Parameters
                    var identifyParams = new esri.tasks.IdentifyParameters();
                    identifyParams.tolerance = tolerance;
                    identifyParams.returnGeometry = true;
                    identifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
                    identifyParams.width = this.app.map.width;
                    identifyParams.height = this.app.map.height;
                    identifyParams.mapExtent = this.app.map.extent;
                    identifyParams.geometry = geometry;
                    // Execute an identify task for each map service
                    //var mapService = Utilities.getMapserviceById(this._tempestMapServiceId, this.app.site);
                    // Use an identify task for non-feature layers...
                    var serviceUrl = this._getIdentifyTaskUrl(this.tempestGcxMapService);
                    if (!serviceUrl) {
                        return;
                    }
                    // !!! Identify against only Tempest Layers
                    identifyParams.layerIds = this._getTempestLayerIDs(this.tempestGcxMapService);
                    var identifyTask = new esri.tasks.IdentifyTask(serviceUrl);
                    identifyTask.execute(identifyParams, dojo.hitch(this, this._identifyOnPointSucceed), dojo.hitch(this, this._identifyOnPointFailed));
                };
                TempestModule.prototype._identifyOnPointSucceed = function (idResults) {
                    var _this = this;
                    if (idResults.length > 0) {
                        //var collection: gcxInfrastructure.FeatureSetCollection = this.app.featureSetManager.getCollectionById(this.TEMPEST_COLLECTION_ID);
                        // Find the collection to modify, then combine it with the supplied feature set.
                        this._findCollectionForSelectFeaturesActivity(this.TEMPEST_COLLECTION_ID)
                            .then(function (collection) {
                            if (_this.app.featureSetManager.isCollectionOpen(_this.TEMPEST_COLLECTION_ID) === false) {
                                _this.app.featureSetManager.openCollection(_this.TEMPEST_COLLECTION_ID);
                            }
                            if (_this._shiftIsDownOnMapClick) {
                                for (var idResCnt = 0, idResLen = idResults.length; idResCnt < idResLen; ++idResCnt) {
                                    // SHIFT-MapClick: Keep Existing ones, but toggle the underneath Tempest feature
                                    var idResult = idResults[idResCnt];
                                    var idResultLayerName = idResult.layerName;
                                    // -- Handle only Tempest Layer's Identify Results
                                    if (String.isNullOrEmpty(_this._findPairKeyByValue(_this._layerNameMappings, idResultLayerName)) == false) {
                                        var gcxLayer = GcxTempest_Modules.Utilities.getEssentialsLayer(idResultLayerName, _this.app.site);
                                        var gcxLayerMapservice = gcxLayer.mapService;
                                        // Add a new FS to the FSC if it is not on the colleciton (FSC) yet.
                                        if (collection) {
                                            var fsExisting = _this._getTempestFeatureSetInFeatureSetCollectionBylayerName(idResultLayerName);
                                            if (fsExisting === null) {
                                                // Handle when FeatureSet of the Tempest Layer Identify Result is not already on TEMPEST Collection.
                                                _this._appendToFeatureSetCollection(idResults, collection, gcxLayer.mapService, _this.app);
                                                break;
                                            }
                                            else {
                                                var featureSet = fsExisting;
                                                // Set gcxFeature: Source: IdentifyYtils.ts  - appendToFeatureSetCollection()
                                                var options = { "graphic": idResult.feature, "layer": featureSet.layer, "resolveLayerFields": true, "allowUnsafeContent": false };
                                                var gcxFeature = new gcxInfrastructure.Feature(options);
                                                // Set gisLinkField
                                                var dbLayerName = _this._findPairKeyByValue(_this._layerNameMappings, idResultLayerName);
                                                if (String.isNullOrEmpty(dbLayerName) == true) {
                                                    // Fallback to use the layer name
                                                    dbLayerName = idResultLayerName;
                                                }
                                                var gisLinkField = _this._getFieldNameByLayerName(dbLayerName);
                                                var foundFeature = false;
                                                var index = -1;
                                                for (var featureIndex = 0; featureIndex < featureSet.features.getLength(); featureIndex++) {
                                                    var feature = featureSet.features.getAt(featureIndex);
                                                    if (feature) {
                                                        if (feature.esriFeature.get().attributes[gisLinkField] === idResult.feature.attributes[gisLinkField]) {
                                                            foundFeature = true;
                                                            index = featureIndex;
                                                            break;
                                                        }
                                                    }
                                                }
                                                // If already on the result, remove (Deselect) the existing the feature. Otherwise, add to the result       
                                                if (foundFeature) {
                                                    featureSet.features.removeAt(index);
                                                }
                                                else {
                                                    featureSet.features.addItem(gcxFeature);
                                                }
                                            }
                                        }
                                    } // End of If - Existing Tempest Layers
                                } // End of For-loop on idResults
                            }
                            else {
                                // MapClick: Discard existing ones, and add the underneath Tempest feature
                                //var mapServiceTempest = Utilities.getMapserviceById(this._tempestMapServiceId, this.app.site);
                                if (collection) {
                                    collection.clear();
                                    collection = _this._appendToFeatureSetCollection(idResults, collection, _this.tempestGcxMapService, _this.app);
                                }
                            }
                            if (_this.app.featureSetManager.tryCloseCollection(_this.TEMPEST_COLLECTION_ID)) {
                                // Keep Highlighten features, and run EssentialsToTempest
                                _this._highlightTempestFeatureSetCollection(collection);
                                //this.app.eventRegistry.event("TempestFSMChanged").publish(collection);
                                _this._executeWorkflowEssentialToTempest(collection);
                            }
                        }, function (err) {
                            _this.app.trace.error("Error on _findCollectionForSelectFeaturesActivity call whose error is " + err);
                        });
                    }
                };
                TempestModule.prototype._identifyOnPointFailed = function (error) {
                    this.app.trace.debug("{0}: Error on identifyTask.execute() with reason, {1}".format(this.CLASS_NAME, error));
                    this.app.trace.error("{0}: Error on identifyTask.execute() with reason, {1}".format(this.CLASS_NAME, error.message));
                };
                TempestModule.prototype._executeTempestIdentifyPolygon = function (geometry, tolerance) {
                    if (geometry == null || geometry == undefined || this.tempestGcxMapService == null || this.tempestGcxMapService == undefined) {
                        this.app.command("Alert").execute("Invalid Input Argument on geometry, and missing Tempest Map Service to proceed.");
                        return;
                    }
                    if (this._mapClickActivated) {
                        // reset to keep Sticky Custom Rect tool avaialable
                        this._mapClickActivated = false;
                    }
                    // --- identify Task Parameters
                    var identifyParams = new esri.tasks.IdentifyParameters();
                    identifyParams.tolerance = tolerance;
                    identifyParams.returnGeometry = true;
                    identifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
                    identifyParams.width = this.app.map.width;
                    identifyParams.height = this.app.map.height;
                    identifyParams.mapExtent = this.app.map.extent;
                    identifyParams.geometry = geometry;
                    // Execute an identify task for each map service
                    //var mapService = Utilities.getMapserviceById(this._tempestMapServiceId, this.app.site);                
                    // Use an identify task for non-feature layers...
                    var serviceUrl = this._getIdentifyTaskUrl(this.tempestGcxMapService);
                    if (!serviceUrl) {
                        return;
                    }
                    // !!! Identify against only Tempest Layers
                    identifyParams.layerIds = this._getTempestLayerIDs(this.tempestGcxMapService);
                    var identifyTask = new esri.tasks.IdentifyTask(serviceUrl);
                    identifyTask.execute(identifyParams, dojo.hitch(this, this._identifyOnPolygonSucceed), dojo.hitch(this, this._identifyOnPolygonFailed));
                };
                TempestModule.prototype._executeTempestIdentifyPolygon_WF = function (geometry, tolerance) {
                    if (geometry == null || geometry == undefined || this.tempestGcxMapService == null || this.tempestGcxMapService == undefined) {
                        this.app.command("Alert").execute("Invalid Input Argument on geometry, and missing Tempest Map Service to proceed.");
                        return;
                    }
                    // --- identify Task Parameters
                    var identifyParams = new esri.tasks.IdentifyParameters();
                    identifyParams.tolerance = tolerance;
                    identifyParams.returnGeometry = true;
                    identifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
                    identifyParams.width = this.app.map.width;
                    identifyParams.height = this.app.map.height;
                    identifyParams.mapExtent = this.app.map.extent;
                    identifyParams.geometry = geometry;
                    // Execute an identify task for each map service
                    //var mapService = Utilities.getMapserviceById(this._tempestMapServiceId, this.app.site);
                    // Use an identify task for non-feature layers...
                    var serviceUrl = this._getIdentifyTaskUrl(this.tempestGcxMapService);
                    if (!serviceUrl) {
                        return;
                    }
                    // !!! Identify against only Tempest Layers
                    identifyParams.layerIds = this._getTempestLayerIDs(this.tempestGcxMapService);
                    var identifyTask = new esri.tasks.IdentifyTask(serviceUrl);
                    this.DEFAULT_PROCESSING_MESSAGE = this.processingBufferMsg;
                    this.app.commandRegistry.command("SetBusy").execute(true);
                    identifyTask.execute(identifyParams, dojo.hitch(this, this._identifyOnPolygonSucceed_WF), dojo.hitch(this, this._identifyOnPolygonFailed));
                };
                TempestModule.prototype._identifyOnPolygonSucceed_WF = function (idResults) {
                    if (idResults.length > 0) {
                        //idResults returns only upto the maxRecordCount even though it contains more inside geometry condition. SO this comparison is the same as = and >=
                        // We want to let a user notify when the result reaches the maximum.
                        if (idResults.length >= this.maxRecordCount) {
                            this.app.command("Alert").execute(this.messsage_OverMaxRecords_Buffer.format(this.maxRecordCount));
                            if (this.removeMarkupOnError) {
                                this.app.command("ClearTempestBufferMarkup").execute();
                            }
                        }
                        else {
                            var collection = this.app.featureSetManager.getCollectionById(this.TEMPEST_COLLECTION_ID);
                            if (this.app.featureSetManager.isCollectionOpen(this.TEMPEST_COLLECTION_ID) === false) {
                                this.app.featureSetManager.openCollection(this.TEMPEST_COLLECTION_ID);
                            }
                            var collectionsToAppend = [];
                            var gcxLayerMapservice = GcxTempest_Modules.Utilities.getMapServiceFromIdentiftResult(idResults, this._layerNameMappings, this.app);
                            if (gcxLayerMapservice != null) {
                                var collToAdd = this._appendToFeatureSetCollection(idResults, null, gcxLayerMapservice, this.app);
                                collectionsToAppend.push(collToAdd);
                                var modified = collection.unionManyInPlace(collectionsToAppend);
                                if (this.app.featureSetManager.tryCloseCollection(this.TEMPEST_COLLECTION_ID)) {
                                    // Keep Highlighten features, and run EssentialsToTempest
                                    this._highlightTempestFeatureSetCollection(collection);
                                    this._executeWorkflowEssentialToTempest(collection);
                                }
                            }
                            else {
                                this.app.trace.error("Can't find the map service to proceed.");
                            }
                        }
                    }
                    this.app.commandRegistry.command("SetBusy").execute(false);
                };
                TempestModule.prototype._identifyOnPolygonSucceed = function (idResults) {
                    if (idResults.length > 0) {
                        //idResults returns only upto the maxRecordCount even though it contains more inside geometry condition. SO this comparison is the same as = and >=
                        // We want to let a user notify when the result reaches the maximum.
                        if (idResults.length >= this.maxRecordCount) {
                            this.app.command("Alert").execute(this.messsage_OverMaxRecords_Select.format(this.maxRecordCount));
                            if (this.removeMarkupOnError) {
                                this.app.command("ClearTempestBufferMarkup").execute();
                            }
                        }
                        else {
                            var collection = this.app.featureSetManager.getCollectionById(this.TEMPEST_COLLECTION_ID);
                            if (this.app.featureSetManager.isCollectionOpen(this.TEMPEST_COLLECTION_ID) === false) {
                                this.app.featureSetManager.openCollection(this.TEMPEST_COLLECTION_ID);
                            }
                            if (this._shiftIsDownOnDocument) {
                                for (var idResCnt = 0, idResLen = idResults.length; idResCnt < idResLen; ++idResCnt) {
                                    var idResult = idResults[idResCnt];
                                    var idResultLayerName = idResult.layerName;
                                    // Handle only Tempest Layer's Identify Results
                                    if (String.isNullOrEmpty(this._findPairKeyByValue(this._layerNameMappings, idResultLayerName)) == false) {
                                        var gcxLayer = GcxTempest_Modules.Utilities.getEssentialsLayer(idResultLayerName, this.app.site);
                                        var gcxLayerMapservice = gcxLayer.mapService;
                                        // Add a new FS to the FSC if it is not on the colleciton (FSC) yet.
                                        if (collection) {
                                            var fsExisting = this._getTempestFeatureSetInFeatureSetCollectionBylayerName(idResultLayerName);
                                            if (fsExisting === null) {
                                                // Handle when FeatureSet of the Tempest Layer Identify Result is not already on TEMPEST Collection.
                                                this._appendToFeatureSetCollection(idResults, collection, gcxLayer.mapService, this.app);
                                                break;
                                            }
                                            else {
                                                var options = { "graphic": idResult.feature, "layer": fsExisting.layer, "resolveLayerFields": true, "allowUnsafeContent": false };
                                                var gcxFeatureIdentified = new gcxInfrastructure.Feature(options);
                                                // Add if and only if a new feature is not already on the fsExisting
                                                if (this._existingFeatureInFeatureSet(fsExisting, gcxFeatureIdentified) === false) {
                                                    fsExisting.features.addItem(gcxFeatureIdentified);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else {
                                // On Draw-Rect IdentifyTask, Discard existing Tempest features and Select newly found features.
                                //var mapServiceTempest = Utilities.getMapserviceById(this._tempestMapServiceId, this.app.site);
                                if (collection) {
                                    collection.clear();
                                    collection = this._appendToFeatureSetCollection(idResults, collection, this.tempestGcxMapService, this.app);
                                }
                            }
                            if (this.app.featureSetManager.tryCloseCollection(this.TEMPEST_COLLECTION_ID)) {
                                // Keep Highlighten features, and run EssentialsToTempest
                                this._highlightTempestFeatureSetCollection(collection);
                                this._executeWorkflowEssentialToTempest(collection);
                            }
                        }
                    }
                };
                //**
                //* Check if this is used!!!
                //**//
                TempestModule.prototype._repopulateResult = function (idResults) {
                    var retVal = [];
                    for (var i = 0; i < idResults.length; i++) {
                        var rst = idResults[i];
                        var esriGraphic = rst.feature;
                        var tempestLayerName = this._findPairKeyByValue(this._layerNameMappings, rst.layerName);
                        if (String.isNullOrEmpty(tempestLayerName) == true) {
                            // Fallback to use the layer name
                            tempestLayerName = rst.layerName;
                        }
                        var gisLinkField = this._getFieldNameByLayerName(tempestLayerName);
                        var fieldValueToSearch = esriGraphic.attributes[gisLinkField];
                        if (this._existingFeatureInOldTempest(rst.layerName, fieldValueToSearch) === false) {
                            retVal.push(rst);
                        }
                    }
                    return retVal;
                };
                TempestModule.prototype._existingFeatureInOldTempest = function (layerName, objToSearch) {
                    var oldTempestValues = this._getExitingTempestFeatureValuesInFeatureSetCollection();
                    // check if a value is exising in the list
                    if (oldTempestValues.containsKey(layerName) && oldTempestValues.get(layerName).indexOf(objToSearch) > -1) {
                        return true;
                    }
                    return false;
                };
                TempestModule.prototype._existingFeatureInFeatureSet = function (fs, featureToCheck) {
                    // ???? is there any other way to do this function since GISLINK attribute may not all the Tempest Feature Class
                    var fieldNameToCompare = this._getFieldNameByLayerName(fs.layer.name);
                    var gisLinkValueToCheck = "";
                    var attsToCheck = featureToCheck.attributes.getItems();
                    for (var j = 0; j < attsToCheck.length; j++) {
                        if (attsToCheck[j].name.get() === fieldNameToCompare) {
                            gisLinkValueToCheck = attsToCheck[j].value.get();
                        }
                    }
                    var features = fs.features.getItems();
                    for (var i = 0; i < features.length; i++) {
                        var attributes = features[i].attributes.getItems();
                        for (var k = 0; k < attributes.length; k++) {
                            if (attributes[k].name.get() === fieldNameToCompare && attributes[k].value.get() === gisLinkValueToCheck) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                TempestModule.prototype._identifyOnPolygonFailed = function (error) {
                    this.app.commandRegistry.command("SetBusy").execute(false);
                    this.app.trace.error("{0} - _identifyOnPolygonFailed: Error with reason, {1}".format(this.CLASS_NAME, error.message));
                };
                TempestModule.prototype._getTempestFeatureSetInFeatureSetCollectionBylayerName = function (nameToSearch) {
                    var collectionTempest = this.app.featureSetManager.getCollectionById(this.TEMPEST_COLLECTION_ID);
                    var fs = null;
                    for (var indFS = 0, lenFS = collectionTempest.featureSets.getLength(); indFS < lenFS; indFS++) {
                        var fsInCol = collectionTempest.featureSets.getAt(indFS);
                        if (fsInCol.layer.name === nameToSearch) {
                            fs = fsInCol;
                            break;
                        }
                    }
                    return fs;
                };
                TempestModule.prototype._executeWorkflowEssentialToTempest = function (fsc) {
                    //console.log("^^^START: _executeWorkflowEssentialToTempest() at " + (new Date()).toString());
                    // 2016 May 11. on GVH. the event 'ApplicationResizedEvent' is published many times. 
                    // If then, a workflow TempestToEssentials is executed on this code, which set this._suppressExportToTempest = true.
                    //if (this._suppressExportToTempest) {
                    //    console.log("=========");
                    //    console.log("^^^{0}: _executeWorkflowEssentialToTempest() is occurred. BUT...  DO NOT run WF,  Check _suppressExportToTempest: ({1}).".format(this.CLASS_NAME, this._suppressExportToTempest));
                    //    console.log("=========");
                    //    // Bail out if the TempestToEssentials workflow is running
                    //    return;
                    //} 
                    if (this._layerNameMappings != null && fsc != null) {
                        // data to hold LayerName, its feature values
                        var tempestExportData = [];
                        // NOTE: TempestExportData, Dictionary<string, List<string>>, should contain the same number of Layre Names of _LayerNameMapping
                        // with the values of each layer represents the feature values of the layer so that the previously selected feature values are properly deleted before Inserting new ones.
                        for (var i = 0; i < this._layerNameMappings.length; i++) {
                            var gisLayerName = this._layerNameMappings[i].value;
                            var dbLayerName = this._layerNameMappings[i].key;
                            var attValues = this._getSelectedTempestFeatureValuesByLayer(gisLayerName, fsc);
                            var dataToExport = {};
                            dataToExport["Key"] = dbLayerName;
                            dataToExport["Value"] = attValues;
                            tempestExportData.push(dataToExport);
                        }
                        //this.app.trace.info("---- RUN WF - Essentials to Tempest. Input of TemepstExportData: {0}".format(JSON.stringify(tempestExportData)));
                        // ExportData: Dictionary<layerName, featureValues>
                        var workflowParamsEssentialsToTempestTask = {
                            workflowId: this._essentialsToTempestWorkflowId,
                            tempestExportData: tempestExportData
                        };
                        this.app.commandRegistry.command("RunWorkflowWithArguments").execute(workflowParamsEssentialsToTempestTask);
                    }
                };
                /**
                 * Built the feature attributes values using the mapped layer/field name from the featureSet Collection
                 * INPUT: gisLayerName: gis Layer Name from mapping, fsc: FeatureSetCollection
                 * OUPUT: Array<string>, feature Attribute values in FSC matched layerName
                 **/
                TempestModule.prototype._getSelectedTempestFeatureValuesByLayer = function (gisLayerName, fsc) {
                    var attValues = [];
                    var dbLayerName = this._findPairKeyByValue(this._layerNameMappings, gisLayerName);
                    var gcxLayer = GcxTempest_Modules.Utilities.getEssentialsLayer(gisLayerName, this.app.site);
                    if (gcxLayer && dbLayerName != "") {
                        var gisFieldName = this._getFieldNameByLayerName(dbLayerName);
                        fsc.featureSets.getItems().forEach(function (fs) {
                            if (fs.layer.name == gisLayerName) {
                                fs.features.getItems().forEach(function (f) {
                                    var val = f.esriFeature.get().attributes[gisFieldName];
                                    if (attValues.indexOf(val) == -1) {
                                        attValues.push("{0}".format(val));
                                    }
                                });
                            }
                        });
                    }
                    else {
                        console.warn("At _getSelectedTempestFeatureValuesByLayer(), Can't find layer, {0}, object from site.".format(gisLayerName));
                    }
                    return attValues;
                };
                TempestModule.prototype._highlightTempestFeatureSetCollection = function (fsc) {
                    if (this._layerNameMappings != null) {
                        if (fsc != null && fsc.id === this.TEMPEST_COLLECTION_ID) {
                            // !!!Set active tool (2015 July 16: the client does not want to have this code to set the Tempest tool initially active)
                            //this.app.command("SetActiveTool").execute("TempestIdentifyPolygonTool");
                            this._updateGraphicsLayer(fsc);
                        }
                        else {
                            this.app.trace.info("{0} : --_highlightTempestFeatureSetCollection() - No featureSetCollection.".format(this.CLASS_NAME));
                        }
                    }
                    else {
                        this.app.trace.warning("{0} : _highlightTempestFeatureSetCollection() - No _layerNameMappings.".format(this.CLASS_NAME));
                    }
                };
                /**
                * This block of codes are from handleUpdateGraphicsLayer() which is for Workflow activity 'UpdateGraphicsLayer'
                **/
                TempestModule.prototype._updateGraphicsLayer = function (fsc) {
                    var layerId = this.TEMPEST_GRAPHICS_LAYER_ID;
                    var removeAllFeatures = true;
                    var sfs = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, gcxInfrastructure.ColorUtils.getColorFromString(this._borderColor), 2), gcxInfrastructure.ColorUtils.getColorFromString(this._fillColor));
                    var sr = new esri.renderer.SimpleRenderer(sfs);
                    // Get the map
                    var map = this.app.site.getMap();
                    if (map == null) {
                        throw new Error("Update Graphics Layer: No map available.");
                    }
                    // Find or create the graphics layer
                    var addLayer = false;
                    var layer = GcxTempest_Modules.Utilities.findMapServiceByMap(map, layerId);
                    if (!layer) {
                        // Create the layer
                        layer = new esri.layers.GraphicsLayer({ id: layerId });
                        addLayer = true;
                    }
                    else {
                        // clear graphics first
                        layer.clear();
                        // Require a graphics layer
                        if (!(layer instanceof esri.layers.GraphicsLayer)) {
                            throw new Error("Update Graphics Layer: The layer '" + layerId + "' is not a GraphicsLayer");
                        }
                    }
                    try {
                        layer.suspend();
                        // Clear all graphics if requested to do so
                        if (removeAllFeatures) {
                            layer.clear();
                        }
                        fsc.featureSets.getItems().forEach(function (gcxFS) {
                            // Insert graphics on top, assuming the FeatureSet is in the desired order (with zero being the graphic on top)
                            gcxFS.features.getItems().forEach(function (gcxFeature) {
                                layer.add(gcxFeature.esriFeature.get());
                            });
                        });
                        layer.renderer = sr;
                        // Add the graphics layer if it doesn't already exist in the map
                        if (addLayer) {
                            map.addLayer(layer);
                        }
                    }
                    finally {
                        layer.resume();
                    }
                };
                TempestModule.prototype._loggingTempestCollection = function (collection, sender) {
                    // remove this later, after developing
                    // logging the current feature set collections
                    console.log("========= Logging Collection ===== called by " + sender);
                    //this.app.featureSetManager.isCollectionOpen
                    var fsc = collection;
                    if (fsc.countFeatures() > 0) {
                        console.log("=== FSC: id: {0}, source name: {1}, # of features: {2}, is FSC open: {3}".format(fsc.id, fsc.sourceName, fsc.countFeatures(), this.app.featureSetManager.isCollectionOpen(fsc.id)));
                        var fVal = [];
                        fsc.featureSets.getItems().forEach(function (fs) {
                            var lyrName = fs.layer.name;
                            var gisFieldName = (lyrName == "sde.SDE.TempestParcels") ? "GISLINK" : "PROP_NO";
                            console.log("!! FS: (" + fs.displayName.get() + ") for a layer: (" + fs.layer.name + ")");
                            fs.features.getItems().forEach(function (f) {
                                //fVal.push(f.getPrimaryKeyValue());
                                var val = f.esriFeature.get().attributes[gisFieldName];
                                console.log("!! Attribute: (" + val + ") for " + gisFieldName);
                                fVal.push("{0}-{1}".format(lyrName, val));
                            });
                        });
                        console.log("Total Feature Values: {0}".format(fVal.join(",")));
                    }
                    console.log("========= End Collection =====");
                };
                TempestModule.prototype._loggingFeatureSetCollection = function () {
                    // remove this later, after developing
                    // logging the current feature set collections
                    console.log("========= Logging FSCs =====");
                    for (var i = 0; i < this.app.featureSetManager.featureSetCollections.getLength(); i++) {
                        console.log("========= FSC:  " + i + " =====");
                        //this.app.featureSetManager.isCollectionOpen
                        var fsc = this.app.featureSetManager.featureSetCollections.getAt(i);
                        if (fsc.countFeatures() > 0) {
                            console.log("=== FSC: id: {0}, source name: {1}, layerName: {2}, # of features: {3}, is FSC open: {4}".format(fsc.id, fsc.sourceName, fsc.featureSets.getAt(0).layer.name, fsc.countFeatures(), this.app.featureSetManager.isCollectionOpen(fsc.id)));
                            var fVal = [];
                            fsc.featureSets.getItems().forEach(function (fs) {
                                fs.features.getItems().forEach(function (f) {
                                    fVal.push(f.getPrimaryKeyValue());
                                });
                            });
                            console.log("{0}".format(fVal.join(",")));
                        }
                    }
                    console.log("========= End FSCs =====");
                };
                TempestModule.prototype.handlerFSMCollectionClosedEvent = function (args) {
                    // Need this to update the Commands's canExecute
                    this.app.command("ClearTempestSelection").raiseCanExecuteChanged();
                    ////Add all features to the Tempest FS Collection
                    //var fsmArgs: gcxInfrastructure.eventArgs.FeatureSetManagerEventArgs = args;
                    //// DO Nothing when Tempest Collection is closed, while update Tempest Colleciton with the new features when it is realted with thew Tempest Layer.
                    //if (fsmArgs.featureSetCollectionId == this.TEMPEST_COLLECTION_ID) {
                    //    return;
                    //} else {
                    //    //var fsArray: gcxInfrastructure.FeatureSet[] = fsmArgs.featureSetCollection.featureSets.get();
                    //    //this.prepFeatureSetArrayInCollection(fsArray, this.TEMPEST_COLLECTION_ID, null);
                    //}    
                };
                TempestModule.prototype._getDefaultCollectionForEmptyId = function (collectionId) {
                    var collection;
                    return collection;
                };
                TempestModule.prototype._findCollectionInSavedResults = function (collection, collectionId) {
                    if (!collection && collectionId) {
                        return this._findResultsByName(collectionId);
                    }
                    else {
                        return Promise.resolve(collection);
                    }
                };
                TempestModule.prototype._findCollectionById = function (collection, collectionId) {
                    if (!collection && collectionId) {
                        collection = this.app.featureSetManager.getCollectionById(collectionId);
                        if (collection) {
                            collection.displayName.set(collectionId);
                        }
                    }
                    return collection;
                };
                TempestModule.prototype._findResultsByName = function (name) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        if (!name) {
                            resolve(null);
                            return;
                        }
                        // Wrap command execution in a promise
                        _this.app.command("FindSelection").execute({ name: name, successCallback: resolve, errorCallback: reject });
                    });
                    //}).catch( (ignoredError) => {
                    //        return <gcxInfrastructure.FeatureSetCollection>null;
                    //});
                };
                TempestModule.prototype._findCollectionForSelectFeaturesActivity = function (collectionId) {
                    var _this = this;
                    // Search for saved results first, then on the collections managed by the FeatureSetManager.
                    return Promise.try(function () { return _this._getDefaultCollectionForEmptyId(collectionId); })
                        .then(function (collection) { return _this._findCollectionInSavedResults(collection, collectionId); })
                        .then(function (collection) { return _this._findCollectionById(collection, collectionId); })
                        .then(function (collection) { return _this._createNewCollection(collection, collectionId); });
                };
                TempestModule.prototype._createNewCollection = function (collection, collectionId) {
                    // If no matching collection found, create a new one to hold the features.
                    if (!collection && collectionId) {
                        collection = new gcxInfrastructure.FeatureSetCollection();
                        collection.id = collectionId;
                        collection.sourceName = "Workflow";
                        collection.displayName.set(collectionId);
                        this.app.featureSetManager.addCollection(collection);
                    }
                    return collection;
                };
                TempestModule.prototype.handlerFSMCollectionChangedEvent = function (args) {
                    if (this._layerNameMappings != null &&
                        args != null &&
                        args.featureSetCollection != null &&
                        args.featureSetCollection.id === this.TEMPEST_COLLECTION_ID) {
                        var fsc = args.featureSetCollection;
                        // The Workflow. TempestToEssentials, executes 'SelectFeatures' activity...
                        this._highlightTempestFeatureSetCollection(fsc);
                    }
                    else {
                        console.info("DEBUG: handlerFSMCollectionChangedEvent(): do nothing()");
                    }
                };
                TempestModule.prototype._getExportData = function (lyrName) {
                    var retValues = [];
                    for (var ind = 0, exportDataLen = this._tempestExportData.length; ind < exportDataLen; ++ind) {
                        var dataToExport = this._tempestExportData[ind];
                        if (dataToExport["Key"] === lyrName) {
                            retValues = dataToExport["Value"];
                            break;
                        }
                    }
                    return retValues;
                };
                TempestModule.prototype.handleExportTempestData = function (activityContext) {
                    var data = new gcxInfrastructure.Dictionary();
                    // IMPORTANT NOTE: TempestExportData, Dictionary<string, List<string>>, should contain the same number of Layre Names of _LayerNameMapping
                    // with the values of each layer represents the feature values of the layer so that the previously selected feature values are properly deleted before Inserting new ones.
                    for (var i = 0; i < this._layerNameMappings.length; i++) {
                        var lyrNameMapped = this._layerNameMappings[i].key;
                        var values = this._getExportData(lyrNameMapped);
                        data.set(lyrNameMapped, values);
                    }
                    var tempestExportData = [];
                    var keys = data.keys();
                    for (var j = 0; j < keys.length; j++) {
                        var obj = {};
                        obj["Key"] = keys[j];
                        obj["Value"] = data.get(keys[j]);
                        //this.app.trace.info("handleExportTempestData(): TempestExportData output to WF - Client Activity: ({0}, {1})".format(keys[j], data.get(keys[j])));
                        tempestExportData.push(obj);
                    }
                    activityContext.setValue("TempestExportData", tempestExportData);
                    activityContext.completeActivity();
                };
                TempestModule.prototype.handleTempestStartActivity = function (activityContext) {
                    var dt = this._lastUpdatedTime;
                    activityContext.setValue(this.TEMPEST_WORKFLOW_SESSION_ID_NAME, this._tempestSessionId);
                    activityContext.setValue(this.IS_FIRST_LOAD, dt.getFullYear() === this.START_YEAR ? true : false);
                    if (activityContext.workflow().id == this._tempestToEssentialsWorkflowId) {
                        this._suppressExportToTempest = true;
                    }
                    else {
                        this._suppressExportToTempest = false;
                    }
                    activityContext.completeActivity();
                };
                TempestModule.prototype.handleRetrieveTempestMappings = function (activityContext) {
                    var jsonMapping = activityContext.getJsonValue("TempestMappings");
                    //this.app.trace.info("handleRetrieveTempestMappings() : " + jsonMapping);
                    if (String.isNullOrEmpty(jsonMapping)) {
                        var msg = "{0}: There are no defined mappings of Tempest variables to Essentials variables.".format(this._tempestApplicationName);
                        alert(msg);
                        activityContext.completeActivity();
                        return;
                    }
                    var jsonMappingDecoded = decodeURIComponent(jsonMapping);
                    //Take empty space back to the original one
                    jsonMappingDecoded = jsonMappingDecoded.split("+").join(" ");
                    var mappingsObj = JSON.parse(jsonMappingDecoded);
                    if (mappingsObj && mappingsObj.length > 0) {
                        this.setTempestMapping(mappingsObj);
                    }
                    activityContext.completeActivity();
                };
                TempestModule.prototype.handleSetLastUpdatedTimeActivity = function (activityContext) {
                    var lastUpdateTimeJson = activityContext.getValue("lastUpdateTime");
                    this._lastUpdatedTime = new Date(parseInt(lastUpdateTimeJson.substr(6)));
                    activityContext.completeActivity();
                };
                TempestModule.prototype.handleCheckIfRefreshTimeExceeded = function (activityContext) {
                    var timeToCheckJson = activityContext.getValue("timeToCheck");
                    var minimumInterval = activityContext.getValue("minimumInterval");
                    var isExceeded = false;
                    var timeToCheck = new Date(parseInt(timeToCheckJson.substr(6)));
                    if (this._lastUpdatedTime) {
                        var diffTime = timeToCheck.getTime() - this._lastUpdatedTime.getTime();
                        if (diffTime > minimumInterval) {
                            this._lastUpdatedTime = timeToCheck;
                            isExceeded = true;
                        }
                        activityContext.setValue("isRefreshTimeExceeded", isExceeded);
                    }
                    else {
                        this.app.trace.info("{0}: handleCheckIfRefreshTimeExceeded(): _lastUpdatedTime is NOT available.".format(this.CLASS_NAME));
                    }
                    activityContext.completeActivity();
                };
                TempestModule.prototype.setTempestMapping = function (mappingsObj) {
                    for (var i = 0, len = mappingsObj.length; i < len; i++) {
                        var mapping = mappingsObj[i];
                        switch (mapping.Key) {
                            case "GisZoomFields":
                                // initialzie
                                this._gisZoomFields = null;
                                // For example, PROPERTY=GISLINK
                                var gisZoomValue = mapping.Value;
                                if (gisZoomValue == "System.Collections.Specialized.NameValueCollection") {
                                }
                                else {
                                    var outer = gisZoomValue.split("&");
                                    for (var gzfCnt = 0, gzfLen = outer.length; gzfCnt < gzfLen; gzfCnt++) {
                                        //this.app.trace.debug("{0}: processing GisZoomFields {1}".format(this.CLASS_NAME, outer[gzfCnt]));
                                        var inner = outer[gzfCnt].split("=");
                                        if (inner.length != 2) {
                                            this.app.trace.error("{0}: A GisZoomFields mapping was not provided.".format(this.CLASS_NAME));
                                            break;
                                        }
                                        if (this._gisZoomFields == null) {
                                            this._gisZoomFields = new gcxInfrastructure.Dictionary();
                                        }
                                        if (this._gisZoomFields.containsKey(inner[0]) == false) {
                                            this._gisZoomFields.set(inner[0], inner[1]);
                                        }
                                        else {
                                            this._gisZoomFields[inner[0]] = inner[1];
                                        }
                                    }
                                }
                                // Check LayerNameMappings
                                //this._gisZoomFields.keys().forEach((key) => {
                                //    console.log("CHECK::: setTempestMapping(): GisZoomFields values: ({0})-- ({1})".format(key, this._gisZoomFields.get(key)));
                                //});
                                break;
                            case "LayerNameMappings":
                                // initialzie
                                this._layerNameMappings = [];
                                // For example, PROPERTY=sde.SDE.TempestParcels, 
                                var layerNameMappingsValue = mapping.Value;
                                if (layerNameMappingsValue == "System.Collections.Specialized.NameValueCollection") {
                                }
                                else {
                                    var outer = layerNameMappingsValue.split("&");
                                    for (var lnmCnt = 0, lnmLen = outer.length; lnmCnt < lnmLen; lnmCnt++) {
                                        //this.app.trace.debug("{0}: processing LayerNameMappings {1}".format(this.CLASS_NAME, outer[lnmCnt]));
                                        var inner = outer[lnmCnt].split("=");
                                        if (inner.length != 2) {
                                            this.app.trace.error("{0}: **A LayerNameMappings mapping was not provided.".format(this.CLASS_NAME));
                                            break;
                                        }
                                        // new way
                                        if (this._containsKey(this._layerNameMappings, inner[0]) == false) {
                                            this._layerNameMappings.push(new GcxTempest_Modules.KeyValuePair(inner[0], inner[1]));
                                        }
                                        else {
                                            //this._layerNameMappings.push(new KeyValuePair(inner[0], inner[1]));
                                            console.log("DEBUG:: _layerNameMappings has already the key of ({0}).".format(inner[0]));
                                        }
                                    }
                                }
                                // Check LayerNameMappings
                                //for (let i = 0, len = this._layerNameMappings.length; i < len; i++) {
                                //    let kvp = this._layerNameMappings[i];
                                //    console.log("CHECK::: setTempestMapping(): LayerNameMappings values: ({0})-- ({1})".format(kvp.key, kvp.value));
                                //}
                                break;
                            //case "DbZoomFields":
                            //    var dbZoomFields = mapping.Value;
                            //    if (gisZoomValue == "System.Collections.Specialized.NameValueCollection") {
                            //        // do nothing;
                            //    }
                            //    else {
                            //    }
                            //    break;
                            //case "GisExportFields":
                            //    var gisExportFields = mapping.Value;
                            //    if (gisZoomValue == "System.Collections.Specialized.NameValueCollection") {
                            //        // do nothing;
                            //    }
                            //    else {
                            //    }
                            //    break;
                            //case "DbExportFields":
                            //    var dbExportFields = mapping.Value;
                            //    if (gisZoomValue == "System.Collections.Specialized.NameValueCollection") {
                            //        // do nothing;
                            //    }
                            //    else {
                            //    }
                            //    break;
                            default:
                                break;
                        }
                    }
                };
                /**
                * Find the existing Tempest feature values on the Tempest Feature set collection from the feature set manager
                **/
                TempestModule.prototype._getExitingTempestFeatureValuesInFeatureSetCollection = function () {
                    var retVal = new gcxInfrastructure.Dictionary();
                    var fsc = this.app.featureSetManager.getCollectionById(this.TEMPEST_COLLECTION_ID);
                    for (var featureSetIndex = 0; featureSetIndex < fsc.featureSets.getLength(); featureSetIndex++) {
                        var gcxFeatureSet = fsc.featureSets.getAt(featureSetIndex);
                        if (gcxFeatureSet) {
                            var layerName = gcxFeatureSet.layer.name;
                            var attValues = [];
                            if (gcxFeatureSet.layer) {
                                var gisLinkField = this._getFieldNameByLayerName(layerName);
                                gcxFeatureSet.features.get().forEach(function (feature) {
                                    feature.attributes.get().forEach(function (featureAttribute) {
                                        if (featureAttribute.name.get() === gisLinkField) {
                                            var gisLinkValue = featureAttribute.value.get();
                                            if (gisLinkValue != null) {
                                                attValues.push("{0}".format(gisLinkValue));
                                            }
                                        }
                                    });
                                });
                                // populate the dictionary, whose key is 'layername' and value is a list of feature values
                                retVal.set(layerName, attValues);
                            }
                        }
                    }
                    return retVal;
                };
                TempestModule.prototype._getFieldNameByLayerName = function (dbLayerName) {
                    var gisLinkField = "";
                    if (this._gisZoomFields.containsKey(dbLayerName)) {
                        gisLinkField = this._gisZoomFields.get(dbLayerName);
                    }
                    else {
                        // None provided, assume the default
                        gisLinkField = this.GIS_LINK_ID;
                    }
                    //console.log("_getFieldNameByLayerName(): input dbLayerName: ({0}) -- return fieldname: ({1}).".format(dbLayerName, gisLinkField));
                    return gisLinkField;
                };
                TempestModule.prototype._containsKey = function (pairs, keyToFind) {
                    var found = false;
                    for (var i = 0, pairLen = pairs.length; i < pairLen; ++i) {
                        if (pairs[i].key === keyToFind) {
                            found = true;
                            break;
                        }
                    }
                    return found;
                };
                TempestModule.prototype._isValueInKeyValuePairs = function (pairs, valueToSearch) {
                    var found = false;
                    for (var i = 0, pairLen = pairs.length; i < pairLen; ++i) {
                        if (pairs[i].value === valueToSearch) {
                            found = true;
                            break;
                        }
                    }
                    return found;
                };
                /**
                * Return the Tempest (DB) Layer Name on given the GIS layer nam
                **/
                TempestModule.prototype._findPairKeyByValue = function (pairs, valueToSearch) {
                    var key = "";
                    for (var i = 0, pairLen = pairs.length; i < pairLen; ++i) {
                        if (pairs[i].value === valueToSearch) {
                            key = pairs[i].key;
                            break;
                        }
                        else {
                        }
                    }
                    return key;
                };
                /**
                 * Copied from GVH: geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyUtils class
                 * Get the service URL, or return null if we don't support identify operations for that service.
                 */
                TempestModule.prototype._getIdentifyTaskUrl = function (service) {
                    if (!service || !service.serviceUrl) {
                        return null;
                    }
                    if (!this._hasQueryCapability(service)) {
                        return null;
                    }
                    if (service instanceof geocortex.essentials.FeatureLayerService) {
                        // Return the URL to the underlying map service 
                        var serviceUrl = service.serviceUrl.substring(0, service.serviceUrl.lastIndexOf("/"));
                        var mapServiceUrl = serviceUrl.replace(/FeatureServer$/i, "MapServer");
                        return mapServiceUrl;
                    }
                    // TEMPORARY! Commented out for demo purposes.
                    /*
                    if (service instanceof geocortex.essentials.GeoRssLayerService) {
                        return null;
                    }*/
                    if (service.mapServiceType == geocortex.essentials.MapServiceType.DYNAMIC
                        || service.mapServiceType == geocortex.essentials.MapServiceType.TILED) {
                        var serviceUrl = service.serviceUrl;
                        if (service.serviceToken) {
                            serviceUrl += "?token=" + encodeURIComponent(service.serviceToken);
                        }
                        return serviceUrl;
                    }
                    return null;
                };
                /**
                 * Copied from GVH: geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyUtils class
                 **/
                TempestModule.prototype._hasQueryCapability = function (service) {
                    if (!service && !service.serviceLayer) {
                        return false;
                    }
                    var serviceLayer = service.serviceLayer;
                    if (serviceLayer.version < 10) {
                        // Capabilities not published before AGS 10, so we'll just assume true - this may result in some errors, but we can swallow them
                        return true;
                    }
                    return serviceLayer.capabilities && serviceLayer.capabilities.indexOf("Query") >= 0;
                };
                TempestModule.prototype._getTempestLayerIDs = function (mapService) {
                    var layerIds = new Array();
                    for (var i = 0; i < mapService.layers.length; i++) {
                        var layer = mapService.layers[i];
                        // Only Include the Tempest related layers
                        if (String.isNullOrEmpty(this._findPairKeyByValue(this._layerNameMappings, layer.name)) == false) {
                            layerIds.push(layer.id);
                        }
                    }
                    //this.app.trace.info("_getTempestLayerIDs(): layerIds: ({0}).".format(layerIds.join(",")));
                    return layerIds;
                };
                TempestModule.prototype._handleConfiguration = function () {
                    // Read Configuration
                    if (this._config.hasOwnProperty(this.TEMPEST_MAPSERVICE_ID)) {
                        this._tempestMapServiceId = this._config[this.TEMPEST_MAPSERVICE_ID];
                        this.tempestGcxMapService = GcxTempest_Modules.Utilities.getMapserviceById(this._tempestMapServiceId, this.app.site);
                        if (this.tempestGcxMapService.serviceLayer) {
                            this.maxRecordCount = this.tempestGcxMapService.serviceLayer.maxRecordCount;
                        }
                    }
                    else {
                        this.app.trace.error("{0} is not configured on custom module, Tempest.".format(this.TEMPEST_MAPSERVICE_ID));
                    }
                    if (this._config.hasOwnProperty("removeMarkupOnError")) {
                        this.removeMarkupOnError = this._config["removeMarkupOnError"];
                    }
                    if (this._config.hasOwnProperty("messsage_OverMaxRecords_Buffer")) {
                        this.messsage_OverMaxRecords_Buffer = this._config["messsage_OverMaxRecords_Buffer"];
                    }
                    if (this._config.hasOwnProperty("messsage_OverMaxRecords_Select")) {
                        this.messsage_OverMaxRecords_Select = this._config["messsage_OverMaxRecords_Select"];
                    }
                    if (this._config.hasOwnProperty("fillColor")) {
                        this._fillColor = this._config["fillColor"];
                    }
                    else {
                        this._fillColor = "#aa333380"; // Default Fill Color
                    }
                    if (this._config.hasOwnProperty("borderColor")) {
                        this._borderColor = this._config["borderColor"];
                    }
                    else {
                        this._borderColor = "#cc4433FF"; // Default Border Color
                    }
                    if (this._config.hasOwnProperty(this.FEATURESET_COLLECTION_SOURCE_NAME)) {
                        this._featureSetCollectionSourceName = this._config[this.FEATURESET_COLLECTION_SOURCE_NAME];
                    }
                    else {
                        this._featureSetCollectionSourceName = this.FEATURESET_COLLECTION_SOURCE_NAME_DEFAULT;
                    }
                    if (this._config.hasOwnProperty(this.TEMPEST_SESSION_ID_NAME)) {
                        this._tempestSessionIdName = this._config[this.TEMPEST_SESSION_ID_NAME];
                    }
                    else {
                        this._tempestSessionIdName = "";
                    }
                    if (this._config.hasOwnProperty(this.TEMPEST_TO_ESSENTIALS_WORKFLOW_ID)) {
                        this._tempestToEssentialsWorkflowId = this._config[this.TEMPEST_TO_ESSENTIALS_WORKFLOW_ID];
                    }
                    else {
                        this._tempestToEssentialsWorkflowId = this.TEMPEST_TO_ESSENTIALS_WORKFLOW_ID_DEFAULT;
                    }
                    if (this._config.hasOwnProperty(this.ESSENTIALS_TO_TEMPEST_WORKFLOW_ID)) {
                        this._essentialsToTempestWorkflowId = this._config[this.ESSENTIALS_TO_TEMPEST_WORKFLOW_ID];
                    }
                    else {
                        this._essentialsToTempestWorkflowId = this.ESSENTIALS_TO_TEMPEST_WORKFLOW_ID_DEFAULT;
                    }
                    if (this._config.hasOwnProperty(this.TEMPEST_APPLICATION_NAME_ID)) {
                        this._tempestApplicationName = this._config[this.TEMPEST_APPLICATION_NAME_ID];
                    }
                    // Register Tempest Identify tools
                    //if (this._config.hasOwnProperty("tools") && dojo.isArray(this._config.tools) && this.app && this.app.toolRegistry) {
                    //    this.app.toolRegistry.createTools(this._config.tools, true);
                    //    // This is for enabling the custom tool button on the Toolbar configuratin
                    //    // This is related with GVH-6158. Since the following configurations on tabbedtool - "command": "SetActiveTool", "commandParameter": "TempestIdentifyPolygonTool_Button",
                    //    this.app.command("SetActiveTool").raiseCanExecuteChanged();
                    //    this.app.trace.info("{0}: Register SetActiveTool.".format(this.CLASS_NAME));
                    //}
                };
                /**
                 * Copied from GVH: geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyUtils class
                 * This should be GVH Infrastructure Class, not one of Mapping. Wish the GVH product export this method.
                 **/
                TempestModule.prototype._appendToFeatureSetCollection = function (identifyResults, featureSetCollection, mapService, app) {
                    // Create a new FSC in case we don't have one yet
                    // This allows callers to use this function to either append *or* create a FSC
                    if (featureSetCollection == null) {
                        featureSetCollection = new gcxInfrastructure.FeatureSetCollection();
                    }
                    // Create a dictionary mapping of layer ids to feature sets
                    var featureSetMap = new Object();
                    // Add each feature to a feature set, based on layer id
                    for (var i = 0; i < identifyResults.length; i++) {
                        var identifyResult = identifyResults[i];
                        // Get from the map.  If the feature set is not there, create and add to the map
                        var featureSet = featureSetMap[identifyResult.layerId];
                        if (featureSet == null) {
                            // Build a mapping of field aliases to field names, since identify results have field aliases rather than field names
                            var layer = mapService.findLayerById(identifyResult.layerId.toString());
                            var fieldAliasToFieldMap = new Object();
                            if (layer) {
                                for (var j = 0; j < layer.fields.length; j++) {
                                    var field = layer.fields[j];
                                    fieldAliasToFieldMap[field.alias] = field;
                                }
                            }
                            // Create the esri feature set
                            var displayFieldName = null;
                            // Make sure there is a displayFieldName (see issue GVH-811)
                            if (identifyResult.displayFieldName) {
                                var displayField = fieldAliasToFieldMap[identifyResult.displayFieldName];
                                if (displayField && displayField.name) {
                                    displayFieldName = displayField.name;
                                }
                            }
                            // If we didn't find a displayFieldName, let's fall back to the primaryKeyField
                            if (!displayFieldName) {
                                if (layer && layer.primaryKeyField && layer.primaryKeyField.name) {
                                    displayFieldName = layer.primaryKeyField.name;
                                }
                                else {
                                    displayFieldName = identifyResult.displayFieldName;
                                }
                            }
                            var esriFeatureSet = new esri.tasks.FeatureSet({
                                "displayFieldName": displayFieldName,
                                "features": []
                            });
                            if (identifyResult.feature.geometry) {
                                esriFeatureSet.geometryType = identifyResult.feature.geometry.type;
                                esriFeatureSet.spatialReference = identifyResult.feature.geometry.spatialReference;
                            }
                            // Create the gcx feature set
                            featureSet = new gcxInfrastructure.FeatureSet({ "esriFeatureSet": esriFeatureSet, "layer": layer }); // "allowUnsafeContent": app.configuration.allowUnsafeContent
                            if (layer) {
                                featureSet.displayName.set(layer.displayName);
                            }
                            else {
                                featureSet.displayName.set(identifyResult.layerName);
                            }
                            featureSetMap[identifyResult.layerId] = featureSet;
                        }
                        // Correct the attribute names - convert from field aliases to names
                        if (featureSet.layer) {
                            gcxInfrastructure.GraphicUtils.sanitizeAttributeNames(identifyResult.feature, featureSet.layer);
                        }
                        // Add the graphic to the EsriFeatureSet
                        featureSet.esriFeatureSet.features.push(identifyResult.feature);
                        // Convert the Esri feature to a geocortex feature
                        var options = { "graphic": identifyResult.feature, "layer": featureSet.layer, "resolveLayerFields": true, "allowUnsafeContent": false };
                        if (mapService.drawingBehavior === geocortex.essentials.DrawingBehavior.KML_SERVICE) {
                            // Similar to GeoRSS, we will honour this setting for KML services, since the
                            // description very often contains HTML.
                            options.allowUnsafeContent = app.configuration.allowUnsafeContent;
                        }
                        var gcxFeature = new gcxInfrastructure.Feature(options);
                        if (mapService.drawingBehavior === geocortex.essentials.DrawingBehavior.KML_SERVICE) {
                            // For KML services, map the description and long description to their appropriate
                            // KML counterparts. Unlike other types of layers, these are hard-coded and cannot 
                            // be configured by the administrator in Essentials.
                            gcxFeature.descriptionFormat.set("{snippet}");
                            gcxFeature.longDescriptionFormat.set(identifyResult.feature.attributes.hasOwnProperty("balloonStyleText") ? "{balloonStyleText}" : "{description}");
                        }
                        // Append the feature to the feature set
                        featureSet.features.addItem(gcxFeature);
                    }
                    // Add each feature set to the feature set collection
                    for (var layerName in featureSetMap) {
                        if (!featureSetMap.hasOwnProperty(layerName)) {
                            continue;
                        }
                        var featureSet = featureSetMap[layerName];
                        featureSetCollection.featureSets.addItem(featureSet);
                        // Resolve any datalinks the feature set might have, and notify when a feature has any datalinks resolved.
                        featureSet.resolveDataLinks(function (feature) {
                            app.event("FeatureChangedEvent").publish(feature);
                        });
                    }
                    // Return the feature set, in case we created a new one
                    return featureSetCollection;
                };
                TempestModule.prototype._addGraphic = function (graphic, layerId) {
                    if (graphic) {
                        var layer = this._getGraphicsLayer(true, layerId);
                        layer.add(graphic);
                        // Make sure the layer is visible.
                        if (!layer.visible) {
                            layer.setVisibility(true);
                        }
                    }
                };
                TempestModule.prototype._getGraphicsLayer = function (create, id) {
                    // Get the Graphics layer
                    var layer = this.app.map.getLayer(id);
                    // Create the graphics layer if it doesn't exist, and we're supposed to create
                    if (!layer && create) {
                        layer = new esri.layers.GraphicsLayer();
                        layer.id = id;
                        // Silverlight has a set HideWhenEmptyProperty here, but Javascript doesn't seem to have an equivalent.
                        // But if there's nothing here, nothing should show anyway?
                        this.app.map.addLayer(layer);
                        this.app.map.reorderLayer(layer, 0);
                    }
                    // In silverlight, we subscribe to changes to the graphics. I'm not yet sure why this is, or if it's necessary.
                    return layer;
                };
                return TempestModule;
            })(geocortex.framework.application.ModuleBase);
            GcxTempest_Modules.TempestModule = TempestModule;
        })(GcxTempest_Modules = services.GcxTempest_Modules || (services.GcxTempest_Modules = {}));
    })(services = geocortex.services || (geocortex.services = {}));
})(geocortex || (geocortex = {}));
var geocortex;
(function (geocortex) {
    var services;
    (function (services) {
        var GcxTempest_Modules;
        (function (GcxTempest_Modules) {
            var Utilities = (function () {
                function Utilities() {
                }
                Utilities.getFeatureLayer = function (name, site) {
                    var featureServices = site.getFeatureServices();
                    var featureLayer;
                    featureServices.forEach(function (featureService) {
                        if (featureService.serviceLayer && featureService.serviceLayer.name === name) {
                            featureLayer = featureService.serviceLayer;
                            return;
                        }
                    });
                    return featureLayer;
                };
                Utilities.getEssentialsLayer = function (name, site) {
                    var geocortexLayer = null;
                    for (var i = 0, msLen = site.essentialsMap.mapServices.length; i < msLen; i++) {
                        var mapService = site.essentialsMap.mapServices[i];
                        geocortexLayer = mapService.findLayerByName(name);
                        if (geocortexLayer) {
                            break;
                        }
                    }
                    return geocortexLayer;
                };
                Utilities.getMapServiceFromIdentiftResult = function (idResults, layerNameMappings, app) {
                    var gcxLayerMapservice = null;
                    // all Tempest layers are in one map service
                    for (var idResCnt = 0, idResLen = idResults.length; idResCnt < idResLen; ++idResCnt) {
                        var idResult = idResults[idResCnt];
                        var idResultLayerName = idResult.layerName;
                        // Handle only Tempest Layer's Identify Results
                        if (String.isNullOrEmpty(this.findPairKeyByValue(layerNameMappings, idResultLayerName, app)) == false) {
                            var gcxLayer = Utilities.getEssentialsLayer(idResultLayerName, app.site);
                            gcxLayerMapservice = gcxLayer.mapService;
                            break;
                        }
                    }
                    return gcxLayerMapservice;
                };
                /**
                * Return the Tempest (DB) Layer Name on given the GIS layer nam
                **/
                Utilities.findPairKeyByValue = function (pairs, valueToSearch, app) {
                    var key = "";
                    for (var i = 0, pairLen = pairs.length; i < pairLen; ++i) {
                        if (pairs[i].value === valueToSearch) {
                            key = pairs[i].key;
                            break;
                        }
                        else {
                        }
                    }
                    return key;
                };
                Utilities.getMapserviceById = function (msIddToSearch, site) {
                    var mapService = null;
                    for (var i = 0, msLen = site.essentialsMap.mapServices.length; i < msLen; i++) {
                        var ms = site.essentialsMap.mapServices[i];
                        if (ms.id === msIddToSearch) {
                            mapService = ms;
                            break;
                        }
                    }
                    return mapService;
                };
                Utilities.findMapServiceById = function (site, serviceId) {
                    if (serviceId && site && site.essentialsMap && site.essentialsMap.mapServices) {
                        return geocortex.essentials.utilities.SiteResourceIdComparer.lookUp(site.essentialsMap.mapServices, serviceId);
                    }
                    return null;
                };
                Utilities.findMapServiceByMap = function (map, serviceId) {
                    if (!map || !serviceId) {
                        return null;
                    }
                    // Search regular layers
                    if (map.layerIds != null) {
                        for (var i = 0; i < map.layerIds.length; i++) {
                            var layer = map.getLayer(map.layerIds[i]);
                            if (layer != null && geocortex.essentials.utilities.SiteResourceIdComparer.equals(layer.id, serviceId)) {
                                // Found matching map service
                                return layer;
                            }
                        }
                    }
                    // Search graphics layers
                    if (map.graphicsLayerIds != null) {
                        for (var i = 0; i < map.graphicsLayerIds.length; i++) {
                            var layer = map.getLayer(map.graphicsLayerIds[i]);
                            if (layer != null && geocortex.essentials.utilities.SiteResourceIdComparer.equals(layer.id, serviceId)) {
                                // Found matching map service
                                return layer;
                            }
                        }
                    }
                    return null;
                };
                return Utilities;
            })();
            GcxTempest_Modules.Utilities = Utilities;
        })(GcxTempest_Modules = services.GcxTempest_Modules || (services.GcxTempest_Modules = {}));
    })(services = geocortex.services || (geocortex.services = {}));
})(geocortex || (geocortex = {}));
/// <reference path="../_Build/TSDefinitions/JQuery.d.ts" />
/// <reference path="../_Build/TSDefinitions/dojo.d.ts" />
/// <reference path="../_Build/TSDefinitions/Framework.d.ts" />
/// <reference path="../_Build/TSDefinitions/Framework.UI.d.ts" />
/// <reference path="../_Build/TSDefinitions/Essentials.d.ts" />
/// <reference path="../_Build/TSDefinitions/Mapping.Infrastructure.d.ts" /> 

/* End Script: Resources/TSout/GcxTempest_Modules_ts_out.js ------------------------- */ 

geocortex.resourceManager.register("GcxTempest_Modules","inv","Invariant","json","eyJsYW5ndWFnZS1idWZmZXItb3B0aW9ucy11bml0cy1sYWJlbCI6IlVuaXRzIiwibGFuZ3VhZ2UtYnVmZmVyLWVycm9yLWlkZW50aWZ5LWJ1ZmZlcmVkLWZlYXR1cmUtc2V0IjoiQ291bGQgbm90IGV4ZWN1dGUgSWRlbnRpZnlCdWZmZXJlZEZlYXR1cmVTZXQgb3BlcmF0aW9uLiBGZWF0dXJlIFNldCBvciBGZWF0dXJlIFNldCBDb2xsZWN0aW9uIG5vdCBmb3VuZC4iLCJsYW5ndWFnZS1idWZmZXItYWN0aXZlLXRvb2wtYWRkb24tbWVzc2FnZSI6Ik5vdGU6IEJ1ZmZlcmluZyBpcyBhY3RpdmUuIEEgYnVmZmVyIG9mIHswfSB7MX0gd2lsbCBiZSBhcHBsaWVkLiIsImxhbmd1YWdlLWJ1ZmZlci1vcHRpb25zLWRpc3RhbmNlLXRpdGxlIjoiQnVmZmVyIGRpc3RhbmNlIiwibGFuZ3VhZ2UtYnVmZmVyLXVuaXQtZmVldC1kaXNwbGF5LW5hbWUiOiJGZWV0IChmdCkiLCJsYW5ndWFnZS1idWZmZXItdW5pdC15YXJkLWRpc3BsYXktbmFtZSI6IllhcmRzICh5ZCkiLCJsYW5ndWFnZS1idWZmZXItdW5pdC1taWxlLWRpc3BsYXktbmFtZSI6Ik1pbGVzIChtaSkiLCJsYW5ndWFnZS1idWZmZXItb3B0aW9ucy12aWV3IjoiQnVmZmVyIE9wdGlvbnMiLCJsYW5ndWFnZS1idWZmZXItcHJldmlldy1idXR0b24tdGV4dCI6IlByZXZpZXciLCJsYW5ndWFnZS1idWZmZXItaW52YWxpZC1kaXN0YW5jZSI6IlRoZSBkaXN0YW5jZSBtdXN0IGJlIGEgbm9uLXplcm8gbnVtYmVyLiBJZiBleHRyZW1lIG51bWJlcnMgYXJlIGVudGVyZWQsIGJ1ZmZlcmluZyBtYXkgZmFpbC4iLCJsYW5ndWFnZS1idWZmZXItb3B0aW9ucy1jb250aW51ZS1idXR0b24tdGV4dCI6IkNvbnRpbnVlIiwibGFuZ3VhZ2UtYnVmZmVyLWNsZWFyLWJ1dHRvbi10ZXh0IjoiQ2xlYXIiLCJsYW5ndWFnZS1idWZmZXItb3B0aW9ucy1jb250aW51ZS1idXR0b24tdGl0bGUiOiJDb250aW51ZSBidWZmZXJpbmciLCJsYW5ndWFnZS1idWZmZXItb3B0aW9ucy1sZW5ndGgtdW5pdC1zZWxlY3QiOiJTZWxlY3QgYnVmZmVyIGxlbmd0aCB1bml0IiwibGFuZ3VhZ2UtYnVmZmVyLXByZXZpZXctYnV0dG9uLXRpdGxlIjoiQ2xpY2sgdG8gcHJldmlldyB0aGUgYnVmZmVyZWQgYXJlYSIsImxhbmd1YWdlLWJ1ZmZlci1lcnJvci1kZXRhaWxzLXVuYXZhaWxhYmxlIjoiRXJyb3IgZGV0YWlscyB1bmF2YWlsYWJsZS4iLCJsYW5ndWFnZS1idWZmZXItY2xlYXItYnV0dG9uLXRpdGxlIjoiQ2xlYXIgYnVmZmVyIG9wdGlvbnMiLCJsYW5ndWFnZS1idWZmZXItZXJyb3ItcHJvY2Vzcy1hcmdzIjoiRXJyb3IgcHJvY2Vzc2luZyBidWZmZXIgQXJncyIsImxhbmd1YWdlLWJ1ZmZlci1lcnJvci11bmlvbi1vcGVyYXRpb24iOiJBIHVuaW9uIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIGJ1ZmZlciBvcGVyYXRpb24gcmVzdWx0cy4iLCJsYW5ndWFnZS1idWZmZXItc3RhdHVzLW1zZyI6IkJ1ZmZlcmluZyBpbiBwcm9ncmVzcyAuLi4iLCJsYW5ndWFnZS1idWZmZXItdGFyZ2V0LW1vZHVsZXMtZXJyb3IiOiJ7MH06IFRhcmdldCBtb2R1bGVzIG5vdCBzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGNvbmZpZ3VyYXRpb24uIiwibGFuZ3VhZ2UtYnVmZmVyLWVycm9yLWlucHV0LXZhbGlkYXRpb24iOiJDb3VsZCBub3QgcmV0cmlldmUgY2hpbGQgdmlldyBtb2RlbCBmb3IgdmlldyB3aXRoIGlkIHswfSBmb3IgaW5wdXQgdmFsaWRhdGlvbi4iLCJsYW5ndWFnZS1idWZmZXItaW52YWxpZC11bml0LXdhcm5pbmciOiJVbnN1cHBvcnRlZCBidWZmZXIgdW5pdCAtIHswfS4gUGxlYXNlIGNoZWNrIHlvdXIgY29uZmlndXJhdGlvbi4iLCJsYW5ndWFnZS1idWZmZXItdW5pdC1raWxvbWV0ZXItZGlzcGxheS1uYW1lIjoiS2lsb21ldGVycyAoa20pIiwibGFuZ3VhZ2UtYnVmZmVyLWV4Y2Vzcy1mZWF0dXJlcy13YXJuaW5nIjoiQnVmZmVyaW5nIHswfSBmZWF0dXJlcyBtYXkgdGFrZSBzb21lIHRpbWUgdG8gcHJvY2Vzcy4gWW91ciBicm93c2VyIG1heSBiZWNvbWUgdW5yZXNwb25zaXZlIGR1cmluZyB0aGlzIHBlcmlvZC4gRG8geW91IHdhbnQgdG8gY29udGludWU/IiwibGFuZ3VhZ2UtYnVmZmVyLWNvbmZpZy11bml0cy1lcnJvciI6IkNvbmZpZ3VyYXRpb24gZXJyb3IuIEJ1ZmZlciB1bml0cyBvciBkZWZhdWx0IGJ1ZmZlciB1bml0IG5vdCBzcGVjaWZpZWQgb3IgdW5zdXBwb3J0ZWQuIiwibGFuZ3VhZ2UtYnVmZmVyLXVuaXQtbmF1dGljYWxtaWxlLWRpc3BsYXktbmFtZSI6Ik5hdXRpY2FsIE1pbGVzIChOTSkiLCJsYW5ndWFnZS1idWZmZXItY2FuY2VsLWJ1dHRvbi10ZXh0IjoiQ2FuY2VsIiwibGFuZ3VhZ2UtYnVmZmVyLW9wZXJhdGlvbi1lcnJvciI6IkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGJ1ZmZlcmluZy4gUGxlYXNlIGVuc3VyZSB0aGF0IHRoZSBidWZmZXIgcGFyYW1ldGVycyBjb25maWd1cmVkIGhlcmUgYXJlIGNvcnJlY3QuIERldGFpbHMgb2YgdGhpcyBlcnJvciBhcmU6IHswfSIsImxhbmd1YWdlLWJ1ZmZlci1jYW5jZWwtYnV0dG9uLXRpdGxlIjoiQ2FuY2VsIGJ1ZmZlciBvcHRpb25zIiwibGFuZ3VhZ2UtYnVmZmVyLWVycm9yLWlkZW50aWZ5LWJ1ZmZlcmVkLWZlYXR1cmUtc2V0LWNvbGxlY3Rpb24iOiJDb3VsZCBub3QgZXhlY3V0ZSBJZGVudGlmeUJ1ZmZlcmVkRmVhdHVyZVNldENvbGxlY3Rpb24gb3BlcmF0aW9uLiBGZWF0dXJlIFNldCBDb2xsZWN0aW9uIG5vdCBmb3VuZC4iLCJsYW5ndWFnZS1idWZmZXItdW5pdC1tZXRlci1kaXNwbGF5LW5hbWUiOiJNZXRlcnMgKG0pIiwibGFuZ3VhZ2UtYnVmZmVyLW9wdGlvbnMtZGlzdGFuY2UtbGFiZWwiOiJEaXN0YW5jZSIsImxhbmd1YWdlLWJ1ZmZlci1lcnJvci1pbnZhbGlkLXJlc3VsdHMiOiJUaGUgYnVmZmVyIG9wZXJhdGlvbiByZXR1cm5lZCBpbnZhbGlkIHJlc3VsdHMuIn0=");

geocortex.framework.notifyLibraryDownload("GcxTempest_Modules");
//# sourceMappingURL=GcxTempest_Modules_ts_out.js.map
