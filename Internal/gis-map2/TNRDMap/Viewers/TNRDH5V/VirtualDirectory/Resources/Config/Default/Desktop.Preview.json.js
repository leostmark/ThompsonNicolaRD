{
  "configuration": {
    "version": "2.10",
    "application": {
      "proxyUri": "proxy.ashx?",
      "allowUnsafeContent": false,
      "offlineStorageSpaceMb": "50",
      "geometryServiceUrl": "http://tnrdmap.tnrd.ca/arcgis/rest/services/Utilities/Geometry/GeometryServer"
    },
    "defaultLibraryId": "Mapping",
    "libraries": [
      {
        "id": "Framework.UI",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Framework.UI.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Framework.UI.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Infrastructure",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Infrastructure.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Mapping.Infrastructure.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Mapping.en-US.json.js"
          }
        ],
        "async": true,
        "location": "Resources/Compiled"
      },
      {
        "id": "Charting",
        "uri": "Resources/Compiled/Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Charting.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Charting.en-US.json.js"
          }
        ]
      },
      {
        "id": "Mapping.Charting",
        "uri": "Resources/Compiled/Mapping.Charting.js",
        "locales": [
          {
            "locale": "en-US",
            "uri": "Resources/Locales/Mapping.Charting.en-US.json.js"
          },
          {
            "locale": "inv",
            "uri": "Resources/Locales/Mapping.Charting.en-US.json.js"
          }
        ]
      },
      {
        "id": "GcxTempest_Modules",
        "uri": "{ViewerConfigUri}../../Compiled/GcxTempest_Modules_out.js"
      }
    ],
    "modules": [
      {
        "moduleName": "Tempest",
        "moduleType": "geocortex.services.GcxTempest_Modules.TempestModule",
        "libraryId": "GcxTempest_Modules",
        "configuration": {
          "tempestMapServiceId": "0",
          "fillColor": "#77333380",
          "borderColor": "#cc4433FF",
          "featureSetCollectionSourceName": "Workflow",
          "tempestSessionIdName": "tempest_wi_sessionid",
          "tempestToEssentialsWorkflowId": "TempestToEssentials",
          "essentialsToTempestWorkflowId": "EssentialsToTempest",
          "tempestApplicationName": "Tempest Extension for Geocortex Essentials",
          "removeMarkupOnError": true,
          "messsage_OverMaxRecords_Buffer": "The buffer contains more than the maximum features allowed ({0}).",
          "messsage_OverMaxRecords_Select": "The selection contains more than the maximum features allowed ({0})."
        }
      },
      {
        "moduleName": "Log",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogModule",
        "views": [
          {
            "id": "LogView",
            "viewModelId": "LogViewModel",
            "visible": false,
            "markup": "Mapping/modules/Log/LogView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogView",
            "region": "ApplicationRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.log.LogViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Menu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Menu.MenuModule",
        "configuration": {
          "menus": [
            {
              "id": "LayerActions",
              "description": "@language-layer-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-add-a-feature",
                  "description": "@language-menu-add-a-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-create-24.png",
                  "command": "ShowFeatureTemplatePicker",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-layer",
                  "description": "@language-menu-zoom-to-layer-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "command": "ZoomToLayerExtent",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom-to-visible-scale",
                  "description": "@language-menu-zoom-to-visible-scale-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-visible-extent-24.png",
                  "command": "ZoomToLayerVisibleScale",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-visualization",
                  "description": "@language-menu-visualization-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/visualizations-24.png",
                  "command": "ShowVisualizationView",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-remove-user-added-layer",
                  "description": "@language-menu-remove-user-added-layer-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layer-remove-24.png",
                  "command": "RemoveUserAddedLayer",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-label-options-toggle",
                  "description": "@language-menu-label-options-toggle-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/label-24.png",
                  "command": "ToggleDynamicLabels",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-label-options",
                  "description": "@language-menu-label-options-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/label-options-24.png",
                  "command": "ShowLabelOptionsView",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-layer-addition-edit-layer-properties",
                  "description": "@language-layer-addition-edit-layer-properties-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layer-options-24.png",
                  "command": "ShowLayerPropertiesView",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "LayerListActions",
              "description": "@language-layerlist-actions-desc",
              "items": [
                {
                  "text": "@language-menu-switch-to-legend",
                  "description": "@language-menu-switch-to-legend-desc",
                  "iconUri": "Resources/Images/Icons/legend-16.png",
                  "command": "SwitchToLegendView"
                },
                {
                  "text": "@language-layerDrawingOrder-button-title",
                  "description": "@language-layerDrawingOrder-button-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-reorder-24.png",
                  "command": "OpenLayerDrawingOrderGroups"
                }
              ],
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "id": "LegendActions",
              "description": "@language-layerlist-actions-desc",
              "items": [
                {
                  "text": "@language-menu-switch-to-layerlist",
                  "description": "@language-menu-switch-to-layerlist-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "command": "SwitchToLayerView"
                },
                {
                  "text": "@language-layerDrawingOrder-button-title",
                  "description": "@language-layerDrawingOrder-button-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-reorder-24.png",
                  "command": "OpenLayerDrawingOrderGroups"
                }
              ],
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "id": "FeatureActions",
              "description": "@language-feature-actions-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "Buffer feature for Tempest",
                  "description": "Identify nearby features",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "command": "TempestBufferedFeatureWF",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-details-expanded",
                  "description": "@language-feature-details-expanded-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-tabs-24.png",
                  "batch": [
                    {
                      "command": "ShowFeatureDetailsExpanded",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ],
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-details-compact",
                  "description": "@language-feature-details-compact-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-compact-24.png",
                  "command": "ShowFeatureDetailsCompact",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-buffer-identify-feature",
                  "description": "@language-menu-buffer-identify-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "command": "IdentifyBufferedFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-editing-edit",
                  "description": "@language-feature-editing-edit-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-edit-24.png",
                  "command": "StartEditingAttributesAndGeometryFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-editing-cut-text",
                  "description": "@language-feature-editing-cut-desc",
                  "iconUri": "Resources/Images/Icons/polygon-cut-24.png",
                  "hideOnDisable": true,
                  "command": "CutFeatureInteractive",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-native-attach-file",
                  "description": "@language-native-file-from-browser",
                  "iconUri": "Resources/Images/Icons/Toolbar/attach-file-photo-24.png",
                  "command": "AttachFileToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom",
                  "description": "@language-menu-zoom-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-feature-24.png",
                  "command": "ZoomToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-pan",
                  "description": "@language-common-pan-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "PanToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-results-add-feature",
                  "description": "@language-menu-results-add-feature-desc",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "AddFeatureToResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-results-remove-feature",
                  "description": "@language-menu-results-remove-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "RemoveFeatureFromResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-copy-to-drawings",
                  "description": "@language-menu-copy-to-drawings-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/add-to-draw-layer-24.png",
                  "command": "AddMarkupFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "MapTipActions",
              "description": "@language-menu-maptip-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-maptip-actions-view-details",
                  "description": "@language-menu-maptip-actions-view-details-desc",
                  "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
                  "hideOnDisable": true,
                  "command": "ShowFeatureDetailsFromMaptip"
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-editing-edit",
                  "description": "@language-feature-editing-edit-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-edit-24.png",
                  "command": "StartEditingAttributesAndGeometryFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-results-remove-feature",
                  "description": "@language-menu-results-remove-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "RemoveFeatureFromResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-results-add-feature",
                  "description": "@language-menu-results-add-feature-desc",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "AddFeatureToResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-toolbar-markup-change-markup-style",
                  "description": "@language-toolbar-markup-change-markup-style-tooltip",
                  "command": "CreateMarkupStyleView",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-edit",
                  "description": "@language-common-edit",
                  "command": "EditClickableFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-delete",
                  "description": "@language-common-delete",
                  "command": "DeleteClickableFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-edit-event-message",
                  "description": "@language-collaboration-edit-event-message-desc",
                  "command": "ShowEditCollaborationGraphicMessageView",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-open-event-image",
                  "description": "@language-collaboration-open-event-image-desc",
                  "command": "OpenEventFeatureImage",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "FeatureSetCollectionResultsActions",
              "description": "@language-menu-grouped-results-list-actions",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-table-24.png",
                  "text": "@language-results-toggle-table-view",
                  "description": "@language-results-toggle-table-view-desc",
                  "commandParameter": null,
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "ShowResultsTable",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ]
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "command": "IdentifyBufferedFeatureSetCollection",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "command": "ShowChartingView",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  },
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  },
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  },
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "text": "@language-menu-browse-saved-results",
                  "description": "@language-menu-browse-saved-results-desc",
                  "command": "ListSelections",
                  "commandParameter": null,
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "text": "@language-menu-save-results",
                  "description": "@language-menu-save-results-desc",
                  "command": "ShowSaveSelectionDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "text": "@language-menu-combine-results",
                  "description": "@language-menu-combine-results-desc",
                  "command": "ShowSearchOptions",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "command": "ZoomToFeatureSetCollection",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ],
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "id": "ResultsTableActions",
              "description": "@language-menu-results-table-actions-desc",
              "items": [
                {
                  "text": "@language-results-toggle-list-view",
                  "description": "@language-results-toggle-list-view-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-list-24.png",
                  "libraryId": "Mapping.Infrastructure",
                  "hideOnDisable": true,
                  "command": "SwitchToListResultsView",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "command": "ZoomToFeatureSetCollection",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "hideOnDisable": true,
                  "command": "IdentifyBufferedFeatureSetCollection",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "hideOnDisable": true,
                  "command": "ShowChartingView"
                },
                {
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-browse-saved-results",
                  "description": "@language-menu-browse-saved-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "command": "ListSelections",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-save-results",
                  "description": "@language-menu-save-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "command": "ShowSaveSelectionDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-combine-results",
                  "description": "@language-menu-combine-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "command": "ShowSearchOptions",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ],
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "id": "CoordinateActions",
              "description": "@language-plotcoordinates-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
              "items": [
                {
                  "text": "@language-plotcoordinates-show-coordinate",
                  "description": "@language-plotcoordinates-show-coordinate-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/check-24.png",
                  "command": "ShowCoordinates",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-plotcoordinates-hide-coordinate",
                  "description": "@language-plotcoordinates-hide-coordinate-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                  "command": "HideCoordinates",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-plotcoordinates-edit-coordinate",
                  "description": "@language-plotcoordinates-edit-coordinate-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/data-edit-24.png",
                  "command": "EditCoordinate",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-plotcoordinates-delete-coordinate",
                  "description": "@language-plotcoordinates-delete-coordinate-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "DeleteCoordinates",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "CoordinatesListActions",
              "description": "@language-plotcoordinates-list-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
              "items": [
                {
                  "text": "@language-plotcoordinates-show-all-coordinates",
                  "description": "@language-plotcoordinates-show-all-coordinates-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/coordinates-show-24.png",
                  "command": "ShowAllCoordinates",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-plotcoordinates-hide-all-coordinates",
                  "description": "@language-plotcoordinates-hide-all-coordinates-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/coordinates-hide-24.png",
                  "command": "HideAllCoordinates",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-plotcoordinates-delete-all-coordinates",
                  "description": "@language-plotcoordinates-delete-all-coordinates-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "DeleteAllCoordinates",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "ProjectActions",
              "description": "@language-menu-project-actions-desc",
              "items": [
                {
                  "text": "@language-common-share",
                  "iconUri": "Resources/Images/Icons/Toolbar/share-24.png",
                  "command": "ShowShareProject",
                  "hideOnDisable": true,
                  "description": "@language-menu-project-share-project-desc"
                },
                {
                  "text": "@language-project-actions-edit",
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "command": "ShowProjectEditor",
                  "hideOnDisable": true,
                  "description": "@language-menu-project-edit-project-desc"
                },
                {
                  "text": "@language-common-delete",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "DeleteProject",
                  "hideOnDisable": true,
                  "description": "@language-menu-project-delete-project-desc"
                }
              ],
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "id": "ProjectsActions",
              "description": "@language-menu-projects-actions-desc",
              "items": [
                {
                  "text": "@language-common-refresh",
                  "description": "@language-menu-projects-actions-refresh-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                  "command": "RefreshProjectsList"
                }
              ],
              "defaultIconUri": "Resources/Images/Icons/check-24.png"
            },
            {
              "id": "MapServiceActions",
              "description": "@language-mapservice-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
              "items": [
                {
                  "text": "@language-menu-remove-user-added-mapservice",
                  "description": "@language-menu-remove-user-added-mapservice-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/layer-remove-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "RemoveMapService",
                      "commandParameter": "{{context}}"
                    },
                    {
                      "command": "HideMapServiceActions"
                    }
                  ]
                }
              ]
            },
            {
              "id": "EventActions",
              "description": "@language-collaboration-event-menu-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-collaboration-erase",
                  "description": "@language-collaboration-erase-desc",
                  "iconUri": "Resources/Images/Icons/trashcan-24.png",
                  "command": "EraseMarkupEvent",
                  "commandParameter": "{{event}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-copy-event",
                  "description": "@language-collaboration-copy-event-desc",
                  "iconUri": "Resources/Images/Icons/copy-24.png",
                  "command": "ShowCopyDialogForEvent",
                  "commandParameter": "{{event}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-collaboration-edit-event-message",
                  "description": "@language-collaboration-edit-event-message-desc",
                  "iconUri": "Resources/Images/Icons/edit-24.png",
                  "command": "ShowEditCollaborationMessageView",
                  "commandParameter": "{{event}}",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "FeatureSetCollectionResultsFeatureSetActions",
              "description": "@language-menu-filter-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "hideOnDisable": true,
                  "command": "ZoomToFeatures",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-feature-editing-union-text",
                  "description": "@language-feature-editing-union-desc",
                  "iconUri": "Resources/Images/Icons/polygon-add-24.png",
                  "hideOnDisable": true,
                  "command": "UnionFeaturesInteractive",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "hideOnDisable": true,
                  "command": "IdentifyBufferedFeatureSet",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "hideOnDisable": true,
                  "command": "ShowChartingView"
                },
                {
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "hideOnDisable": true,
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  }
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-browse-saved-results",
                  "description": "@language-menu-browse-saved-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "command": "ListSelections",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-save-results",
                  "description": "@language-menu-save-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "command": "ShowSaveSelectionDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-combine-results",
                  "description": "@language-menu-combine-results-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "command": "ShowSearchOptions",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-menu-results-remove-feature-set",
                  "description": "@language-menu-results-remove-feature-set-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "hideOnDisable": true,
                  "command": "RemoveFeatureSetFromResults",
                  "commandParameter": "{{context}}"
                }
              ]
            },
            {
              "id": "FeatureSetResultsActions",
              "description": "@language-menu-feature-set-results-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "libraryId": "Mapping.Infrastructure",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/view-switch-table-24.png",
                  "text": "@language-results-toggle-table-view",
                  "description": "@language-results-toggle-table-view-desc",
                  "commandParameter": null,
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "SwitchToTabularResultsView",
                      "abortBatchOnFailure": true
                    },
                    {
                      "command": "CloseDataFrame"
                    }
                  ]
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "text": "Buffer features for Tempest",
                  "description": "Identify features near these results",
                  "command": "TempestBufferedFeatureSetCollectionWF",
                  "commandParameter": "{{context}}"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-extent-24.png",
                  "text": "@language-menu-zoom-to-all",
                  "description": "@language-menu-zoom-to-all-desc",
                  "command": "ZoomToFeatures",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/polygon-add-24.png",
                  "text": "@language-feature-editing-union-text",
                  "description": "@language-feature-editing-union-desc",
                  "command": "UnionFeaturesInteractive",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
                  "text": "@language-menu-identify-buffered-feature-set-collection",
                  "description": "@language-menu-identify-buffered-feature-set-collection-desc",
                  "command": "IdentifyBufferedFeatureSet",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/charting-24.png",
                  "text": "@language-menu-show-charting-view",
                  "description": "@language-menu-show-charting-view-desc",
                  "command": "ShowChartingView",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/csv-export-24.png",
                  "text": "@language-menu-export-results-to-csv",
                  "description": "@language-menu-export-results-to-csv-desc",
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "csv",
                    "fsc": "{{context}}"
                  },
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/xlsx-export-24.png",
                  "text": "@language-menu-export-results-to-xlsx",
                  "description": "@language-menu-export-results-to-xlsx-desc",
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "xlsx",
                    "fsc": "{{context}}"
                  },
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/shapefile-export-24.png",
                  "text": "@language-menu-export-results-to-shp",
                  "description": "@language-menu-export-results-to-shp-desc",
                  "command": "ExportResultsTo",
                  "commandParameter": {
                    "format": "shp",
                    "fsc": "{{context}}"
                  },
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
                  "text": "@language-menu-browse-saved-results",
                  "description": "@language-menu-browse-saved-results-desc",
                  "command": "ListSelections",
                  "commandParameter": null,
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/save-24.png",
                  "text": "@language-menu-save-results",
                  "description": "@language-menu-save-results-desc",
                  "command": "ShowSaveSelectionDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-results-24.png",
                  "text": "@language-menu-combine-results",
                  "description": "@language-menu-combine-results-desc",
                  "command": "ShowSearchOptions",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "text": "@language-menu-results-remove-feature-set",
                  "description": "@language-menu-results-remove-feature-set-desc",
                  "commandParameter": null,
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureSetResultsView"
                    },
                    {
                      "command": "RemoveFeatureSetFromResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                }
              ]
            },
            {
              "id": "FeatureSetResultsFeatureActions",
              "description": "@language-feature-actions-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "text": "@language-menu-buffer-identify-feature",
                  "description": "@language-menu-buffer-identify-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "command": "IdentifyBufferedFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-editing-edit",
                  "description": "@language-feature-editing-edit-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/feature-edit-24.png",
                  "command": "StartEditingAttributesAndGeometryFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-feature-editing-cut-text",
                  "description": "@language-feature-editing-cut-desc",
                  "iconUri": "Resources/Images/Icons/polygon-cut-24.png",
                  "hideOnDisable": true,
                  "command": "CutFeatureInteractive",
                  "commandParameter": "{{context}}"
                },
                {
                  "text": "@language-native-attach-file",
                  "description": "@language-native-file-from-browser",
                  "iconUri": "Resources/Images/Icons/Toolbar/attach-file-photo-24.png",
                  "command": "AttachFileToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-zoom",
                  "description": "@language-menu-zoom-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-feature-24.png",
                  "command": "ZoomToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-common-pan",
                  "description": "@language-common-pan-description",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "PanToFeature",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-run-report",
                  "description": "@language-menu-run-report-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
                  "command": "ListReports",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                },
                {
                  "text": "@language-menu-results-add-feature",
                  "description": "@language-menu-results-add-feature-desc",
                  "iconUri": "Resources/Images/Icons/add-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "AddFeatureToResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-results-remove-feature",
                  "description": "@language-menu-results-remove-feature-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "hideOnDisable": true,
                  "batch": [
                    {
                      "command": "HideFeatureDetails"
                    },
                    {
                      "command": "RemoveFeatureFromResults",
                      "commandParameter": "{{context}}",
                      "abortBatchOnFailure": true
                    }
                  ]
                },
                {
                  "text": "@language-menu-copy-to-drawings",
                  "description": "@language-menu-copy-to-drawings-desc",
                  "iconUri": "Resources/Images/Icons/Toolbar/add-to-draw-layer-24.png",
                  "command": "AddMarkupFeature",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": true
                }
              ]
            },
            {
              "id": "FilterActions",
              "description": "@language-menu-filter-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "text": "@language-menu-edit-filter",
                  "id": "OPENFILTER",
                  "description": "@language-menu-edit-filter-desc",
                  "command": "DisplayFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
                  "text": "@language-menu-run-saved-filter",
                  "id": "RUNFILTER",
                  "description": "@language-menu-run-saved-filter-desc",
                  "command": "RunFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "text": "@language-menu-rename-filter",
                  "id": "RENAMEFILTER",
                  "description": "@language-menu-rename-filter-desc",
                  "command": "RenameSavedFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-common-delete",
                  "description": "@language-menu-query-delete-filter-desc",
                  "id": "DELETEFILTER",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "RemoveSavedFilter",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "FilterBuilderActions",
              "description": "@language-menu-filter-builder-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/open-24.png",
                  "text": "@language-menu-browse-saved-filters",
                  "description": "@language-menu-browse-saved-filters-desc",
                  "command": "ListFilters",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-24.png",
                  "text": "@language-menu-save-filter",
                  "description": "@language-menu-save-filter-desc",
                  "command": "ShowSaveFilterDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-as-24.png",
                  "text": "@language-menu-save-as-filter",
                  "description": "@language-menu-save-as-filter-desc",
                  "command": "ShowSaveAsFilterDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "QueryActions",
              "description": "@language-menu-query-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "text": "@language-menu-edit-query",
                  "id": "OPENQUERY",
                  "description": "@language-menu-edit-query-desc",
                  "command": "DisplayQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
                  "text": "@language-menu-run-saved-query",
                  "id": "RUNQUERY",
                  "description": "@language-menu-run-saved-query-desc",
                  "command": "RunQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                  "id": "RENAMEQUERY",
                  "text": "@language-menu-rename-query",
                  "description": "@language-menu-rename-query-desc",
                  "command": "RenameSavedQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "text": "@language-common-delete",
                  "description": "@language-menu-query-delete-query-desc",
                  "id": "DELETEQUERY",
                  "iconUri": "Resources/Images/Icons/Toolbar/trash-24.png",
                  "command": "RemoveSavedQuery",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            },
            {
              "id": "QueryBuilderActions",
              "description": "@language-menu-query-builder-actions-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/open-24.png",
                  "text": "@language-menu-browse-saved-queries",
                  "description": "@language-menu-browse-saved-queries-desc",
                  "command": "ListQueries",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-24.png",
                  "text": "@language-menu-save-query",
                  "description": "@language-menu-save-query-desc",
                  "command": "ShowSaveQueryDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                },
                {
                  "iconUri": "Resources/Images/Icons/save-as-24.png",
                  "text": "@language-menu-save-as-query",
                  "description": "@language-menu-save-as-query-desc",
                  "command": "ShowSaveAsQueryDialog",
                  "commandParameter": "{{context}}",
                  "hideOnDisable": false
                }
              ]
            }
          ]
        }
      },
      {
        "moduleName": "Accessibility",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityModule",
        "configuration": {
          "keyboardFocusIndicatorEnabled": true,
          "expandedMapKeyboardAccessibility": true,
          "automaticElementFocusing": true,
          "providers": [
            {
              "id": "MapTextProvider",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.MapTextProvider",
              "decimalPrecision": 4,
              "readAttributionInformation": false,
              "isEnabled": true
            },
            {
              "id": "ViewActivatorProvider",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.ViewActivatorProvider",
              "isEnabled": true,
              "notifications": {
                "LogView": "@language-accessibility-map-debug-log",
                "TabbedToolbarView": "@language-accessibility-map-toolbar",
                "ResultsTableView": "@language-accessibility-map-results-table",
                "FeatureDetailsExpandedView": "@language-accessibility-map-feature-details-expanded",
                "CompactToolbarView": "@language-accessibility-map-compact-toolbar",
                "ChartingView": "@language-accessibility-map-charting",
                "ExternalComponentView": "@language-accessibility-map-external-component",
                "PrintingView": "@language-accessibility-map-printing",
                "ExportMapView": "@language-accessibility-map-export-map",
                "IWantToMenuView": "@language-accessibility-map-iwtm",
                "BookmarksView": "@language-accessibility-map-bookmarks",
                "ShareView": "@language-accessibility-map-share",
                "ServiceLayersFailureView": "@language-accessibility-map-service-layers-failure",
                "SignInErrorView": "@language-accessibility-map-sign-in-error"
              },
              "subviewNotifications": {
                "TemplatePickerView": "@language-accessibility-map-create-feature",
                "EditorView": "@language-accessibility-map-edit-feature",
                "CreateOrEditView": "@language-accessibility-map-create-or-edit",
                "MultiFeatureSelectorView": "@language-accessibility-map-select-feature-for-editing",
                "AttachFileView": "@language-accessibility-map-attach-file",
                "FeatureLayerDetailsView": "@language-accessibility-map-feature-layer-details",
                "FeatureLayerListView": "@language-accessibility-map-feature-layer-list",
                "LayerListView": "@language-accessibility-map-layer-list",
                "LayerActionsView": "@language-accessibility-map-layer-actions",
                "LegendView": "@language-accessibility-map-legend",
                "VisualizationView": "@language-accessibility-map-visualization-view",
                "InfoView": "@language-accessibility-map-info",
                "ResultsListView": "@language-accessibility-map-results-list",
                "FeatureDetailsCompactView": "@language-accessibility-map-feature-details-compact",
                "BufferOptionsView": "@language-accessibility-map-buffer-options",
                "IdentifyLayerSelectorView": "@language-accessibility-map-identifiable-layers",
                "SnappingLayerSelectorView": "@language-accessibility-map-snappable-layers",
                "SimpleQueryBuilderView": "@language-accessibility-map-simple-query",
                "SimpleFilterBuilderView": "@language-accessibility-map-simple-filter",
                "PlaceholderView": "@language-accessibility-map-placeholder",
                "WorkflowListView": "@language-accessibility-map-workflows",
                "FeatureSetResultsView": "@language-accessibility-map-features-list"
              }
            }
          ],
          "includeProviders": true,
          "keyboardFocusIndicatorColor": "#550055"
        },
        "views": [
          {
            "id": "AccessibilityView",
            "viewModelId": "AccessibilityViewModel",
            "visible": true,
            "type": "geocortex.framework.ui.ViewBase",
            "markup": "Mapping/modules/Accessibility/AccessibilityView.html",
            "region": "AccessibilityRegion",
            "require": "geocortex/framework/ui/ViewBase"
          },
          {
            "id": "AccessibilityIconView",
            "viewModelId": "AccessibilityIconViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityIconView",
            "markup": "Mapping/modules/Accessibility/AccessibilityIconView.html",
            "region": "ModalWindowRegion"
          }
        ],
        "viewModels": [
          {
            "id": "AccessibilityViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityViewModel",
            "configuration": {}
          },
          {
            "id": "AccessibilityIconViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityIconViewModel",
            "configuration": {
              "included": true,
              "content": "%3Cp%3E%0AThis%20application%20provides%20enhanced%20access%20to%20end-users%20with%20disabilities%3A%20it%20enables%20full%20keyboard%20control%2C%20is%20screen%20reader%20friendly%2C%20and%20contains%20other%20features%20to%20make%20mapping%20technology%20more%20accessible%20to%20the%20largest%20possible%20audience%20of%20potential%20users%2C%20regardless%20of%20their%20level%20of%20ability.%20%3Cbr%3E%3Cbr%3E%20Geocortex%20Viewer%20for%20HTML5%20conforms%20to%20%3Cstrong%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.w3.org%2FTR%2FWCAG20%2F%22%20target%3D%22_blank%22%3EWCAG%202.0%3C%2Fa%3E%3C%2Fstrong%3E%20level%20AA%20(international%20%26amp%3B%20United%20States)%2C%20as%20part%20of%20Latitude%20Geographics'%20Geocortex%20Essentials%20technology%20for%20Esri's%20ArcGIS%20platform.%0A%3C%2Fp%3E",
              "title": "@language-accessibility-map-title"
            }
          }
        ]
      },
      {
        "moduleName": "Alert",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.alert.AlertModule",
        "configuration": {
          "alertRegion": "ModalWindowRegion",
          "overrideNativeAlert": true
        }
      },
      {
        "moduleName": "Authentication",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.authentication.AuthenticationModule",
        "configuration": {
          "region": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Banner",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerModule",
        "configuration": {},
        "views": [
          {
            "id": "BannerView",
            "viewModelId": "BannerViewModel",
            "visible": true,
            "markup": "Mapping/modules/Banner/BannerView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerView",
            "region": "HeaderRegion",
            "configuration": {}
          },
          {
            "id": "AccessibilityButtonView",
            "viewModelId": "AccessibilityIconViewModel",
            "visible": true,
            "markup": "Mapping/modules/Accessibility/AccessibilityButtonView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.accessibility.AccessibilityButtonView",
            "region": "BannerContentRegion",
            "configuration": {},
            "require": "Mapping/modules/Accessibility/AccessibilityButtonView"
          },
          {
            "id": "UserInfoView",
            "viewModelId": "UserInfoViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoView",
            "markup": "Mapping/modules/User/UserInfoView.html",
            "region": "BannerContentRegion",
            "require": "Mapping/modules/User/UserInfoView"
          },
          {
            "id": "SignInView",
            "viewModelId": "SignInViewModel",
            "visible": false,
            "markup": "Mapping/modules/User/SignInView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInView",
            "region": "BannerContentRegion",
            "configuration": {},
            "require": "Mapping/modules/User/SignInView"
          },
          {
            "id": "SearchView",
            "viewModelId": "SearchViewModel",
            "visible": true,
            "title": "@language-search-title",
            "iconUri": "Resources/Images/Icons/Toolbar/search-32.png",
            "markup": "Mapping/modules/Search/SearchView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchView",
            "region": "BannerContentRegion",
            "configuration": {},
            "require": "Mapping/modules/Search/SearchView"
          },
          {
            "id": "SearchHintsView",
            "viewModelId": "SearchViewModel",
            "visible": false,
            "markup": "Mapping/modules/Search/SearchHintsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchHintsView",
            "region": "SearchHintsRegion",
            "configuration": {},
            "require": "Mapping/modules/Search/SearchHintsView"
          }
        ],
        "viewModels": [
          {
            "id": "BannerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.banner.BannerViewModel",
            "configuration": {
              "applicationTitle": "",
              "applicationSubtitle": "",
              "titleColor": "#78A22F",
              "subtitleColor": "#959398",
              "backgroundColor": "#78A22F",
              "backgroundImage": "{ViewerConfigUri}../../../Resources/Images/banner-background.png",
              "leftImage": "{ViewerConfigUri}../../../Resources/Images/TNRD and myRegionView logo transparent_smallest.png",
              "leftImageDescription": "",
              "rightImage": "",
              "rightImageDescription": "",
              "height": 50
            }
          }
        ]
      },
      {
        "moduleName": "BarcodeScanner",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerModule",
        "configuration": {
          "htmlScannerView": "BarcodeScannerView"
        },
        "views": [
          {
            "id": "BarcodeScannerView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerView",
            "viewModelId": "BarcodeScannerViewModel",
            "visible": false,
            "markup": "Mapping/modules/BarcodeScanner/BarcodeScannerView.html",
            "region": "ApplicationRegion",
            "configuration": {
              "jsqrcodeSource": "Resources/Scripts/jsqrcode.min.js",
              "jobDecoderWorkerSource": "Resources/Scripts/JobDecoderWorker.min.js"
            }
          }
        ],
        "viewModels": [
          {
            "id": "BarcodeScannerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.barcodescanner.BarcodeScannerViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Basemap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapModule",
        "configuration": {},
        "views": [
          {
            "id": "BasemapView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapView",
            "markup": "Mapping/modules/Basemap/BasemapView.html",
            "region": "BottomLeftMapRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "BasemapSwitcherButtonView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherButtonView",
            "markup": "Mapping/modules/Basemap/BasemapSwitcherButtonView.html",
            "region": "BasemapRegion",
            "visible": true,
            "configuration": {
              "hideIfNoBasemapsAvailable": true
            }
          },
          {
            "id": "BasemapSliderView",
            "viewModelId": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSliderView",
            "markup": "Mapping/modules/Basemap/BasemapSliderView.html",
            "region": "BasemapRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BasemapSwitcherViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Bookmarks",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksModule",
        "configuration": {},
        "views": [
          {
            "id": "BookmarksView",
            "viewModelId": "BookmarksViewModel",
            "markup": "Mapping/modules/Bookmarks/BookmarksView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "region": "BookmarksListRegion",
            "title": "@language-toolbar-bookmark",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksViewModel",
            "configuration": {
              "bookmarksEnabled": true,
              "showBookmarksButton": true
            }
          }
        ]
      },
      {
        "moduleName": "Browser",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.browser.BrowserModule",
        "configuration": {
          "title": "TNRD myRegionView Interactive Map"
        }
      },
      {
        "moduleName": "Buffer",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferModule",
        "configuration": {
          "bufferProjectionWkid": "",
          "behaviors": [
            {
              "name": "BufferOptionsDismissedBehavior",
              "event": "BufferOptionsDismissedEvent",
              "commands": [
                "CloseDataFrame"
              ]
            },
            {
              "name": "BufferingErrorBehavior",
              "event": "BufferingErrorEvent",
              "commands": [
                "OpenDataFrame"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "BufferOptionsView",
            "viewModelId": "BufferOptionsViewModel",
            "markup": "Mapping/modules/Buffer/BufferOptionsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferOptionsView",
            "region": "DataRegion",
            "title": "@language-buffer-options-view",
            "iconUri": "Resources/Images/Icons/Toolbar/buffer-shape-24.png",
            "visible": false,
            "configuration": {
              "targetCommands": [
                "Identify",
                "IdentifyBufferedGeometry",
                "IdentifyBufferedFeature",
                "IdentifyBufferedFeatureSetCollection",
                "IdentifyBufferedFeatureSet"
              ]
            }
          }
        ],
        "viewModels": [
          {
            "id": "BufferOptionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.buffer.BufferOptionsViewModel",
            "configuration": {
              "bufferUnits": [
                "feet",
                "meter",
                "kilometer"
              ],
              "defaultBufferUnit": "meter",
              "defaultBufferDistance": 0,
              "addBufferToMarkupLayerByDefault": true
            }
          }
        ]
      },
      {
        "moduleName": "Charting",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingModule",
        "libraryId": "Mapping.Charting",
        "configuration": {
          "infrastructureLibraryId": "Charting",
          "adapters": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.FeatureChartPointAdapter",
              "source": "Field",
              "configuration": {}
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.DataLinkChartPointAdapter",
              "source": "DataLink",
              "configuration": {}
            }
          ],
          "behaviors": [
            {
              "name": "ChartPointMouseHoverBeginBehavior",
              "event": "ChartPointMouseHoverBeginEvent",
              "commands": [
                "ClearChartHighlights",
                "HighlightChartFeatureSet"
              ]
            },
            {
              "name": "ChartPointMouseHoverEndBehavior",
              "event": "ChartPointMouseHoverEndEvent",
              "commands": [
                "ClearChartHighlights"
              ]
            },
            {
              "name": "ChartPointMouseDownBehavior",
              "event": "ChartPointMouseDownEvent",
              "commands": [
                "ShowMap",
                "RunChartFeatureActions"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "ChartingView",
            "viewModelId": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingView",
            "markup": "Mapping.Charting/modules/Charting/ChartingView.html",
            "libraryId": "Mapping.Charting",
            "region": "BottomPanelRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ChartingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.ChartingViewModel",
            "libraryId": "Mapping.Charting",
            "configuration": {
              "chartingEnabled": true,
              "chartConfiguration": {
                "animationsEnabled": true,
                "gradientsEnabled": false,
                "interactiveLegendEnabled": false,
                "pieStartAngle": 180,
                "renderAs": "svg"
              },
              "infrastructureLibraryId": "Charting",
              "containerRegionName": "ChartingRegion",
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "showXButton": true,
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-24.png",
              "headerIsVisible": true,
              "showHeaderForStandaloneViews": false,
              "backButtonOnRootView": false,
              "showBackButtonAsX": true,
              "showMaximizeButton": true,
              "showHostedViews": false,
              "resizeY": true,
              "ordering": {}
            }
          }
        ]
      },
      {
        "moduleName": "ClusterLayers",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerModule",
        "configuration": {
          "hideClusters": "none"
        },
        "views": [
          {
            "id": "ClusterLayerView",
            "viewModelId": "ClusterLayerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerView",
            "markup": "Mapping/modules/ClusterLayers/ClusterLayerView.html",
            "region": "LayerVisualizationRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/ClusterLayers/ClusterLayerView"
          }
        ],
        "viewModels": [
          {
            "id": "ClusterLayerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerViewModel",
            "configuration": {}
          }
        ],
        "require": "Mapping/modules/ClusterLayers/ClusterLayerModule"
      },
      {
        "moduleName": "Collaboration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationModule",
        "configuration": {},
        "views": [
          {
            "id": "CollaborationView",
            "viewModelId": "CollaborationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationView",
            "markup": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationView.html",
            "require": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationView",
            "region": "CollaborationContainerRegion",
            "title": "@language-collaboration",
            "configuration": {},
            "visible": false
          },
          {
            "id": "CollaborationMarkupStyleSelectorView",
            "markup": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationMarkupStyleSelectorView.html",
            "viewModelId": "CollaborationViewModel",
            "title": "@language-collaboration-symbology-title",
            "region": "CollaborationContainerRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationMarkupStyleSelectorView",
            "require": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationMarkupStyleSelectorView",
            "visible": false
          },
          {
            "id": "EventCopyView",
            "markup": "Mapping/modules/Collaboration/Events/EventCopyView.html",
            "viewModelId": "CollaborationViewModel",
            "title": "@language-collaboration-copy-event-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.events.EventCopyView",
            "require": "Mapping/modules/Collaboration/Events/EventCopyView",
            "visible": false
          },
          {
            "id": "EventEditView",
            "markup": "Mapping/modules/Collaboration/Events/EventEditView.html",
            "viewModelId": "EventEditViewModel",
            "title": "@language-collaboration-edit-event-message-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.events.EventEditView",
            "require": "Mapping/modules/Collaboration/Events/EventEditView",
            "visible": false
          },
          {
            "id": "AfterActionView",
            "viewModelId": "AfterActionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.AfterActionView",
            "markup": "Mapping/modules/Collaboration/Views/AfterAction/AfterActionView.html",
            "require": "Mapping/modules/Collaboration/Views/AfterAction/AfterActionView",
            "region": "CollaborationContainerRegion",
            "title": "@language-after-action-title",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "EventEditViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.events.EventEditViewModel",
            "require": "Mapping/modules/Collaboration/Events/EventEditViewModel",
            "configuration": {
              "characterLimit": 1000
            }
          },
          {
            "id": "AfterActionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.AfterActionViewModel",
            "require": "Mapping/modules/Collaboration/Views/AfterAction/AfterActionViewModel",
            "configuration": {
              "numEventsToFetch": 25,
              "previewViewSize": {
                "height": 50,
                "width": 50
              },
              "thumbnailViewSize": {
                "height": 200,
                "width": 200
              },
              "icons": {
                "photoIcon": {
                  "iconUrl": "Resources/Images/Pushpins/map-marker-image-24.png",
                  "width": 24,
                  "height": 24,
                  "offsetY": 0,
                  "offsetX": 0
                }
              },
              "eventTypes": [
                {
                  "name": "MessageEvent",
                  "widgetId": "MessageEventWidget",
                  "visible": true
                },
                {
                  "name": "ShareMarkupEvent",
                  "widgetId": "ShareMarkupEventWidget",
                  "visible": true
                },
                {
                  "name": "ClearEvent",
                  "widgetId": "CardEventWidget",
                  "visible": true
                },
                {
                  "name": "CardEvent",
                  "widgetId": "CardEventWidget",
                  "visible": false,
                  "default": true
                },
                {
                  "name": "ShareImageEvent",
                  "widgetId": "ShareImageEventWidget",
                  "visible": true
                },
                {
                  "name": "UserLeftEvent",
                  "widgetId": "UserLeftEventWidget",
                  "visible": true
                },
                {
                  "name": "UserJoinedEvent",
                  "widgetId": "UserJoinedEventWidget",
                  "visible": true
                },
                {
                  "name": "DeleteMarkupEvent",
                  "widgetId": "DeleteMarkupEventWidget",
                  "visible": true
                }
              ],
              "eventWidgets": [
                {
                  "id": "MessageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "icons": {
                      "active": "Resources/Images/Icons/edit-markup-inactive-24.png",
                      "deleted": "Resources/Images/Icons/close-24.png"
                    },
                    "canEdit": true
                  }
                },
                {
                  "id": "CardEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareImageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "canEdit": true
                  }
                },
                {
                  "id": "UserLeftEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "UserJoinedEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "DeleteMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                }
              ],
              "enabled": false,
              "initialRooms": []
            }
          },
          {
            "id": "CollaborationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CollaborationViewModel",
            "require": "Mapping/modules/Collaboration/Views/Collaboration/CollaborationViewModel",
            "configuration": {
              "characterLimit": 1000,
              "numEventsToFetch": 25,
              "initialRooms": [],
              "previewViewSize": {
                "height": 50,
                "width": 50
              },
              "thumbnailViewSize": {
                "height": 200,
                "width": 200
              },
              "icons": {
                "photoIcon": {
                  "iconUrl": "Resources/Images/Pushpins/map-marker-image-24.png",
                  "width": 24,
                  "height": 24,
                  "offsetY": 0,
                  "offsetX": 0
                },
                "unpostedPhotoIcon": {
                  "iconUrl": "Resources/Images/Pushpins/map-marker-image-24.png",
                  "width": 24,
                  "height": 24,
                  "offsetY": 0,
                  "offsetX": 0
                }
              },
              "tools": [
                {
                  "name": "SetCollaborationImageLocation",
                  "displayName": "@language-toolbar-markup-point",
                  "command": "SetCollaborationImageLocation",
                  "drawMode": "POINT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-collaboration-chat-image-manually-locate-status"
                }
              ],
              "markupTools": [
                {
                  "name": "CollaborationPointDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-point",
                  "drawMode": "POINT",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-collaboration-draw-point"
                },
                {
                  "name": "CollaborationLineDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-polyline",
                  "drawMode": "POLYLINE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-collaboration-polyline-line"
                },
                {
                  "name": "CollaborationFreehandDraw",
                  "displayName": "@language-toolbar-markup-freehand",
                  "command": "CollaborationDraw",
                  "drawMode": "FREEHAND_POLYLINE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-collaboration-draw-freehand",
                  "default": true
                },
                {
                  "name": "CollaborationCircleDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-circle",
                  "drawMode": "CIRCLE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-collaboration-draw-circle"
                },
                {
                  "name": "CollaborationEllipseDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-ellipse",
                  "drawMode": "ELLIPSE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-collaboration-draw-ellipse"
                },
                {
                  "name": "CollaborationRectangleDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-rectangle",
                  "drawMode": "RECTANGLE",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-collaboration-draw-rectangle"
                },
                {
                  "name": "CollaborationPolygonDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-polygon",
                  "drawMode": "POLYGON",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-collaboration-draw-polygon"
                },
                {
                  "name": "CollaborationFreehandPolygonDraw",
                  "command": "CollaborationDraw",
                  "displayName": "@language-toolbar-markup-freehand-polygon",
                  "drawMode": "FREEHAND_POLYGON",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-freehand-24.png",
                  "statusText": "@language-collaboration-draw-freehand-polygon"
                },
                {
                  "name": "CollaborationTextDraw",
                  "command": "CollaborationDrawText",
                  "displayName": "@language-toolbar-markup-text",
                  "drawMode": "POINT",
                  "isSticky": true,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-text-24.png",
                  "statusText": "@language-collaboration-draw-text"
                }
              ],
              "eventTypes": [
                {
                  "name": "MessageEvent",
                  "widgetId": "MessageEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "ShareMarkupEvent",
                  "widgetId": "ShareMarkupEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "ClearEvent",
                  "widgetId": "CardEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "CardEvent",
                  "widgetId": "CardEventWidget",
                  "visible": false,
                  "default": true,
                  "automatic": false
                },
                {
                  "name": "ShareImageEvent",
                  "widgetId": "ShareImageEventWidget",
                  "visible": true,
                  "automatic": false
                },
                {
                  "name": "UserLeftEvent",
                  "widgetId": "UserLeftEventWidget",
                  "visible": true,
                  "automatic": true
                },
                {
                  "name": "UserJoinedEvent",
                  "widgetId": "UserJoinedEventWidget",
                  "visible": true,
                  "automatic": true
                },
                {
                  "name": "DeleteMarkupEvent",
                  "widgetId": "DeleteMarkupEventWidget",
                  "visible": true,
                  "automatic": false
                }
              ],
              "eventWidgets": [
                {
                  "id": "MessageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.MessageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ShareMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "icons": {
                      "active": "Resources/Images/Icons/edit-markup-inactive-24.png",
                      "deleted": "Resources/Images/Icons/close-24.png"
                    },
                    "canEdit": true
                  }
                },
                {
                  "id": "CardEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.CardEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "ShareImageEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.ImageEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/CardEvent/CardEventView.html",
                  "libraryId": "Mapping",
                  "configuration": {
                    "canEdit": true
                  }
                },
                {
                  "id": "UserLeftEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserLeftEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "UserJoinedEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.UserJoinedEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                },
                {
                  "id": "DeleteMarkupEventWidget",
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventView",
                  "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.collaboration.DeleteMarkupEventViewModel",
                  "markup": "Mapping/modules/Collaboration/Events/BannerEvent/BannerEventView.html",
                  "libraryId": "Mapping"
                }
              ],
              "enabled": false
            }
          }
        ]
      },
      {
        "moduleName": "CompactToolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarModule",
        "configuration": {
          "isEnabled": false,
          "transientElements": [
            {
              "stateName": "MeasureState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "MeasureSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "MeasureSelectSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                }
              ]
            },
            {
              "stateName": "MeasureState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "CompactToolbarTransientRegion"
            },
            {
              "stateName": "DrawMarkupState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "MarkupSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "MarkupSelectSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  }
                }
              ]
            },
            {
              "stateName": "EditingMarkupState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "EditingSnappingToggle",
                  "type": "toggleButton",
                  "tooltip": "@language-toolbar-identify-snapping-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "EditingSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  }
                }
              ]
            },
            {
              "stateName": "EditingMeasurementMarkupState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "CompactToolbarTransientRegion"
            },
            {
              "stateName": "FindDataState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "FindDataBufferingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "toggleStateName": "FindDataBufferingState",
                  "toggleOn": {
                    "name": "@language-toolbar-buffering-enable",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-buffering-disable",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  }
                },
                {
                  "id": "FindDataSnappingToggle",
                  "type": "toggleButton",
                  "tooltip": "@language-toolbar-identify-snapping-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "FindDataSelectSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                },
                {
                  "id": "ChangeIdentifiableLayers",
                  "type": "button",
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
                }
              ]
            },
            {
              "stateName": "FeaturePlacementPointGraphicState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "CreateFeatureWithGeolocation",
                  "type": "button",
                  "name": "@language-toolbar-editing-create-new-feature-geolocation",
                  "tooltip": "@language-toolbar-editing-create-new-feature-geolocation-tooltip",
                  "command": "Geolocate",
                  "commandParameter": {
                    "toolFriendly": true
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/geolocate.png"
                }
              ]
            },
            {
              "stateName": "FeaturePlacementGraphicState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "FeatureEditingSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "FeatureEditingSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                }
              ]
            },
            {
              "stateName": "PlotCoordinatesState",
              "widgetId": "CompactToolbarTransientBase",
              "region": "CompactToolbarTransientRegion",
              "items": [
                {
                  "id": "PlotCoordinatesSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "PlotCoordinatesSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                }
              ]
            }
          ],
          "toolbarGroups": [
            {
              "id": "compactToolbar",
              "type": "toolbarGroup",
              "name": "Compact Toolbar",
              "items": [
                {
                  "id": "HomeButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "command": "ActivateHomePanel",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-home-sub",
                  "tooltip": "@language-toolbar-navigation-home-tooltip"
                },
                {
                  "id": "InitialExtentButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-initial-24.png",
                  "command": "ZoomToInitialExtent",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-navigation-initial-extent",
                  "tooltip": "@language-toolbar-navigation-initial-extent-tooltip"
                },
                {
                  "id": "PointIdentifyTool-Navigation",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "command": "Identify",
                  "drawMode": "RECTANGLE",
                  "name": "@language-toolbar-tasks-identify",
                  "tooltip": "@language-toolbar-identify-point-tooltip",
                  "hideOnDisable": false,
                  "isSticky": false,
                  "statusText": "@language-toolbar-identify-point-desc"
                },
                {
                  "id": "PrintMapButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
                  "command": "PrintMap",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-tasks-print-map",
                  "tooltip": "@language-toolbar-tasks-print-map-tooltip"
                },
                {
                  "id": "ExportMapButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/share-map-24.png",
                  "command": "ShowExportMapDialog",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-tasks-export-map",
                  "tooltip": "@language-toolbar-tasks-export-map-tooltip"
                }
              ],
              "layout": "Large"
            }
          ]
        },
        "viewModels": [
          {
            "id": "CompactToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarViewModel",
            "configuration": {
              "toolbarVisibleTools": 4,
              "toolbarOpenByDefault": false,
              "toolbarGroupRefs": [
                "compactToolbar"
              ]
            },
            "require": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarViewModel"
          },
          {
            "id": "CompactToolbarTransientViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientViewModel",
            "configuration": {},
            "require": "Mapping/modules/Toolbar/Transients/TransientViewModel"
          }
        ],
        "views": [
          {
            "id": "CompactToolbarView",
            "viewModelId": "CompactToolbarViewModel",
            "visible": true,
            "title": "@language-compact-toolbar-name",
            "region": "TopRightMapRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.CompactToolbarView",
            "markup": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarView.html",
            "configuration": {},
            "require": "Mapping/modules/Toolbar/CompactToolbar/CompactToolbarView"
          },
          {
            "id": "CompactToolbarFlyoutView",
            "viewModelId": "CompactToolbarViewModel",
            "visible": true,
            "title": "@language-toolbar-multi-tool",
            "region": "CompactToolbarFlyoutDropdown",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "configuration": {},
            "require": "Mapping/modules/Toolbar/ToolbarFlyoutView"
          }
        ],
        "require": "Mapping/modules/Toolbar/CompactToolbarModule"
      },
      {
        "moduleName": "Confirm",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.confirm.ConfirmModule",
        "configuration": {
          "confirmRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "ContextMenu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.ContextMenu.ContextMenuModule",
        "configuration": {},
        "views": [
          {
            "id": "ContextMenuView",
            "viewModelId": "ContextMenuViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.ContextMenu.ContextMenuView",
            "markup": "Mapping/modules/ContextMenu/ContextMenuView.html",
            "region": "ContextMenuRegion",
            "visible": false,
            "title": "@language-common-feature-layer-details",
            "description": "@language-common-feature-layer-details-desc",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ContextMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.ContextMenu.ContextMenuViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Coordinates",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.coordinates.CoordinatesModule",
        "configuration": {},
        "views": [
          {
            "id": "CoordinatesView",
            "viewModelId": "CoordinatesViewModel",
            "markup": "Mapping/modules/Coordinates/CoordinatesView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.coordinates.CoordinatesView",
            "region": "BottomLeftMapRegion",
            "visible": true,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "CoordinatesViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.coordinates.CoordinatesViewModel",
            "configuration": {
              "isEnabled": true,
              "openByDefault": true,
              "coordinatesModel": "MapCoordinatesModel"
            }
          }
        ]
      },
      {
        "moduleName": "Editing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditingModule",
        "configuration": {
          "behaviors": [
            {
              "name": "EditorFeatureSelectedBehavior",
              "commands": [
                "ZoomToFeature"
              ]
            },
            {
              "name": "EditorRemoveFeatureSelectedBehavior",
              "commands": []
            }
          ]
        },
        "views": [
          {
            "id": "TemplatePickerView",
            "viewModelId": "TemplatePickerViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/file-add-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerView",
            "markup": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-template-picker",
            "description": "@language-common-feature-template-picker-desc",
            "configuration": {},
            "require": "Mapping/modules/Editing/TemplatePicker/TemplatePickerView"
          },
          {
            "id": "EditorView",
            "viewModelId": "EditorViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorView",
            "markup": "Mapping/modules/Editing/Editor/EditorView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-common-feature-editing",
            "description": "@language-common-feature-editing-desc",
            "configuration": {
              "showXButton": false
            },
            "require": "Mapping/modules/Editing/Editor/EditorView"
          },
          {
            "id": "CreateOrEditView",
            "viewModelId": "CreateOrEditViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.CreateOrEditView",
            "markup": "Mapping/modules/Editing/CreateOrEdit/CreateOrEditView.html",
            "region": "FeatureEditingContainerRegion",
            "visible": false,
            "title": "@language-feature-editing-create-edit",
            "description": "@language-feature-editing-create-edit-description",
            "configuration": {},
            "require": "Mapping/modules/Editing/CreateOrEdit/CreateOrEditView"
          },
          {
            "id": "MultiFeatureSelectorView",
            "viewModelId": "MultiFeatureSelectorViewModel",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.FeatureSelector.FeatureSelectorView",
            "markup": "Mapping/infrastructure/ui/components/FeatureSelector/FeatureSelectorView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-feature-editing-multi-feature-selector",
            "description": "@language-feature-editing-multi-feature-selector-description",
            "configuration": {},
            "require": "geocortex/infrastructure/ui/components/FeatureSelector/FeatureSelectorView"
          }
        ],
        "viewModels": [
          {
            "id": "TemplatePickerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.TemplatePickerViewModel",
            "configuration": {},
            "require": "Mapping/modules/Editing/TemplatePicker/TemplatePickerViewModel"
          },
          {
            "id": "CreateOrEditViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.CreateOrEditViewModel",
            "configuration": {
              "searchRadiusMeters": 100,
              "tools": [
                {
                  "name": "SelectFeaturesForEditingTool",
                  "command": "SelectFeatureForEditing",
                  "drawMode": "RECTANGLE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
                  "statusText": "@language-feature-editing-dsk-rectangle-tool"
                }
              ]
            },
            "require": "Mapping/modules/Editing/CreateOrEdit/CreateOrEditViewModel"
          },
          {
            "id": "MultiFeatureSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.MultiFeatureSelectorViewModel",
            "configuration": {
              "displayResultPickerTemplateComplexity": "complex"
            },
            "require": "Mapping/modules/Editing/MultiFeatureSelector/MultiFeatureSelectorViewModel"
          },
          {
            "id": "EditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.editing.EditorViewModel",
            "configuration": {
              "editGeometry": true,
              "validateGeometry": true,
              "tools": [
                {
                  "name": "EditingPointTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POINT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "statusText": "@language-feature-editing-dsk-point-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-point-tool-keyboard"
                },
                {
                  "name": "EditingLineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "LINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-line-tool"
                },
                {
                  "name": "EditingPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                  "statusText": "@language-feature-editing-dsk-polyline-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-polyline-tool-keyboard"
                },
                {
                  "name": "EditingFreehandPolylineTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYLINE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polyline-tool"
                },
                {
                  "name": "EditingPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-feature-editing-dsk-polygon-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-polygon-tool-keyboard"
                },
                {
                  "name": "EditingFreehandPolygonTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "FREEHAND_POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                  "statusText": "@language-feature-editing-dsk-freehand-polygon-tool"
                },
                {
                  "name": "EditingCircleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "CIRCLE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-feature-editing-circle-tool"
                },
                {
                  "name": "EditingEllipseTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "ELLIPSE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-feature-editing-ellipse-tool"
                },
                {
                  "name": "EditingRectangleTool",
                  "command": "SetEditorFeatureGeometry",
                  "drawMode": "EXTENT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-feature-editing-rectangle-tool"
                }
              ]
            },
            "require": "Mapping/modules/Editing/Editor/EditorViewModel"
          }
        ]
      },
      {
        "moduleName": "ExportMap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapModule",
        "configuration": {},
        "views": [
          {
            "id": "ExportMapView",
            "viewModelId": "ExportMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapView",
            "markup": "Mapping/modules/ExportMap/ExportMapView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-map-image-24.png",
            "title": "@language-export-map-description",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ExportMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportMap.ExportMapViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "ExportWebMap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.exportWebMap.ExportWebMapModule",
        "configuration": {},
        "views": [
          {
            "id": "ExportWebMapView",
            "viewModelId": "ExportWebMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportWebMap.ExportWebMapView",
            "markup": "Mapping/modules/ExportWebMap/ExportWebMapView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "title": "@language-export-web-map-description",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ExportWebMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.exportWebMap.ExportWebMapViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "FeatureDetails",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsModule",
        "configuration": {
          "defaultViewMode": "compact",
          "viewModes": {
            "compact": {
              "viewId": "FeatureDetailsCompactView",
              "defaultProviderTargetRegion": "FeatureDetailsCompactViewRegion"
            },
            "expanded": {
              "viewId": "FeatureDetailsExpandedView",
              "defaultProviderTargetRegion": "FeatureDetailsBottomRegion"
            }
          },
          "behaviors": [
            {
              "name": "FeatureDetailsOpenedBehavior",
              "commands": [
                "ZoomToFeature",
                "FocusFeature"
              ]
            },
            {
              "name": "FeatureDetailsClosedBehavior",
              "commands": [
                "ClearFeatureFocus"
              ]
            }
          ],
          "providers": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionViewModel",
              "viewId": "FeatureDescriptionProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DescriptionView",
              "title": "@language-feature-description",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DescriptionView.html",
              "config": {
                "longDescription": false
              },
              "enabled": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksViewModel",
              "viewId": "FeatureHyperlinksProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.HyperlinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/HyperlinksView.html",
              "title": "@language-feature-hyperlinks"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "viewId": "FeatureAttributesProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/MultiColumnAttributesView.html",
              "title": "@language-feature-attributes"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartViewModel",
              "viewId": "FeatureChartsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.charting.SingleFeatureChartView",
              "libraryId": "Mapping.Charting",
              "iconUri": "Resources/Images/Icons/charting-24.png",
              "markup": "Mapping.Charting/modules/Charting/SingleFeatureChartView.html",
              "title": "@language-feature-charts",
              "config": {
                "infrastructureLibraryId": "Charting",
                "containerRegionName": "SingleFeatureChartsRegion",
                "chartConfiguration": {
                  "animationsEnabled": true,
                  "gradientsEnabled": false,
                  "interactiveLegendEnabled": false,
                  "pieStartAngle": 180,
                  "renderAs": "svg"
                }
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsViewModel",
              "viewId": "FeatureAttachmentsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsView",
              "iconUri": "Resources/Images/Icons/Toolbar/attach-24.png",
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttachmentsView.html",
              "title": "@language-feature-attachments"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesViewModel",
              "viewId": "FeatureRelationsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesTableView.html"
              },
              "title": "@language-feature-related-features"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.SearchTablesRelatedFeaturesViewModel",
              "viewId": "SearchTablesFeatureRelationsProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
              "iconUri": "Resources/Images/Icons/Toolbar/file-multi-24.png",
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesTableView.html"
              },
              "title": "@language-feature-related-features"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksViewModel",
              "viewId": "FeatureDataLinksProviderView",
              "viewType": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.DataLinksView",
              "iconUri": "Resources/Images/Icons/Toolbar/details-24.png",
              "markup": {
                "compact": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksView.html",
                "expanded": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/DataLinksTableView.html"
              },
              "title": "@language-feature-datalinks",
              "config": {
                "dataLinkDetailsView": "DataFrameResultsContainerRegion"
              }
            }
          ]
        },
        "views": [
          {
            "id": "FeatureDetailsExpandedView",
            "viewModelId": "FeatureDetailsExpandedViewModel",
            "visible": false,
            "title": "@language-feature-details-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "libraryId": "Mapping",
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "region": "ResultsRegion",
            "configuration": {
              "onDeactivated": []
            },
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsView"
          },
          {
            "id": "FeatureDetailsCompactView",
            "viewModelId": "FeatureDetailsCompactViewModel",
            "visible": false,
            "title": "@language-feature-details-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
            "libraryId": "Mapping",
            "markup": "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
            "region": "DataFrameResultsContainerRegion",
            "configuration": {
              "onDeactivated": []
            },
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsView"
          }
        ],
        "viewModels": [
          {
            "id": "FeatureDetailsExpandedViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "configuration": {
              "defaultTabViewForLayer": {
                "FeatureAttributesProviderView": "default"
              },
              "regions": [
                {
                  "regionName": "FeatureDetailsTopLeftRegion",
                  "regionCss": "feature-details-top-left-region"
                },
                {
                  "regionName": "FeatureDetailsTopRightRegion",
                  "regionCss": "feature-details-top-right-region"
                },
                {
                  "regionName": "FeatureDetailsBottomRegion",
                  "regionCss": "feature-details-bottom-region"
                }
              ]
            },
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsViewModel"
          },
          {
            "id": "FeatureDetailsCompactViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
            "configuration": {
              "regions": [
                {
                  "regionName": "FeatureDetailsCompactViewRegion",
                  "regionType": "geocortex.framework.ui.DivStackRegionAdapter",
                  "regionCss": "feature-region"
                }
              ]
            },
            "require": "Mapping/modules/FeatureDetails/FeatureDetailsViewModel"
          }
        ]
      },
      {
        "moduleName": "Footer",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterModule",
        "configuration": {
          "menus": [
            {
              "id": "FooterMenu",
              "description": "@language-menu-footer-menu-desc",
              "items": [
                {
                  "text": "@language-menu-latitude-geographics",
                  "description": "@language-menu-latitude-geographics-desc",
                  "command": "OpenWebPage",
                  "commandParameter": "http://www.latitudegeo.com/"
                },
                {
                  "text": "@language-menu-powered-by-geocortex",
                  "description": "@language-menu-powered-by-geocortex-desc",
                  "command": "OpenWebPage",
                  "commandParameter": "http://www.geocortex.com/"
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "FooterView",
            "viewModelId": "FooterViewModel",
            "visible": true,
            "markup": "Mapping/modules/Footer/FooterView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterView",
            "region": "FooterRegion",
            "configuration": {}
          },
          {
            "id": "FooterMenuView",
            "viewModelId": "FooterMenuViewModel",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuView",
            "markup": "Mapping/infrastructure/menus/MenuHyperlinkView.html",
            "region": "RightFooterRegion",
            "visible": true,
            "configuration": {
              "menuId": "FooterMenu"
            },
            "require": "geocortex/infrastructure/menus/MenuView"
          }
        ],
        "viewModels": [
          {
            "id": "FooterViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.footer.FooterViewModel",
            "configuration": {
              "backgroundColor": "#EEEEEE",
              "height": 0
            }
          },
          {
            "id": "FooterMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "configuration": {},
            "require": "geocortex/infrastructure/menus/MenuViewModel"
          }
        ]
      },
      {
        "moduleName": "Geolocate",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateModule",
        "configuration": {},
        "views": [
          {
            "id": "GeolocateView",
            "title": "@language-geolocate-title",
            "viewModelId": "GeolocateViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "region": "GeolocateMenuRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "GeolocateStatusView",
            "viewModelId": "GeolocateStatusViewModel",
            "markup": "Mapping/modules/Geolocate/GeolocateStatusView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusView",
            "region": "BottomCenterMapRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "GeolocateViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateViewModel",
            "configuration": {
              "geolocateEnabled": true,
              "trackingEnabled": true,
              "followingEnabled": true,
              "enableHighAccuracy": true,
              "singleGeolocationProfiles": {
                "default": {
                  "accuracyThreshold": 10,
                  "timeLimit": 30000
                },
                "coarse": {
                  "accuracyThreshold": 250,
                  "timeLimit": 10000
                },
                "fine": {
                  "accuracyThreshold": 3,
                  "timeLimit": 60000
                }
              },
              "geolocateAccuracyCircleEnabled": true,
              "adjustExtentZoomOnGeolocate": true,
              "geolocateExtentZoomLevel": "10000",
              "geolocationIndicator": "Resources/Images/Icons/geolocate-position-32.png"
            }
          },
          {
            "id": "GeolocateStatusViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateStatusViewModel",
            "configuration": {
              "showGeolocateCoordinates": true,
              "showTrackingCoordinates": true,
              "showFollowingCoordinates": true,
              "coordinateFormat": "dd",
              "coordinateWkid": null,
              "coordinateFractionalDigits": "1",
              "geolocateIcon": "Resources/Images/Icons/geolocate-24.png",
              "busyIcon": "Resources/Images/loader-small.gif"
            }
          }
        ]
      },
      {
        "moduleName": "GlobalMenu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.GlobalMenu.GlobalMenuModule",
        "configuration": {
          "menus": [
            {
              "id": "GlobalMenuConfig",
              "description": "@language-menu-menus-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/user-24.png",
                  "text": "@language-user-sign-in",
                  "description": "@language-user-sign-in-desc",
                  "command": "SignIn",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/user-24.png",
                  "text": "@language-user-sign-out",
                  "description": "@language-user-sign-out-desc",
                  "command": "SignOut",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/reports-32.png",
                  "text": "Property Report",
                  "description": "Create a property report",
                  "command": "RunWorkflowById",
                  "commandParameter": "PropertyReport"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/print-32.png",
                  "text": "Print Map",
                  "description": "Create a printable map",
                  "command": "PrintMap",
                  "commandParameter": null
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/share-map-24.png",
                  "text": "Export Image",
                  "description": "Save a map image",
                  "command": "ShowExportMapDialog",
                  "commandParameter": null
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/upload-24.png",
                  "text": "@language-toolbar-tasks-upload-data",
                  "description": "Upload data",
                  "command": "UploadData",
                  "commandParameter": null
                },
                {
                  "iconUri": "Resources/Images/Icons/open-24.png",
                  "text": "@language-menu-global-open",
                  "description": "@language-menu-global-open-desc",
                  "command": "ShowProjects",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/save-24.png",
                  "text": "@language-menu-global-save",
                  "description": "@language-menu-global-save-desc",
                  "command": "SaveProject",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/save-as-24.png",
                  "text": "@language-menu-global-save-as",
                  "description": "@language-menu-global-save-as-desc",
                  "command": "SaveAsProject",
                  "commandParameter": null,
                  "hideOnDisable": true
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "GlobalMenuView",
            "visible": true,
            "viewModelId": "GlobalMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.GlobalMenu.GlobalMenuView",
            "markup": "Mapping/modules/GlobalMenu/GlobalMenuView.html",
            "region": "GlobalMenuRegion",
            "configuration": {
              "menuId": "GlobalMenuConfig"
            }
          }
        ],
        "viewModels": [
          {
            "id": "GlobalMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.GlobalMenu.GlobalMenuViewModel"
          }
        ]
      },
      {
        "moduleName": "HeatMaps",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsModule",
        "configuration": {
          "intensity": 30,
          "gradientOptions": {
            "outermostColor": "#00FFFFFF",
            "outerColor": "#FF0000FF",
            "innerColor": "#FFFF0000",
            "innermostColor": "#FFFFFF00"
          }
        },
        "views": [
          {
            "id": "HeatMapsView",
            "viewModelId": "HeatMapsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsView",
            "markup": "Mapping/modules/HeatMaps/HeatMapsView.html",
            "region": "LayerVisualizationRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "HeatMapsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Highlight",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Highlight.HighlightModule",
        "configuration": {
          "fillColor": "RGBA(252,247,247,0)",
          "borderColor": "#990000",
          "borderWidth": 1,
          "outerBorderColor": "#990000",
          "focusedFillColor": "RGBA(251,252,250,0.3)",
          "focusedBorderColor": "#990000",
          "focusedOuterBorderColor": "RGBA(180,5,5,1)",
          "outerBorderWidth": 5,
          "highlightLineOpacity": 0.1,
          "maxHighlightableGeometryVertices": 2500,
          "geometryGeneralization": {
            "geometryGeneralizationEnabled": true,
            "thresholdVertices": 2500,
            "maxDeviationInMeters": 250
          }
        }
      },
      {
        "moduleName": "Identify",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyModule",
        "configuration": {
          "resultsDisplayName": "@language-identify-results-header",
          "topMostLayerOnly": false,
          "visibleLayersOnly": false,
          "layersInVisibleScaleRangeOnly": false,
          "pixelTolerance": 5,
          "polygonPixelTolerance": 0,
          "returnGeometry": true,
          "restrictRasterIdentifyToPoint": true,
          "identifyProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.MapIdentifyTaskIdentifyProvider",
              "enabled": true,
              "configuration": {}
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.RasterIdentifyTaskIdentifyProvider",
              "enabled": true,
              "configuration": {}
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.identify.GraphicsLayerIdentifyProvider",
              "enabled": true,
              "configuration": {}
            }
          ],
          "tools": [
            {
              "name": "IdentifyPointTool",
              "command": "Identify",
              "drawMode": "POINT",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
              "statusText": "@language-dsk-identify-point-tool",
              "keyboardStatusText": "@language-toolbar-identify-point-desc-keyboard"
            },
            {
              "name": "IdentifyRectangleTool",
              "command": "Identify",
              "drawMode": "RECTANGLE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
              "statusText": "@language-identify-rectangle-tool"
            },
            {
              "name": "IdentifyPolylineTool",
              "command": "Identify",
              "drawMode": "POLYLINE",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
              "statusText": "@language-dsk-identify-polyline-tool",
              "keyboardStatusText": "@language-toolbar-identify-polyline-desc-keyboard"
            },
            {
              "name": "IdentifyPolygonTool",
              "command": "Identify",
              "drawMode": "POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-polygon-24.png",
              "statusText": "@language-identify-polygon-tool",
              "keyboardStatusText": "@language-toolbar-identify-polygon-desc-keyboard"
            },
            {
              "name": "IdentifyFreehandPolygonTool",
              "command": "Identify",
              "drawMode": "FREEHAND_POLYGON",
              "isSticky": false,
              "iconUri": "Resources/Images/Icons/Toolbar/identify-freehand-24.png",
              "statusText": "@language-identify-freehand-polygon-tool"
            }
          ],
          "behaviors": [
            {
              "name": "SelectLayersForIdentifyActivatedBehavior",
              "event": "SelectLayersForIdentifyActivatedEvent",
              "commands": [
                "OpenDataFrame"
              ]
            },
            {
              "name": "SelectLayersForIdentifyDeactivatedBehavior",
              "event": "SelectLayersForIdentifyDeactivatedEvent",
              "commands": [
                "CloseDataFrame"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "IdentifyOptionsView",
            "viewModelId": "IdentifyOptionsViewModel",
            "visible": true,
            "markup": "Mapping/modules/Identify/IdentifyOptionsView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsView",
            "region": "IdentifyOptionsRegion",
            "configuration": {}
          },
          {
            "id": "IdentifyLayerSelectorView",
            "viewModelId": "IdentifyLayerSelectorViewModel",
            "title": "@language-layer-selector-identify-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyLayerSelectorView",
            "markup": "Mapping/modules/LayerSelector/LayerSelectorView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png",
            "region": "DataRegion",
            "visible": false,
            "isManaged": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "IdentifyOptionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsViewModel",
            "configuration": {
              "bufferIconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
              "selectLayersIconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
            }
          },
          {
            "id": "IdentifyLayerSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyLayerSelectorViewModel"
          }
        ]
      },
      {
        "moduleName": "Info",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoModule",
        "configuration": {},
        "views": [
          {
            "id": "InfoView",
            "viewModelId": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoView",
            "markup": "Mapping/modules/Info/InfoView.html",
            "region": "HomePanelContainerRegion",
            "title": "@language-common-welcome",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "InfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.Info.InfoViewModel",
            "configuration": {
              "content": "%3Cp%20style%3D%22text-align%3A%20center%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%22%20size%3D%223%22%3E%3Cspan%20style%3D%22color%3A%20rgb(120%2C%20162%2C%2047)%3B%20line-height%3A%20107%25%3B%20font-size%3A%2018pt%3B%22%3E%3Cfont%20face%3D%22Calibri%22%3E%3Cstrong%3EWelcome%20to%20the%20TNRD%3C%2Fstrong%3E%3C%2Ffont%3E%3C%2Fspan%3E%3C%2Ffont%3E%3C%2Fp%3E%3Cp%20align%3D%22left%22%20style%3D%22margin%3A%200cm%200cm%208pt%3B%20text-align%3A%20center%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%22%20size%3D%223%22%3E%0A%0A%3C%2Ffont%3E%3Cspan%20style%3D%22color%3A%20rgb(120%2C%20162%2C%2047)%3B%20line-height%3A%20107%25%3B%20font-size%3A%2018pt%3B%22%3E%3Cfont%20face%3D%22Calibri%22%3E%3Cstrong%3ERegional%20Map%3C%2Fstrong%3E%3C%2Ffont%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20align%3D%22justify%22%20style%3D%22margin%3A%200cm%200cm%208pt%3B%20text-align%3A%20center%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%22%20size%3D%223%22%3E%0A%0A%3C%2Ffont%3E%3Cspan%20style%3D%22color%3A%20rgb(120%2C%20162%2C%2047)%3B%20line-height%3A%20100%25%3B%20font-size%3A%2012pt%3B%22%3E%3Cfont%20face%3D%22Calibri%22%3E%3C%2Ffont%3E%3C%2Fspan%3E%3Cp%20align%3D%22left%22%3E%3Cfont%20face%3D%22Calibri%22%3E%0A%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3E%3Cfont%20face%3D%22Arial%22%20size%3D%222%22%3ESearch%20for%20parcel%20by%20%3Ca%20href%3D'href%3D%22command%3ARunWorkflowById%3FSearchParcelByAddress%22'%3EAddress%3C%2Fa%3E.%3C%2Ffont%3E%3C%2Fspan%3E%3C%2Ffont%3E%3C%2Fp%3E%3Cp%20align%3D%22left%22%3E%3Cfont%20face%3D%22Arial%22%20size%3D%222%22%3E%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3E%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3E%3Cfont%20face%3D%22Arial%22%20size%3D%222%22%3ESearch%20for%20parcel%20by%20%3Ca%20href%3D'href%3D%22command%3ARunWorkflowById%3FSearchParcelByPid%22'%3EPID%3C%2Fa%3E.%3C%2Ffont%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Ffont%3E%3C%2Fp%3E%3Cp%20align%3D%22left%22%3E%3Cfont%20face%3D%22Arial%22%20size%3D%222%22%3E%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3E%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3E%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3E%3Cfont%20face%3D%22Arial%22%20size%3D%222%22%3ESearch%20for%20parcel%20by%20%3Ca%20href%3D'href%3D%22command%3ARunWorkflowById%3FSearchParcelByFolio%22'%3EFolio%3C%2Fa%3E.%3C%2Ffont%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Ffont%3E%3C%2Fp%3E%3Cp%20align%3D%22left%22%3E%3Cfont%20face%3D%22Calibri%22%3E%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3EI%20want%20to...%3C%2Fspan%3E%3Cbr%3E%3Cspan%20style%3D%22color%3A%20rgb(153%2C%20153%2C%20153)%3B%20font-family%3A%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2014px%3B%22%3E%3Cfont%20color%3D%22%23000000%22%20face%3D%22Arial%22%20size%3D%222%22%3EThe%3C%2Ffont%3E%20%3Ca%20href%3D%22command%3AToggleView%3FIWantToMenuView%22%3E%22I%20want%20to...%22%3C%2Fa%3E%20%3C%2Fspan%3E%3Cfont%20face%3D%22Arial%22%3Emenu%20contains%20frequently%20used%20tools%20(e.g.%26nbsp%3Bproperty%20report)%26nbsp%3Band%20additional%20search%20capabilities.%3C%2Ffont%3E%3C%2Ffont%3E%3Cspan%20style%3D%22color%3A%20rgb(99%2C%20102%2C%20106)%3B%20line-height%3A%20107%25%3B%20font-size%3A%2012pt%3B%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20align%3D%22left%22%20style%3D%22margin%3A%200cm%200cm%208pt%3B%20text-align%3A%20left%3B%22%3E%0A%0A%20%3Cimg%20src%3D%22Resources%2FImages%2FIcons%2FToolbar%2Fsearch-32.png%22%3E%0A%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3EKeyword%20Search%3C%2Fspan%3E%3Cbr%3E%0A%20%3Cspan%3EFind%20content%20on%20the%20map%20using%20keywords.%20For%20example%2C%20search%20for%20%3Ca%20href%3D'href%3D%22command%3AGlobalSearch%3Flibrary%22'%3E'library'%3C%2Fa%3E%26nbsp%3Bor%20search%20for%20%3Ca%20href%3D'href%3D%22command%3AGlobalSearch%3Ftransfer%22'%3E'transfer%20station'%3C%2Fa%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%0A%0A%20%0A%20%3Cimg%20src%3D%22Resources%2FImages%2FIcons%2FToolbar%2Ftools-32.png%22%3E%0A%20%0A%20%3Cspan%20style%3D%22color%3A%20rgb(0%2C%200%2C%200)%3B%20font-family%3A%20Segoe%20UI%20Light%2C%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2018px%3B%22%3EExplore%2C%26nbsp%3BPrint%20and%20Measure%3C%2Fspan%3E%3Cbr%3E%0A%3Cspan%20style%3D%22color%3A%20rgb(153%2C%20153%2C%20153)%3B%20font-family%3A%20Segoe%20UI%2C%20Arial%3B%20font-size%3A%2014px%3B%22%3E%3Cfont%20color%3D%22%23000000%22%20face%3D%22Arial%22%20size%3D%222%22%3EThe%3C%2Ffont%3E%20%3Ca%20href%3D%22command%3AToggleToolbar%22%3Etoolbar%3C%2Fa%3E%3C%2Fspan%3E%26nbsp%3Bcontains%20additional%20options%20to%20search%2C%26nbsp%3Bcreate%20a%20map%26nbsp%3Band%20explore%20communities%20within%20the%20TNRD.%26nbsp%3B%20%3Cbr%3E%3C%2Fp%3E%3Cp%20align%3D%22left%22%20style%3D%22margin%3A%200cm%200cm%208pt%3B%20text-align%3A%20left%3B%22%3E%3Cbr%3E%3C%2Fp%3E%3Cp%20align%3D%22left%22%20style%3D%22margin%3A%200cm%200cm%208pt%3B%20text-align%3A%20left%3B%22%3EIf%20you%20have%26nbsp%3Bany%20questions%2C%20comments%20or%26nbsp%3Brequire%20assistance%2C%20please%20email%20%3Ca%20href%3D%22mailto%3Agisinfo%40tnrd.ca%22%3Egisinfo%40tnrd.ca%3C%2Fa%3E%26nbsp%3B%3Cbr%3E%3C%2Fp%3E%0A%0A%20",
              "included": true,
              "title": "Home"
            }
          }
        ]
      },
      {
        "moduleName": "InsightIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.insightIntegration.InsightIntegrationModule",
        "configuration": {
          "enabled": false,
          "dataRelayUri": "http://localhost/Geocortex/Analytics/ClientRelay",
          "dataRelayIntervalInSeconds": 30
        }
      },
      {
        "moduleName": "Integration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.integration.IntegrationModule",
        "configuration": {
          "allowedOrigins": []
        },
        "views": [
          {
            "id": "ExternalComponentView",
            "viewModelId": "ExternalComponentViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.integration.ExternalComponentView",
            "markup": "Mapping/modules/Integration/ExternalComponentView.html",
            "region": "BottomPanelRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ExternalComponentViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.integration.ExternalComponentViewModel",
            "configuration": {
              "containerRegionName": "ExternalComponentRegion",
              "containerRegionType": "geocortex.framework.ui.DivStackRegionAdapter",
              "headerIsVisible": true,
              "showXButton": true,
              "showMaximizeButton": true,
              "resizeY": true,
              "selectorIconUri": "Resources/Images/Icons/Toolbar/map-24.png",
              "selectorText": "@language-integration-selector-text",
              "statusText": "@language-integration-viewpoint-indicator-desc",
              "defaultComponents": [],
              "externalComponents": [
                {
                  "id": "googleMaps",
                  "displayName": "Google Street View",
                  "uri": "Resources/3rdPartyMaps/GoogleMaps.html",
                  "viewpointIndicatorUri": "Resources/Images/Icons/location-direction-blue-32.png"
                }
              ]
            }
          }
        ]
      },
      {
        "moduleName": "IWantToMenu",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuModule",
        "configuration": {
          "menus": [
            {
              "id": "Iwantto",
              "description": "@language-menu-menus-description",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/home-32.png",
                  "text": "@language-menu-home-panel",
                  "description": "@language-menu-home-panel-desc",
                  "command": "ShowHomePanel",
                  "commandParameter": null
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "text": "@language-menu-map-layers",
                  "description": "@language-menu-map-layers-desc",
                  "command": "ShowLayerList",
                  "commandParameter": null
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/house-number-32.png",
                  "text": "Search for an Address",
                  "description": "e.g. 155 Ferry Rd",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchParcelByAddress"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/parcel-id-32.png",
                  "text": "Search for a PID",
                  "description": "e.g. 023-866-161",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchParcelByPid"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/SearchByFolio.png",
                  "text": "Search for a Folio",
                  "description": "e.g. 726.07038.570",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchParcelByFolio"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/house-pointer-32.png",
                  "text": "Search for a Legal Description",
                  "description": "e.g. L 25 PL 31564",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchLegal"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/SearchByRoad.png",
                  "text": "Search for a Road",
                  "description": "e.g. Winney Ave",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchRoad"
                },
                {
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/map-default-24.png",
                  "text": "Search for a Community",
                  "description": "e.g. Pritchard",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchPlace"
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "IWantToMenuButtonView",
            "visible": true,
            "viewModelId": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuButtonView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuButtonView.html",
            "region": "NavigationMapRegion",
            "configuration": {}
          },
          {
            "id": "IWantToMenuView",
            "viewModelId": "IWantToMenuViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuView",
            "markup": "Mapping/modules/IWantToMenu/IWantToMenuView.html",
            "region": "IWantToMenuRegion",
            "configuration": {
              "menuId": "Iwantto"
            }
          }
        ],
        "viewModels": [
          {
            "id": "IWantToMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuViewModel",
            "configuration": {
              "showMenu": true,
              "menuTitle": "@language-menu-title",
              "showGlobalMenu": true,
              "primaryButtonColor": "#1A72C4"
            }
          }
        ]
      },
      {
        "moduleName": "LabelOptions",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.labelOptions.LabelOptionsModule",
        "configuration": {},
        "views": [
          {
            "id": "LabelOptionsView",
            "title": "@language-labelOptions-title",
            "visible": false,
            "viewModelId": "LabelOptionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.labelOptions.LabelOptionsView",
            "markup": "Mapping/modules/LabelOptions/LabelOptionsView.html",
            "region": "LayerDataContainerRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LabelOptionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.labelOptions.LabelOptionsViewModel",
            "configuration": {
              "showLabels": true,
              "fontColor": "#000000",
              "fontFamilies": [
                "Arial",
                "Cambria",
                "Georgia",
                "Times New Roman",
                "Verdana"
              ],
              "fontIsBold": false,
              "fontIsItalic": false,
              "fontIsUnderline": false,
              "haloSize": 0,
              "haloColor": "#000000",
              "showLabelsIsVisible": true,
              "fieldIsVisible": true,
              "fontSizeIsVisible": true,
              "fontColorIsVisible": true,
              "labelPlacementIsVisible": true,
              "fontFamiliesIsVisible": false,
              "fontStyleIsVisible": false,
              "haloSizeIsVisible": false,
              "haloColorIsVisible": false,
              "fontSize": {
                "min": 6,
                "max": 32,
                "value": 12,
                "step": 1
              }
            }
          }
        ]
      },
      {
        "moduleName": "LayerAddition",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerAddition",
        "configuration": {},
        "views": [
          {
            "id": "AddLayerDialogView",
            "viewModelId": "LayerAdditionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.AddLayerDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/AddLayerDialogView.html",
            "title": "@language-layer-addition-search-title",
            "region": "LayerAdditionContainerRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/LayerAddition/Dialogs/AddLayerDialogView"
          },
          {
            "id": "ServiceConnectionsDialogView",
            "viewModelId": "LayerAdditionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.ServiceConnectionsDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/ServiceConnectionsDialogView.html",
            "title": "@language-layer-addition-service-connections-title",
            "region": "LayerAdditionContainerRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/LayerAddition/Dialogs/ServiceConnectionsDialogView"
          },
          {
            "id": "MapServicesDialogView",
            "viewModelId": "LayerAdditionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.MapServicesDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/MapServicesDialogView.html",
            "title": "@language-layer-addition-map-services-title",
            "region": "LayerAdditionContainerRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/LayerAddition/Dialogs/MapServicesDialogView"
          },
          {
            "id": "SubLayersDialogView",
            "viewModelId": "LayerAdditionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.SubLayersDialogView",
            "markup": "Mapping/modules/LayerAddition/Dialogs/SubLayersDialogView.html",
            "title": "@language-layer-addition-sub-layers-title",
            "region": "LayerAdditionContainerRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/LayerAddition/Dialogs/SubLayersDialogView"
          },
          {
            "id": "LayerPropertiesView",
            "title": "@language-layer-addition-layer-properties",
            "visible": false,
            "viewModelId": "LayerPropertiesViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerPropertiesView",
            "markup": "Mapping/modules/LayerAddition/LayerPropertiesView.html",
            "region": "LayerDataContainerRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LayerAdditionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerAdditionViewModel",
            "configuration": {
              "zoomToUserAddedLayers": true,
              "layerDefaults": {
                "searchable": true,
                "identifiable": true,
                "queryable": true,
                "showMapTips": true
              }
            }
          },
          {
            "id": "LayerPropertiesViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerAddition.LayerPropertiesViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "LayerCatalog",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.LayerCatalogModule",
        "configuration": {
          "layerCatalogProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.EssentialsSiteProvider",
              "enabled": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.AssemblyProvider",
              "enabled": false
            }
          ]
        },
        "views": [
          {
            "id": "LayerCatalogView",
            "viewModelId": "LayerCatalogViewModel",
            "visible": false,
            "title": "@language-layer-catalog-layercatalogview-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.LayerCatalogView",
            "markup": "Mapping/modules/LayerCatalog/LayerCatalogView.html",
            "configuration": {
              "autocompleteEnabled": true,
              "minFilterLength": 3
            }
          }
        ],
        "viewModels": [
          {
            "id": "LayerCatalogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerCatalog.LayerCatalogViewModel",
            "configuration": {
              "infoLink": {
                "enabled": false,
                "command": "",
                "iconUri": "Resources/Images/Icons/info-12.png",
                "tooltip": "",
                "text": ""
              }
            }
          }
        ]
      },
      {
        "moduleName": "LayerDrawingOrder",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.LayerDrawingOrderModule",
        "configuration": {},
        "views": [
          {
            "id": "LayerGroupsDialogView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.LayerGroupsDialogView",
            "require": "Mapping/modules/LayerDrawingOrder/Dialogs/LayerGroupsDialogView",
            "markup": "Mapping/modules/LayerDrawingOrder/Dialogs/LayerGroupsDialogView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "LayerDrawingOrderViewModel",
            "region": "DrawingOrderContainerRegion",
            "title": "@language-layerDrawingOrder-groups-title",
            "visible": false
          },
          {
            "id": "OrderServicesDialogView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.OrderServicesDialogView",
            "require": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderServicesDialogView",
            "markup": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderServicesDialogView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "LayerDrawingOrderViewModel",
            "region": "DrawingOrderContainerRegion",
            "title": "@language-layerDrawingOrder-services-title",
            "visible": false
          },
          {
            "id": "OrderLayersDialogView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.OrderLayersDialogView",
            "require": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderLayersDialogView",
            "markup": "Mapping/modules/LayerDrawingOrder/Dialogs/OrderLayersDialogView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "LayerDrawingOrderViewModel",
            "region": "DrawingOrderContainerRegion",
            "title": "@language-layerDrawingOrder-layers-title",
            "visible": false
          }
        ],
        "viewModels": [
          {
            "id": "LayerDrawingOrderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerDrawingOrder.LayerDrawingOrderViewModel"
          }
        ]
      },
      {
        "moduleName": "LayerList",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListModule",
        "configuration": {
          "enableLegendIntegration": true,
          "onlyShowSwatchesOnVisibleLayers": true,
          "autoActivateAncestorVisibilities": false,
          "enableLayerIcons": false
        },
        "views": [
          {
            "id": "LayerListView",
            "viewModelId": "LayerListViewModel",
            "title": "@language-layerlist-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListView",
            "markup": "Mapping/modules/LayerList/LayerListView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {
              "showStatusMessages": true
            }
          },
          {
            "id": "LayerActionsView",
            "viewModelId": "LayerActionsViewModel",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-menu-24.png",
            "markup": "Mapping/modules/LayerList/LayerActions/LayerActionsView.html",
            "title": "@language-layer-actions-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsView",
            "region": "LayerDataContainerRegion",
            "configuration": {
              "menuId": "LayerActions"
            },
            "require": "Mapping/modules/LayerList/LayerActions/LayerActionsView"
          },
          {
            "id": "MapServiceActionsView",
            "viewModelId": "MapServiceActionsViewModel",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-menu-24.png",
            "markup": "Mapping/modules/LayerList/MapServiceActions/MapServiceActionsView.html",
            "title": "@language-mapservice-actions-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.MapServiceActionsView",
            "region": "LayerDataContainerRegion",
            "configuration": {
              "menuId": "MapServiceActions"
            },
            "require": "Mapping/modules/LayerList/MapServiceActions/MapServiceActionsView"
          }
        ],
        "viewModels": [
          {
            "id": "LayerListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerListViewModel",
            "configuration": {
              "showTransparencySlider": true,
              "autoExpandLegendSwatches": true
            }
          },
          {
            "id": "LayerActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayerActionsViewModel",
            "configuration": {},
            "require": "Mapping/modules/LayerList/LayerActions/LayerActionsViewModel"
          },
          {
            "id": "MapServiceActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "configuration": {},
            "require": "geocortex/infrastructure/menus/MenuViewModel"
          }
        ]
      },
      {
        "moduleName": "LayerSelector",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerSelector.LayerSelectorModule",
        "configuration": {}
      },
      {
        "moduleName": "LayerStyles",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStylesModule",
        "configuration": {},
        "views": [
          {
            "id": "LayerStyleSelectorView",
            "markup": "Mapping/modules/LayerStyles/LayerStyleSelectorView.html",
            "viewModelId": "LayerStyleSelectorViewModel",
            "title": "@language-layerstyles-name",
            "region": "LayerVisualizationRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStyleSelectorView",
            "visible": false
          }
        ],
        "viewModels": [
          {
            "id": "LayerStyleSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStyleSelectorViewModel",
            "configuration": {
              "showImageSelector": true
            }
          }
        ]
      },
      {
        "moduleName": "LayerThemes",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemesModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "Legend",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendModule",
        "configuration": {},
        "views": [
          {
            "id": "LegendView",
            "viewModelId": "LegendViewModel",
            "title": "@language-legend-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendView",
            "markup": "Mapping/modules/Legend/LegendView.html",
            "region": "LayerDataContainerRegion",
            "isManaged": false,
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "LegendViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.legend.LegendViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Map",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapModule",
        "configuration": {
          "panDuration": 350,
          "panRate": 50,
          "zoomDuration": 500,
          "zoomRate": 50,
          "longClickMilliseconds": 500,
          "maxExtentLogSize": 100,
          "showLoadingStatus": true,
          "loadingMessageTiming": [
            1000,
            3000,
            3000
          ],
          "defaultPointFeatureZoomScales": [],
          "behaviors": [
            {
              "name": "MapOnClickBehavior",
              "commands": [
                "InvokeMapTip"
              ]
            },
            {
              "name": "MapOnLongClickBehavior",
              "commands": [
                "ActivateMapContextMenu"
              ]
            },
            {
              "name": "MapOnFeatureClickBehavior",
              "commands": [
                "ShowMapTip"
              ]
            },
            {
              "name": "MapOnContextMenuBehavior",
              "commands": [
                "ActivateMapContextMenu"
              ]
            },
            {
              "name": "MapTimeExtentChangedBehavior",
              "event": "MapTimeExtentChangedEvent",
              "commands": []
            }
          ],
          "tools": [
            {
              "name": "CenterMapTool",
              "command": "PanToPoint",
              "drawMode": "POINT",
              "isSticky": true,
              "statusText": "@language-dsk-map-center"
            },
            {
              "name": "ZoomInTool",
              "command": "ZoomToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-in"
            },
            {
              "name": "ZoomOutTool",
              "command": "ZoomOutToExtent",
              "drawMode": "EXTENT",
              "isSticky": true,
              "statusText": "@language-map-zoom-out"
            }
          ],
          "menus": [
            {
              "id": "MapContextMenu",
              "defaultIconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "text": "@language-menu-identify",
                  "command": "Identify",
                  "commandParameter": "{{context}}"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                  "text": "@language-menu-draw-point",
                  "command": "AddMarkup",
                  "commandParameter": "{{context}}"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
                  "text": "@language-menu-plot-coordinate",
                  "command": "PlotCoordinates",
                  "commandParameter": "{{context}}"
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-text-24.png",
                  "text": "@language-menu-add-text",
                  "command": "AddTextMarkup",
                  "commandParameter": "{{context}}"
                },
                {
                  "iconUri": "Resources/Images/Icons/center-map-24.png",
                  "text": "@language-menu-center-map",
                  "command": "PanToPoint",
                  "commandParameter": "{{context}}"
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "MapView",
            "viewModelId": "MapViewModel",
            "visible": true,
            "markup": "Mapping/modules/Map/MapView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapView",
            "region": "MapRegion",
            "configuration": {
              "wrapAround180": false,
              "extentBroadcastFrequency": 20,
              "fitTiledMapsToExtent": false,
              "showAttribution": true,
              "minScale": "",
              "maxScale": 500,
              "disableMapKeyboardNavigation": false
            }
          },
          {
            "id": "MapContextMenuView",
            "viewModelId": "MapContextMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapContextMenuView",
            "markup": "Mapping/modules/Map/MapContextMenu/MapContextMenuView.html",
            "region": "ContextMenuContentRegion",
            "title": "@language-map-context-menu-title",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/Map/MapContextMenu/MapContextMenuView"
          },
          {
            "id": "ContextMenuReverseGeocodeView",
            "viewModelId": "ContextMenuReverseGeocodeViewModel",
            "visible": true,
            "markup": "Mapping/modules/Map/MapContextMenu/Views/ReverseGeocode/ReverseGeocodeView.html",
            "type": "geocortex.framework.ui.ViewBase",
            "region": "MapContextMenuContentRegion",
            "configuration": {},
            "require": "geocortex/framework/ui/ViewBase"
          },
          {
            "id": "ContextMenuCoordinatesView",
            "viewModelId": "ContextMenuCoordinatesViewModel",
            "visible": true,
            "markup": "Mapping/modules/Map/MapContextMenu/Views/Coordinates/CoordinatesView.html",
            "type": "geocortex.framework.ui.ViewBase",
            "region": "MapContextMenuContentRegion",
            "configuration": {},
            "require": "geocortex/framework/ui/ViewBase"
          },
          {
            "id": "ContextMenuMapMenuView",
            "viewModelId": "ContextMenuMapMenuViewModel",
            "visible": true,
            "markup": "Mapping/modules/Map/MapContextMenu/Views/Menu/MapMenuView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapMenuView",
            "region": "MapContextMenuContentRegion",
            "configuration": {
              "menuId": "MapContextMenu"
            },
            "require": "Mapping/modules/Map/MapContextMenu/Views/Menu/MapMenuView"
          }
        ],
        "viewModels": [
          {
            "id": "MapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapViewModel",
            "configuration": {
              "stepZoomFactor": 0.5
            }
          },
          {
            "id": "MapContextMenuViewModel",
            "type": "geocortex.framework.ui.ViewModelBase",
            "configuration": {},
            "require": "geocortex/framework/ui/ViewModelBase"
          },
          {
            "id": "ContextMenuReverseGeocodeViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ReverseGeocodeViewModel",
            "configuration": {
              "showReverseGeocoder": true
            },
            "require": "Mapping/modules/Map/MapContextMenu/Views/ReverseGeocode/ReverseGeocodeViewModel"
          },
          {
            "id": "ContextMenuCoordinatesViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.CoordinatesViewModel",
            "configuration": {
              "showCoordinates": true
            },
            "require": "Mapping/modules/Map/MapContextMenu/Views/Coordinates/CoordinatesViewModel"
          },
          {
            "id": "ContextMenuMapMenuViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.MapMenuViewModel",
            "configuration": {
              "showMenu": true
            },
            "require": "Mapping/modules/Map/MapContextMenu/Views/Menu/MapMenuViewModel"
          },
          {
            "id": "MapCoordinatesModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.coordinates.CoordinatesModel",
            "configuration": {
              "defaultCoordinateDisplayTypes": [
                "dd",
                "ddm",
                "dms",
                "xy"
              ],
              "customCoordinateSystems": [],
              "fractionalDigits": 5,
              "defaultGcsWkid": "4326"
            },
            "require": "geocortex/infrastructure/coordinates/CoordinatesModel"
          }
        ]
      },
      {
        "moduleName": "MapTips",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipsModule",
        "configuration": {
          "allowMultiple": false,
          "contentField": "description",
          "behaviors": [
            {
              "name": "MapTipOnCloseBehavior",
              "event": "MapTipClosedEvent",
              "commands": [
                "StopEditingClickableFeature"
              ]
            },
            {
              "name": "MapCalloutClosedBehavior",
              "event": "MapCalloutClosedEvent",
              "commands": []
            },
            {
              "name": "MapTipFeatureChangedBehavior",
              "commands": [
                "PanToFeatureIfOutsideMapExtent",
                "StopAndAutoEditClickableFeature"
              ]
            }
          ],
          "webMapFeaturePresenter": {
            "force": false,
            "featurePropertyName": "currentFeature",
            "view": {
              "markup": "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html",
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
              "libraryId": "Mapping"
            },
            "viewModel": {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
              "libraryId": "Mapping"
            }
          },
          "nullGeometryStatusMessageEnabled": true,
          "nullGeometryStatusMessageArgs": {
            "imageUri": "@language-map-tip-null-geometry-status-message-uri",
            "timeoutMS": 5000
          },
          "showNoResultMapTips": false
        },
        "views": [
          {
            "id": "MapTipView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipView",
            "region": "NavigationMapRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "MapTipHeaderView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipHeaderView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipHeaderView",
            "region": "MapTipHeaderRegion",
            "visible": true,
            "configuration": {}
          },
          {
            "id": "MapTipContentView",
            "viewModelId": "MapTipViewModel",
            "markup": "Mapping/modules/MapTips/MapTipContent.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContent",
            "region": "MapTipContentRegion",
            "visible": true,
            "configuration": {},
            "require": "Mapping/modules/MapTips/MapTipContent"
          }
        ],
        "viewModels": [
          {
            "id": "MapTipViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipContentViewModel",
            "configuration": {},
            "require": "Mapping/modules/MapTips/MapTipContentViewModel"
          }
        ]
      },
      {
        "moduleName": "Markers",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markers.MarkersModule",
        "configuration": {
          "markers": []
        }
      },
      {
        "moduleName": "Markup",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupModule",
        "viewModels": [
          {
            "id": "MarkupViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "defaultPointMarkup": {
                "pointStyle": "Circle",
                "pointSize": 16,
                "pointColor": "#FF4CA0D8"
              },
              "defaultLineMarkup": {
                "lineStyle": "Dash",
                "lineWidth": 3,
                "lineColor": "#FF4CA0D8"
              },
              "defaultPolygonMarkup": {
                "polygonBorderStyle": "Solid",
                "polygonFillStyle": "Solid",
                "polygonBorderWidth": 3,
                "polygonFillColor": "#4D4CA0D8",
                "polygonBorderColor": "#FF4CA0D8"
              },
              "defaultTextMarkup": {
                "textStyle": "Normal",
                "textStyleWeight": "Bold",
                "textSize": "14pt",
                "textColor": "#FF000000",
                "textFamily": "Calibri",
                "textHaloColor": "#FFFFFFFF",
                "textHaloSize": 1
              },
              "customMarkupTools": {
                "point": [],
                "polyline": [],
                "polygon": [],
                "text": []
              },
              "styleSelectorRegion": "LayerDataContainerRegion"
            }
          },
          {
            "id": "TransientMarkupPaletteViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.toolPalettes.TransientMarkupPaletteViewModel",
            "configuration": {},
            "require": "Mapping/modules/Markup/ToolPalettes/TransientMarkupPaletteViewModel"
          },
          {
            "id": "MarkupTemplateSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupTemplateSelectorViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupTemplateSelector/MarkupTemplateSelectorViewModel",
            "configuration": {
              "pointLibraries": [
                "Solid",
                "Hollow",
                "Black Outline"
              ],
              "lineLibraries": [
                "Thin",
                "Thick",
                "Thickest"
              ],
              "polygonLibraries": [
                "Transparent Fill",
                "Solid Fill",
                "Outline"
              ],
              "textLibraries": [
                "Sans-Serif",
                "Serif"
              ]
            }
          },
          {
            "id": "MarkupSymbolSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupSymbolSelectorViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupSymbolSelector/MarkupSymbolSelectorViewModel",
            "configuration": {
              "symbologyConfig": {
                "userSelectedOutlineColor": true
              },
              "textSymbologyConfig": {}
            }
          },
          {
            "id": "MarkupStyleViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.markup.MarkupStyleViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupStyleViewModel",
            "configuration": {
              "containerRegionName": "MarkupStyleSelectorRegion",
              "defaultDisplayName": "@language-markup-select-style",
              "containerTitle": "@language-markup-select-style",
              "enableImageSelector": true,
              "enableTemplateSelector": true,
              "enableSymbolSelector": true
            }
          }
        ],
        "views": [
          {
            "id": "MarkupStyleView",
            "viewModelId": "MarkupStyleViewModel",
            "require": "Mapping/modules/Markup/MarkupStyles/MarkupStyleView",
            "markup": "Mapping/modules/Markup/MarkupStyles/MarkupStyleView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Measurement",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementModule",
        "configuration": {
          "tools": [
            {
              "name": "MeasureDistanceTool",
              "command": "MeasureDistance",
              "drawMode": "POLYLINE",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-distance-24.png",
              "statusText": "@language-measurement-measure-distance-tool-status",
              "keyboardStatusText": "@language-measurement-measure-distance-tool-status-keyboard"
            },
            {
              "name": "MeasureAreaTool",
              "command": "MeasureArea",
              "drawMode": "POLYGON",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/measure-area-24.png",
              "statusText": "@language-measurement-measure-area-tool-status",
              "keyboardStatusText": "@language-measurement-measure-area-tool-status-keyboard"
            },
            {
              "name": "DeleteMeasurementTool",
              "command": "DeleteMeasurement",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-measurement-erase-status",
              "keyboardStatusText": "@language-measurement-erase-status-keyboard"
            }
          ],
          "measurementProjectionWkid": "",
          "measurementLengthUnits": "meter",
          "measurementAreaUnits": "sqMeter",
          "coordinateFractionalDigits": 4,
          "degreeFormat": "dd",
          "angleDirectionSystem": "polar",
          "measurementResultTypes": [
            "LINE",
            "POLYGON",
            "POLYLINE",
            "RECTANGLE",
            "TRIANGLE"
          ],
          "enablePrediction": true,
          "calculationType": "preserveShape",
          "measurementFractionalDigits": 2
        },
        "views": [
          {
            "id": "MeasurementView",
            "viewModelId": "MeasurementViewModel",
            "visible": true,
            "markup": "Mapping/modules/Measurement/MeasurementView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
            "region": "MeasurementDropdownRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "MeasurementViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementViewModel",
            "configuration": {
              "markupLayerName": "Drawings",
              "lineColor": "#0000FF",
              "fillColor": "#6495ED",
              "textColor": "#000000",
              "textSize": "12px",
              "addMarkupToMapByDefault": true,
              "highlightColor": "#FFFFFF",
              "outlineColor": "#000000",
              "outlineWidth": "1",
              "totalMeasurementTextColor": "#FFFFFF",
              "totalMeasurementHighlightColor": "#000000",
              "totalMeasurementOutlineColor": "#FFFFFF",
              "totalMeasurementOutlineWidth": "2",
              "highlightRadius": "5"
            }
          }
        ]
      },
      {
        "moduleName": "Native",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.NativeIntegrationModule",
        "configuration": {},
        "views": [
          {
            "id": "AttachFileView",
            "viewModelId": "AttachFileViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-native-attach-file",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileView",
            "markup": "Mapping/modules/Native/AttachFileView.html",
            "region": "FeatureEditingContainerRegion",
            "configuration": {},
            "require": "Mapping/modules/Native/AttachFileView"
          }
        ],
        "viewModels": [
          {
            "id": "AttachFileViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.nativeIntegration.AttachFileViewModel",
            "configuration": {
              "attachFileViewId": "AttachFileView"
            },
            "require": "Mapping/modules/Native/AttachFileViewModel"
          }
        ],
        "require": "Mapping/modules/Native/NativeModule"
      },
      {
        "moduleName": "Navigation",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.navigation.NavigationModule",
        "configuration": {},
        "views": [
          {
            "id": "DataFrameButtonView",
            "viewModelId": "DataFrameViewContainerViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.DataFrameButtonView",
            "markup": "Mapping/modules/Shells/Components/DataFrameButtonView.html",
            "region": "TopMapRegion",
            "configuration": {},
            "require": "Mapping/modules/Shells/Components/DataFrameButtonView"
          },
          {
            "id": "GeolocateButtonView",
            "viewModelId": "GeolocateViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.geolocate.GeolocateView",
            "markup": "Mapping/modules/Geolocate/GeolocateButtonView.html",
            "region": "TopLeftMapRegion",
            "configuration": {},
            "require": "Mapping/modules/Geolocate/GeolocateView"
          },
          {
            "id": "ZoomInView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomInView",
            "markup": "Mapping/modules/ZoomControl/ZoomInView.html",
            "region": "TopLeftMapRegion",
            "configuration": {},
            "require": "Mapping/modules/ZoomControl/ZoomInView"
          },
          {
            "id": "ZoomOutView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomOutView",
            "markup": "Mapping/modules/ZoomControl/ZoomOutView.html",
            "region": "TopLeftMapRegion",
            "configuration": {},
            "require": "Mapping/modules/ZoomControl/ZoomOutView"
          },
          {
            "id": "BookmarksButtonView",
            "viewModelId": "BookmarksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.bookmarks.BookmarksView",
            "markup": "Mapping/modules/Bookmarks/BookmarksButtonView.html",
            "region": "TopLeftMapRegion",
            "visible": true,
            "require": "Mapping/modules/Bookmarks/BookmarksView"
          },
          {
            "id": "DataFrameResizeButtonView",
            "viewModelId": "DataFrameViewContainerViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.components.DataFrameResizeButtonView",
            "markup": "Mapping/modules/Shells/Components/DataFrameResizeButtonView.html",
            "region": "MiddleLeftMapRegion",
            "configuration": {},
            "require": "Mapping/modules/Shells/Components/DataFrameResizeButtonView"
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "Notifications",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.notifications.NotificationsModule",
        "configuration": {
          "region": "TopMapRegion"
        },
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "Offline",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.offline.OfflineModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "OfflineMaps",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.OfflineMapsModule",
        "configuration": {
          "aoiMask": {
            "enabled": false,
            "fillColor": null,
            "boundaryColor": "black",
            "boundaryWidth": 2,
            "boundaryStyle": "solid",
            "layerId": "OfflineMapsAOIMask",
            "matchMapBackground": false
          }
        },
        "views": [
          {
            "id": "ListOfflineMapsView",
            "title": "@language-offline-maps-list-title",
            "viewModelId": "OfflineMapsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.ListOfflineMapsView",
            "markup": "Mapping/modules/OfflineMaps/ListOfflineMapsView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {
              "sync": {
                "command": "StartOfflineSyncAndShowProgress",
                "commandParameter": {
                  "offlineMap": "{{offlineMap}}"
                }
              },
              "download": {
                "command": "StartOfflineDownloadAndShowProgress",
                "commandParameter": {
                  "offlineMap": "{{offlineMap}}"
                }
              }
            }
          },
          {
            "id": "ManageOfflineMapsView",
            "title": "@language-offline-maps-manage-title",
            "viewModelId": "OfflineMapsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.ManageOfflineMapsView",
            "markup": "Mapping/modules/OfflineMaps/ManageOfflineMapsView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {
              "newOfflineMap": {
                "command": "ShowOfflineMapEditor",
                "commandParameter": {}
              },
              "editOfflineMap": {
                "command": "ShowOfflineMapEditor",
                "commandParameter": {
                  "existingOfflineMap": "{{offlineMap}}"
                }
              }
            }
          },
          {
            "id": "OfflineMapEditorView",
            "title": "",
            "viewModelId": "OfflineMapEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.OfflineMapEditorView",
            "markup": "Mapping/modules/OfflineMaps/Editor/OfflineMapEditorView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {
              "title": {
                "forNew": "@language-offlinemapeditor-new-title",
                "forExisting": "@language-offlinemapeditor-title"
              },
              "showLayersEditor": {
                "command": "ActivateView",
                "commandParameter": "OfflineMapEditorLayersView"
              },
              "showGeometryEditor": {
                "command": "ActivateView",
                "commandParameter": "OfflineMapEditorGeometryView"
              },
              "showBasemapsEditor": {
                "command": "ActivateView",
                "commandParameter": "OfflineMapEditorBasemapsView"
              },
              "showSharingEditor": {
                "command": "ActivateView",
                "commandParameter": "OfflineMapEditorSharingView"
              }
            },
            "require": "Mapping/modules/OfflineMaps/Editor/OfflineMapEditorView"
          },
          {
            "id": "OfflineMapEditorLayersView",
            "title": "@language-offlinemapeditor-layers-title",
            "viewModelId": "OfflineMapEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.layers.OfflineMapEditorLayersView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Layers/OfflineMapEditorLayersView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/OfflineMaps/Editor/Layers/OfflineMapEditorLayersView"
          },
          {
            "id": "OfflineMapEditorGeometryView",
            "title": "@language-offlinemapeditor-geometry-title",
            "viewModelId": "OfflineMapEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.geometry.OfflineMapEditorGeometryView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Geometry/OfflineMapEditorGeometryView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {
              "geometrylayerId": "OfflineMapEditorGeometry",
              "fillColor": "rgba(200, 0, 0, 0.3)",
              "outlineColor": "rgba(200, 0, 0, 0.7)",
              "outlineWidth": 1,
              "offViewOpacity": 0.5
            },
            "require": "Mapping/modules/OfflineMaps/Editor/Geometry/OfflineMapEditorGeometryView"
          },
          {
            "id": "OfflineMapEditorBasemapsView",
            "title": "@language-offlinemapeditor-basemaps-title",
            "viewModelId": "OfflineMapEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.basemap.OfflineMapEditorBasemapsView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapsView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {
              "showBasemapsLevelEditorView": {
                "command": "ShowOfflineMapEditorBasemapLevels",
                "commandParameter": {
                  "basemap": "{{basemap}}"
                }
              }
            },
            "require": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapsView"
          },
          {
            "id": "OfflineMapEditorBasemapLevelsView",
            "title": "@language-offlinemapeditor-basemaps-levels-title",
            "viewModelId": "OfflineMapEditorBasemapLevelsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.basemap.OfflineMapEditorBasemapLevelsView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapLevelsView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapLevelsView"
          },
          {
            "id": "OfflineMapEditorSharingView",
            "title": "@language-offlinemapeditor-sharing-title",
            "viewModelId": "OfflineMapEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.sharing.OfflineMapEditorSharingView",
            "markup": "Mapping/modules/OfflineMaps/Editor/Sharing/OfflineMapEditorSharingView.html",
            "region": "OfflineMapsContainerRegion",
            "visible": false,
            "configuration": {},
            "require": "Mapping/modules/OfflineMaps/Editor/Sharing/OfflineMapEditorSharingView"
          },
          {
            "id": "SyncStatusView",
            "title": "@language-offline-maps-sync-title",
            "viewModelId": "SyncStatusViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.sync.SyncStatusView",
            "markup": "Mapping/modules/OfflineMaps/Sync/SyncStatusView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "configuration": {
              "showXButton": false
            },
            "require": "Mapping/modules/OfflineMaps/Sync/SyncStatusView"
          }
        ],
        "viewModels": [
          {
            "id": "OfflineMapsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.OfflineMapsViewModel",
            "configuration": {
              "saveOfflineMaps": true,
              "defaultThumbnail": "Resources/Images/Icons/map-no-preview-70x50.png",
              "menus": [
                {
                  "id": "ListOfflineMapsActions",
                  "description": "@language-menu-list-offline-maps-actions-desc",
                  "items": [
                    {
                      "text": "@language-menu-list-offline-maps-actions-refresh",
                      "description": "@language-menu-list-offline-maps-actions-refresh-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                      "command": "RefreshOfflineMapsList",
                      "commandParameter": null
                    },
                    {
                      "text": "@language-offline-maps-manage-button",
                      "description": "@language-offline-maps-manage-button-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
                      "command": "ActivateView",
                      "commandParameter": "ManageOfflineMapsView"
                    }
                  ]
                },
                {
                  "id": "ManageOfflineMapsActions",
                  "description": "@language-menu-list-offline-maps-actions-desc",
                  "items": [
                    {
                      "text": "@language-menu-list-offline-maps-actions-refresh",
                      "description": "@language-menu-list-offline-maps-actions-refresh-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/sync-24.png",
                      "command": "RefreshOfflineMapsList",
                      "commandParameter": null
                    }
                  ]
                }
              ]
            }
          },
          {
            "id": "OfflineMapEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.OfflineMapEditorViewModel",
            "configuration": {
              "thumbnail": {
                "width": 70,
                "height": 50,
                "dpi": 20
              },
              "onEditingStarted": [
                {
                  "command": "DeactivateView",
                  "commandParameter": "LayerDataContainerView"
                }
              ],
              "onEditingFinished": [
                {
                  "command": "ActivateView",
                  "commandParameter": "LayerDataContainerView"
                },
                {
                  "command": "ActivateView",
                  "commandParameter": "ManageOfflineMapsView"
                }
              ],
              "tools": [
                {
                  "name": "OfflineMapEditorCurrentExtentTool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "CURRENT_EXTENT",
                  "isSticky": false
                },
                {
                  "name": "OfflineMapEditorPolygonTool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "POLYGON",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                  "statusText": "@language-feature-editing-dsk-polygon-tool",
                  "keyboardStatusText": "@language-feature-editing-dsk-polygon-tool-keyboard"
                },
                {
                  "name": "OfflineMapEditorFreehandPolygonTool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "FREEHAND_POLYGON",
                  "isSticky": false,
                  "statusText": "@language-feature-editing-dsk-freehand-polygon-tool"
                },
                {
                  "name": "OfflineMapEditorCircleTool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "CIRCLE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                  "statusText": "@language-feature-editing-circle-tool"
                },
                {
                  "name": "OfflineMapEditorEllipseTool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "ELLIPSE",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                  "statusText": "@language-feature-editing-ellipse-tool"
                },
                {
                  "name": "OfflineMapEditorRectangleTool",
                  "command": "SetOfflineMapEditorGeometry",
                  "drawMode": "EXTENT",
                  "isSticky": false,
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                  "statusText": "@language-feature-editing-rectangle-tool"
                }
              ],
              "menus": [
                {
                  "id": "OfflineMapEditorGeometryActions",
                  "description": "@language-menu-offline-map-editor-geometry-actions-desc",
                  "items": [
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-clear",
                      "description": "@language-menu-offline-map-editor-geometry-actions-clear-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                      "command": "SetOfflineMapEditorGeometry",
                      "commandParameter": null
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-currentextent",
                      "description": "@language-menu-offline-map-editor-geometry-actions-currentextent-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-extent-24.png",
                      "command": "SetActiveTool",
                      "commandParameter": "OfflineMapEditorCurrentExtentTool"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-polygon",
                      "description": "@language-menu-offline-map-editor-geometry-actions-polygon-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                      "command": "SetActiveTool",
                      "commandParameter": "OfflineMapEditorPolygonTool"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-freehandpolygon",
                      "description": "@language-menu-offline-map-editor-geometry-actions-freehandpolygon-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                      "command": "SetActiveTool",
                      "commandParameter": "OfflineMapEditorFreehandPolygonTool"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-circle",
                      "description": "@language-menu-offline-map-editor-geometry-actions-circle-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                      "command": "SetActiveTool",
                      "commandParameter": "OfflineMapEditorCircleTool"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-ellipse",
                      "description": "@language-menu-offline-map-editor-geometry-actions-ellipse-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                      "command": "SetActiveTool",
                      "commandParameter": "OfflineMapEditorEllipseTool"
                    },
                    {
                      "text": "@language-menu-offline-map-editor-geometry-actions-rectangle",
                      "description": "@language-menu-offline-map-editor-geometry-actions-rectangle-desc",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                      "command": "SetActiveTool",
                      "commandParameter": "OfflineMapEditorRectangleTool"
                    }
                  ]
                }
              ]
            },
            "require": "Mapping/modules/OfflineMaps/Editor/OfflineMapEditorViewModel"
          },
          {
            "id": "OfflineMapEditorBasemapLevelsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.editor.basemap.OfflineMapEditorBasemapLevelsViewModel",
            "configuration": {},
            "require": "Mapping/modules/OfflineMaps/Editor/Basemap/OfflineMapEditorBasemapLevelsViewModel"
          },
          {
            "id": "SyncStatusViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.offlineMaps.sync.SyncStatusViewModel",
            "configuration": {},
            "require": "Mapping/modules/OfflineMaps/Sync/SyncStatusViewModel"
          }
        ]
      },
      {
        "moduleName": "OptimizerIntegration",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.optimizerIntegration.OptimizerIntegrationModule",
        "configuration": {
          "enabled": false,
          "userName": "DefaultUser",
          "dataRelayUri": "http://localhost/Geocortex/Optimizer/Rest/DataRelay/LogData.ashx?f=json"
        }
      },
      {
        "moduleName": "OverviewMap",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapModule",
        "configuration": {},
        "views": [
          {
            "id": "OverviewMapView",
            "viewModelId": "OverviewMapViewModel",
            "markup": "Mapping/modules/OverviewMap/OverviewMapView.html",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapView",
            "region": "BottomRightMapRegion",
            "visible": true,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "OverviewMapViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.overviewMap.OverviewMapViewModel",
            "configuration": {
              "isEnabled": true,
              "openByDefault": false,
              "extentScaleFactor": 5,
              "visibleExtentColour": "#00FFFF"
            }
          }
        ]
      },
      {
        "moduleName": "PlotCoordinates",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.PlotCoordinatesModule",
        "configuration": {
          "behaviors": [
            {
              "name": "CoordinateListItemClickedBehavior",
              "commands": [
                "ClearDefaultHighlights",
                "PanToFeature",
                "HighlightFeatureDefault"
              ]
            },
            {
              "name": "CoordinateEditingStartedBehavior",
              "commands": [
                "ActivatePlotCoordinatesView",
                "OpenDataFrame"
              ]
            },
            {
              "name": "CancelEditCoordinateBehavior",
              "commands": [
                "ClearActiveTool"
              ]
            },
            {
              "name": "CoordinateEditedBehavior",
              "event": "CoordinateEditedEvent",
              "commands": [
                "ClearDefaultHighlights",
                "ActivatePlotCoordinatesView",
                "OpenDataFrame"
              ]
            },
            {
              "name": "CoordinateDeletedBehavior",
              "event": "CoordinateDeletedEvent",
              "commands": [
                "ClearDefaultHighlights"
              ]
            },
            {
              "name": "CoordinateAddedBehavior",
              "event": "CoordinateAddedEvent",
              "commands": [
                "ClearDefaultHighlights",
                "ActivatePlotCoordinatesView",
                "OpenDataFrame"
              ]
            }
          ],
          "tools": [
            {
              "name": "PlotCoordinatesTool",
              "iconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
              "command": "PlotCoordinates",
              "drawMode": "POINT",
              "tooltip": "@language-plotcoordinates-tool-tooltip",
              "hideOnDisable": false,
              "isSticky": true,
              "statusText": "@language-plotcoordinates-tool-status",
              "keyboardStatusText": "@language-plotcoordinates-tool-status-keyboard"
            }
          ]
        },
        "views": [
          {
            "id": "PlotCoordinatesView",
            "viewModelId": "PlotCoordinatesViewModel",
            "title": "@language-plotcoordinates-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.PlotCoordinatesView",
            "markup": "Mapping/modules/PlotCoordinates/PlotCoordinatesView.html",
            "region": "CoordinatesContainerRegion",
            "iconUri": "Resources/Images/Icons/Toolbar/coordinates-map-tip-24.png",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "CoordinateActionsView",
            "viewModelId": "CoordinateActionsViewModel",
            "visible": false,
            "iconUri": "Resources/Images/Icons/menu-24.png",
            "markup": "Mapping/modules/PlotCoordinates/CoordinateActions/CoordinateActionsView.html",
            "title": "@language-plotcoordinates-coordinate-actions-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.CoordinateActionsView",
            "region": "CoordinatesContainerRegion",
            "configuration": {
              "menuId": "CoordinateActions"
            },
            "require": "Mapping/modules/PlotCoordinates/CoordinateActions/CoordinateActionsView"
          }
        ],
        "viewModels": [
          {
            "id": "PlotCoordinatesViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.PlotCoordinatesViewModel",
            "configuration": {
              "isEnabled": true,
              "coordinatesModel": "MapCoordinatesModel"
            }
          },
          {
            "id": "CoordinateActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.plotCoordinates.CoordinateActionsViewModel",
            "configuration": {},
            "require": "Mapping/modules/PlotCoordinates/CoordinateActions/CoordinateActionsViewModel"
          }
        ]
      },
      {
        "moduleName": "Printing",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingModule",
        "configuration": {},
        "views": [
          {
            "id": "PrintingView",
            "viewModelId": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingView",
            "markup": "Mapping/modules/Printing/PrintingView.html",
            "region": "DataRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
            "title": "@language-print-map",
            "configuration": {}
          },
          {
            "id": "UnlockedPrintPreviewView",
            "viewModelId": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.UnlockedPrintPreviewView",
            "markup": "Mapping/modules/Printing/UnlockedPrintPreviewView.html",
            "region": "CenterRegion",
            "visible": false
          }
        ],
        "viewModels": [
          {
            "id": "PrintingViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.printing.PrintingViewModel",
            "configuration": {
              "previewBackgroundColor": [
                207,
                76,
                64,
                0.3
              ],
              "previewBorderColor": [
                128,
                128,
                128
              ],
              "previewBorderThickness": 2,
              "previewCenterImageUrl": "Resources/Images/center-cross-32.png"
            }
          }
        ]
      },
      {
        "moduleName": "Project",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectModule",
        "configuration": {},
        "views": [
          {
            "id": "ProjectActionsView",
            "viewModelId": "ProjectActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectActionsView",
            "markup": "Mapping/modules/Project/ProjectActionsView.html",
            "title": "@language-project-actions-title",
            "region": "ProjectContainerRegion",
            "visible": false,
            "configuration": {
              "menuId": "ProjectActions"
            }
          },
          {
            "id": "ProjectEditorView",
            "viewModelId": "ProjectEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectEditorView",
            "markup": "Mapping/modules/Project/ProjectEditorView.html",
            "title": "@language-project-editor-title",
            "region": "ProjectContainerRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "ProjectStatusView",
            "viewModelId": "ProjectStatusViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectStatusView",
            "markup": "Mapping/modules/Project/ProjectStatusView.html",
            "title": "@language-project-status-title",
            "region": "ModalWindowRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "ProjectsView",
            "viewModelId": "ProjectsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectsView",
            "markup": "Mapping/modules/Project/ProjectsView.html",
            "title": "@language-project-projects-title",
            "region": "ProjectContainerRegion",
            "visible": false,
            "configuration": {}
          },
          {
            "id": "ShareProjectView",
            "viewModelId": "ShareProjectViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ShareProjectView",
            "markup": "Mapping/modules/Project/ShareProjectView.html",
            "title": "@language-project-share-title",
            "region": "ProjectContainerRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ProjectActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.menus.MenuViewModel",
            "configuration": {},
            "require": "geocortex/infrastructure/menus/MenuViewModel"
          },
          {
            "id": "ProjectEditorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectEditorViewModel",
            "configuration": {}
          },
          {
            "id": "ProjectStatusViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectStatusViewModel",
            "configuration": {
              "showUrlOnSave": true
            }
          },
          {
            "id": "ProjectsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ProjectsViewModel",
            "configuration": {
              "defaultThumbnail": "Resources/Images/Icons/map-no-preview-70x50.png",
              "minimumFilterDelay": 300
            }
          },
          {
            "id": "ShareProjectViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.project.ShareProjectViewModel",
            "configuration": {
              "confirmSharedPublicly": true,
              "showGuestLinks": true
            }
          }
        ]
      },
      {
        "moduleName": "Prompt",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.prompt.PromptModule",
        "configuration": {
          "promptRegion": "ModalWindowRegion"
        }
      },
      {
        "moduleName": "Pushpins",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.pushpins.PushpinsModule",
        "configuration": {
          "pushpinsEnabled": true,
          "pushpinMarkerUri": "Resources/Images/Pushpins/map-marker-red-32.png",
          "pushpinMarkerWidth": 32,
          "pushpinMarkerHeight": 32,
          "offsetX": 0,
          "offsetY": 0,
          "behaviors": [
            {
              "name": "PushpinClickedBehavior",
              "commands": [
                "ShowMapTip"
              ]
            }
          ],
          "pushpinsRemainVisible": true
        }
      },
      {
        "moduleName": "QueryBuilder",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.QueryBuilderModule",
        "configuration": {
          "queryStatusRegion": "QueryBuilderStatusRegion",
          "filterStatusRegion": "FilterBuilderStatusRegion"
        },
        "views": [
          {
            "id": "SimpleQueryBuilderView",
            "viewModelId": "SimpleQueryBuilderViewModel",
            "iconUri": "Resources/Images/Icons/query-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-simple-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd HH:mm:ss}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "query",
              "numberOfSuggestions": 10,
              "defaultLogicalOperator": "and"
            }
          },
          {
            "id": "SimpleFilterBuilderView",
            "viewModelId": "SimpleFilterBuilderViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderView",
            "markup": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-simple-filter-title",
            "configuration": {
              "wildcard": "%",
              "dateQueryFormat": "DATE '{0:yyyy-MM-dd HH:mm:ss}'",
              "textComparisonQueryFormat": "LOWER({0}) LIKE LOWER({1})",
              "numberToTextComparisonQueryFormat": "CAST({0} AS VARCHAR(50)) LIKE '{1}'",
              "doesNotContainQueryFormat": "LOWER({0}) NOT LIKE LOWER({1})",
              "allowDrawingsAsSpatialFilter": true,
              "queryProviderSupportsTimeOfDay": false,
              "mode": "filter",
              "numberOfSuggestions": 10,
              "defaultLogicalOperator": "and"
            },
            "require": "Mapping/modules/QueryBuilder/SimpleQueryBuilderView"
          },
          {
            "id": "ListQueriesView",
            "viewModelId": "ListQueriesViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {}
          },
          {
            "id": "ListFiltersView",
            "viewModelId": "ListFiltersViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-filters-title",
            "configuration": {}
          },
          {
            "id": "SaveQueryView",
            "viewModelId": "SaveQueryViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {}
          },
          {
            "id": "SaveFilterView",
            "viewModelId": "SaveFilterViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-filters-title",
            "configuration": {}
          },
          {
            "id": "QueryActionsView",
            "viewModelId": "QueryActionsViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView.html",
            "region": "SimpleQueryBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {
              "menuId": "QueryActions"
            }
          },
          {
            "id": "FilterActionsView",
            "viewModelId": "FilterActionsViewModel",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsView",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView",
            "markup": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsView.html",
            "region": "SimpleFilterBuilderContainerRegion",
            "visible": false,
            "title": "@language-querybuilder-saved-queries-title",
            "configuration": {
              "menuId": "FilterActions"
            }
          }
        ],
        "viewModels": [
          {
            "id": "SimpleQueryBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {},
            "require": "Mapping/modules/QueryBuilder/SimpleQueryBuilderViewModel"
          },
          {
            "id": "SimpleFilterBuilderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SimpleQueryBuilderViewModel",
            "configuration": {},
            "require": "Mapping/modules/QueryBuilder/SimpleQueryBuilderViewModel"
          },
          {
            "id": "ListQueriesViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesViewModel",
            "configuration": {
              "mode": "query"
            }
          },
          {
            "id": "ListFiltersViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.ListQueriesViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/ListQueriesViewModel",
            "configuration": {
              "mode": "filter"
            }
          },
          {
            "id": "SaveQueryViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryViewModel",
            "configuration": {
              "mode": "query"
            }
          },
          {
            "id": "SaveFilterViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.SaveQueryViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/SaveQueryViewModel",
            "configuration": {
              "mode": "filter"
            }
          },
          {
            "id": "QueryActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsViewModel",
            "configuration": {
              "mode": "query"
            }
          },
          {
            "id": "FilterActionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.queryBuilder.SavedQueries.QueryActionsViewModel",
            "require": "Mapping/modules/QueryBuilder/SavedQueries/QueryActionsViewModel",
            "configuration": {
              "mode": "filter"
            }
          }
        ]
      },
      {
        "moduleName": "Reporting",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ReportingModule",
        "configuration": {},
        "views": [
          {
            "id": "ListReportsView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ListReportsView",
            "markup": "Mapping/modules/Reporting/ListReportsView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "ListReportsViewModel",
            "region": "DataFrameResultsContainerRegion",
            "title": "@language-list-reports-title",
            "visible": false
          },
          {
            "id": "RunReportView",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.RunReportView",
            "markup": "Mapping/modules/Reporting/RunReportView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/reports-24.png",
            "viewModelId": "RunReportViewModel",
            "region": "DataFrameResultsContainerRegion",
            "title": "@language-run-report-title",
            "visible": false
          }
        ],
        "viewModels": [
          {
            "id": "ListReportsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.ListReportsViewModel"
          },
          {
            "id": "RunReportViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.reporting.RunReportViewModel"
          }
        ]
      },
      {
        "moduleName": "Results",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsModule",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "resultMappings": {
            "Identify": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "MapTip": [
              "ShowMapTipResults"
            ],
            "Measurement": [],
            "Workflow": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "Search": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "QueryBuilder": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ],
            "ClusterFeatures": [
              "ShowMapTipResults",
              "SetCollectionOfInterest"
            ],
            "Coordinates": [],
            "Selection": [
              "ShowResultsList",
              "SetCollectionOfInterest"
            ]
          },
          "behaviors": [
            {
              "name": "ResultsListFeatureClickedBehavior",
              "event": "ResultsListFeatureClickedEvent",
              "commands": [
                "ShowFeatureDetails"
              ]
            },
            {
              "name": "FeatureSetClickedEventBehavior",
              "event": "FeatureSetClickedEvent",
              "commands": [
                "ShowFeatureSetResultsView"
              ]
            },
            {
              "name": "ResultsListFeaturePressedBehavior",
              "event": "ResultsListFeaturePressedEvent",
              "commands": [
                "ShowFeatureDetails"
              ]
            },
            {
              "name": "ResultsTableFeatureClickedBehavior",
              "event": "ResultsTableFeatureClickedEvent",
              "commands": [
                "ZoomToFeature"
              ]
            },
            {
              "name": "ResultsTableFeaturePressedBehavior",
              "event": "ResultsTableFeaturePressedEvent",
              "commands": [
                "ZoomToFeature"
              ]
            },
            {
              "name": "ResultsListFeatureHoverBehavior",
              "event": "ResultsListFeatureHoveredEvent",
              "commands": [
                "FocusFeature"
              ]
            },
            {
              "name": "ResultsListFeatureHoverEndBehavior",
              "event": "ResultsListFeatureHoverEndedEvent",
              "commands": [
                "ClearFeatureFocus"
              ]
            },
            {
              "name": "ResultsTableFeatureHoverBehavior",
              "event": "ResultsTableFeatureHoveredEvent",
              "commands": [
                "FocusFeature"
              ]
            },
            {
              "name": "ResultsTableFeatureHoverEndBehavior",
              "event": "ResultsTableFeatureHoverEndedEvent",
              "commands": [
                "ClearFeatureFocus"
              ]
            },
            {
              "name": "ResultsViewClosedBehavior",
              "event": "ResultsViewClosedEvent",
              "commands": []
            },
            {
              "name": "ResultsViewCollapsedBehavior",
              "event": "ResultsViewCollapsedEvent",
              "commands": []
            }
          ],
          "customSearchSuggestions": {
            "Identify": "",
            "MapTip": "",
            "Workflow": "",
            "Search": "",
            "QueryBuilder": ""
          },
          "showInvisibleAttributesOnExport": false,
          "includeDataLinksOnExport": true,
          "enableDataLinkObjectIdFieldOnExport": true,
          "gcxObjectIdFieldNameOnExport": "GCX_OID"
        },
        "views": [
          {
            "id": "ResultsListView",
            "viewModelId": "ResultsListViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetCollectionResultsView",
            "markup": "Mapping/infrastructure/results/FeatureSetCollectionResultsView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-common-results",
            "description": "@language-common-query-results",
            "configuration": {
              "automaticDrillInDelay": 300
            }
          },
          {
            "id": "FeatureSetResultsView",
            "viewModelId": "FeatureSetResultsViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetResultsView",
            "markup": "Mapping/infrastructure/results/FeatureSetResultsView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-common-results",
            "description": "@language-common-query-results",
            "configuration": {
              "contentField": "description",
              "isPaged": true,
              "pageSize": 50,
              "showBackButton": true,
              "highlightMode": "none"
            }
          },
          {
            "id": "ResultsTableView",
            "viewModelId": "ResultsTableViewModel",
            "libraryId": "Mapping.Infrastructure",
            "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.ResultsTableView",
            "markup": "Mapping/infrastructure/results/ResultsTableView.html",
            "region": "ResultsRegion",
            "visible": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ResultsListViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetCollectionResultsViewModel",
            "configuration": {}
          },
          {
            "id": "FeatureSetResultsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.FeatureSetResultsViewModel",
            "configuration": {}
          },
          {
            "id": "ResultsTableViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.results.TabbedResultsViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Scalebar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarModule",
        "configuration": {},
        "views": [
          {
            "id": "ScalebarView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarView",
            "markup": "Mapping/modules/Scalebar/ScalebarView.html",
            "region": "BottomLeftMapRegion",
            "configuration": {
              "scalebarStyle": "ruler",
              "scalebarUnit": "metric",
              "showBackground": true
            },
            "viewModelId": "ScalebarViewModel"
          },
          {
            "id": "ScaleInputBoxButtonView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScaleInputBoxButtonView",
            "markup": "Mapping/modules/Scalebar/ScaleInputBoxButtonView.html",
            "region": "BottomLeftMapRegion",
            "viewModelId": "ScalebarViewModel"
          },
          {
            "id": "ScaleInputBoxView",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScaleInputBoxView",
            "markup": "Mapping/modules/Scalebar/ScaleInputBoxView.html",
            "region": "BottomLeftMapRegion",
            "viewModelId": "ScalebarViewModel"
          }
        ],
        "viewModels": [
          {
            "id": "ScalebarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.scalebar.ScalebarViewModel",
            "configuration": {
              "scaleInputBox": {
                "isEnabled": true,
                "openByDefault": false
              }
            }
          }
        ]
      },
      {
        "moduleName": "Search",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchModule",
        "configuration": {
          "autoLoadSiteGeocoders": true,
          "searchProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.LayerQuerySearchProvider",
              "enable": true
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.InstantSearchProvider",
              "name": "@language-search-instant-provider-name",
              "description": "@language-search-instant-provider-description",
              "enable": true,
              "configuration": {
                "maxResults": 50,
                "maxHints": 5,
                "precedenceToNearbyResults": true,
                "enableSearchHints": true
              }
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchTableSearchProvider",
              "enable": true
            }
          ]
        },
        "views": [],
        "viewModels": [
          {
            "id": "SearchViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchViewModel",
            "configuration": {
              "enableSearchRefinement": true,
              "delayConsecutiveSearches": false,
              "minimumPopulateDelay": 300,
              "minimumPrefixLength": 3
            }
          }
        ]
      },
      {
        "moduleName": "Selection",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.selection.SelectionModule",
        "configuration": {
          "resultsListStatusRegion": "DataFrameResultsStatusRegion",
          "resultsTableStatusRegion": "ResultsStatusRegion",
          "menus": [
            {
              "id": "CombineResultsActions",
              "description": "@language-menu-combine-results-desc",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-add-24.png",
                  "text": "@language-menu-combine-results-union",
                  "description": "@language-menu-combine-results-union-desc",
                  "command": "CombineResultsInteractive",
                  "commandParameter": {
                    "mode": "union",
                    "currentResults": "{{context}}"
                  }
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-subtract-24.png",
                  "text": "@language-menu-combine-results-subtract",
                  "description": "@language-menu-combine-results-subtract-desc",
                  "command": "CombineResultsInteractive",
                  "commandParameter": {
                    "mode": "subtract",
                    "currentResults": "{{context}}"
                  }
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-intersect-24.png",
                  "text": "@language-menu-combine-results-intersect",
                  "description": "@language-menu-combine-results-intersect-desc",
                  "command": "CombineResultsInteractive",
                  "commandParameter": {
                    "mode": "intersect",
                    "currentResults": "{{context}}"
                  }
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "SaveSelectionView",
            "viewModelId": "SaveSelectionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.SaveSelectionView",
            "markup": "Mapping/modules/Selection/SaveSelectionView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-saved-results-save-title",
            "configuration": {}
          },
          {
            "id": "ListSelectionsView",
            "viewModelId": "ListSelectionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.ListSelectionsView",
            "markup": "Mapping/modules/Selection/ListSelectionsView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-saved-results-browse-title",
            "configuration": {}
          },
          {
            "id": "CombineResultsView",
            "viewModelId": "CombineResultsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.CombineResultsView",
            "markup": "Mapping/modules/Selection/CombineResultsView.html",
            "region": "DataFrameResultsContainerRegion",
            "visible": false,
            "title": "@language-saved-results-combine-title",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "SaveSelectionViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.SaveSelectionViewModel",
            "configuration": {}
          },
          {
            "id": "ListSelectionsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.ListSelectionsViewModel",
            "configuration": {
              "isPaged": true,
              "pageSize": 10
            }
          },
          {
            "id": "CombineResultsViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.selection.CombineResultsViewModel",
            "configuration": {
              "isPaged": true,
              "pageSize": 10
            }
          }
        ]
      },
      {
        "moduleName": "Share",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareModule",
        "configuration": {
          "shareOptions": [
            {
              "id": "facebook",
              "displayName": "Facebook",
              "url": "https://www.facebook.com/sharer/sharer.php?u={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/facebook-24.png"
            },
            {
              "id": "twitter",
              "displayName": "Twitter",
              "url": "https://twitter.com/intent/tweet?text={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/twitter-24.png"
            },
            {
              "id": "linkedin",
              "displayName": "Linkedin",
              "url": "https://www.linkedin.com/shareArticle?ro=false&mini=true&url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/linkedin-24.png"
            },
            {
              "id": "googleplus",
              "displayName": "Google+",
              "url": "https://plus.google.com/up/?continue=https://plus.google.com/share?url={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/google-plus-24.png"
            },
            {
              "id": "email",
              "displayName": "Email",
              "url": "mailto:?body={ViewerUrl}",
              "iconUri": "Resources/Images/Icons/Toolbar/contact-24.png"
            }
          ]
        },
        "views": [
          {
            "id": "ShareView",
            "viewModelId": "ShareViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareView",
            "markup": "Mapping/modules/Share/ShareView.html",
            "region": "ModalWindowRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/share-24.png",
            "title": "@language-common-share",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ShareViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.share.ShareViewModel",
            "configuration": {
              "shareOptionIds": []
            }
          }
        ]
      },
      {
        "moduleName": "SharingLink",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.sharingLink.SharingLinkModule",
        "configuration": {
          "sharingLinkProviders": [
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerThemes.LayerThemeSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerList.LayersSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ExtentSharingLinkProvider",
              "generate": false
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.CenterSharingLinkProvider"
            },
            {
              "type": "geocortex.essentialsHtmlViewer.mapping.modules.map.ScaleSharingLinkProvider"
            }
          ]
        }
      },
      {
        "moduleName": "Shells",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.shells.ShellModule",
        "configuration": {
          "css": [
            "Resources/Styles/Custom/common.css",
            "Resources/Styles/Custom/Desktop.css",
            "{ViewerConfigUri}../../Styles/Custom/common.css",
            "{ViewerConfigUri}../../Styles/Custom/Desktop.css"
          ],
          "homePanelVisible": true
        },
        "views": [
          {
            "id": "ShellView",
            "viewModelId": "ShellViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellView",
            "markup": "Mapping/modules/Shells/DesktopShellView.html",
            "region": "ApplicationRegion",
            "configuration": {},
            "require": "Mapping/modules/Shells/LargeShellView"
          },
          {
            "id": "DataFrameViewContainer",
            "viewModelId": "DataFrameViewContainerViewModel",
            "visible": false,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "LeftPanelRegion",
            "configuration": {},
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "ModalViewContainerView",
            "viewModelId": "ModalViewContainerViewModel",
            "visible": false,
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerView",
            "libraryId": "Framework.UI",
            "markup": "Mapping/modules/Shells/PopupModalView.html",
            "region": "ModalWindowPlaceholderRegion",
            "configuration": {},
            "require": "geocortex/framework-ui/ViewContainer/ViewContainerView"
          },
          {
            "id": "ResultsRegionViewContainerView",
            "viewModelId": "ResultsRegionViewContainerViewModel",
            "visible": false,
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "BottomPanelRegion",
            "configuration": {
              "resizableParentRegion": "BottomPanelRegion",
              "resizeY": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "FeatureEditingContainerView",
            "viewModelId": "FeatureEditingContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/edit-24.png",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "libraryId": "Mapping.Infrastructure",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "LayerDataContainerView",
            "viewModelId": "LayerDataContainerViewModel",
            "visible": true,
            "isManaged": true,
            "title": "@language-common-layer-data",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "HomePanelContainerView",
            "viewModelId": "HomePanelContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-welcome",
            "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "CollaborationContainerView",
            "viewModelId": "CollaborationContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-collaboration",
            "iconUri": "Resources/Images/Icons/collaboration-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          },
          {
            "id": "DataFrameResultsContainerView",
            "viewModelId": "DataFrameResultsContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/Toolbar/search-results-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "SimpleQueryBuilderContainerView",
            "viewModelId": "SimpleQueryBuilderViewContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-querybuilder-simple-title",
            "iconUri": "Resources/Images/Icons/query-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "SimpleFilterBuilderContainerView",
            "viewModelId": "SimpleFilterBuilderViewContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-querybuilder-simple-filter-title",
            "iconUri": "Resources/Images/Icons/filter-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "OfflineMapsContainerView",
            "viewModelId": "OfflineMapsContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-offline-maps-list-title",
            "iconUri": "Resources/Images/Icons/map-offline-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "ProjectContainerView",
            "viewModelId": "ProjectContainerViewModel",
            "visible": false,
            "isManaged": false,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/Toolbar/open-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "CoordinatesContainerView",
            "viewModelId": "CoordinatesContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/Toolbar/coordinates-map-tip-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "TimeSliderContainerView",
            "viewModelId": "TimeSliderContainerViewModel",
            "visible": false,
            "isManaged": true,
            "title": "@language-common-results",
            "iconUri": "Resources/Images/Icons/Toolbar/hourglass-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelView"
          },
          {
            "id": "LayerAdditionContainerView",
            "viewModelId": "LayerAdditionContainerViewModel",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-add-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            },
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelView"
          },
          {
            "id": "DrawingOrderContainerView",
            "viewModelId": "DrawingOrderContainerViewModel",
            "visible": false,
            "isManaged": false,
            "iconUri": "Resources/Images/Icons/Toolbar/layers-add-24.png",
            "libraryId": "Mapping.Infrastructure",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelView",
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelView",
            "markup": "Mapping/infrastructure/ui/components/SmartPanel/SmartPanelView.html",
            "region": "DataRegion",
            "configuration": {
              "resizableParentRegion": "LeftPanelRegion",
              "resizeX": true
            }
          }
        ],
        "viewModels": [
          {
            "id": "ShellViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.shells.LargeShellViewModel",
            "configuration": {
              "minWidth": 200,
              "maxWidth": 500,
              "dataFrameWidth": 350,
              "dataFrameOpenByDefault": true,
              "bottomRegionHeight": 500
            },
            "require": "Mapping/modules/Shells/LargeShellViewModel"
          },
          {
            "id": "DataFrameViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "defaultViewIcon": "Resources/Images/Icons/Toolbar/search-results-24.png",
              "containerRegionName": "DataRegion",
              "headerIsVisible": false,
              "showHeaderForStandaloneViews": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "resizeX": true,
              "footerInsertMarkup": "Framework.UI/geocortex/framework/ui/ViewContainer/ButtonTabStripView.html",
              "footerInsertType": "geocortex.framework.ui.ViewContainer.ButtonTabStripView",
              "ordering": {
                "HomePanelContainerView": 0,
                "DataFrameResultsContainerView": 1
              }
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "DataFrameResultsContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "DataFrameResultsContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "ResultsListView": 0
              },
              "statusRegionName": "DataFrameResultsStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "LayerDataContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "LayerDataContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "LayerListView": 0,
                "MapServiceActionsView": 1,
                "LayerActionsView": 2,
                "LegendView": 3,
                "FeatureLayerListView": 4,
                "FeatureLayerDetailsView": 5
              }
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "HomePanelContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "HomePanelContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": false,
              "showHostedViews": true,
              "ordering": {
                "InfoView": 0
              }
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "CollaborationContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "CollaborationContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "ordering": {
                "CollaborationView": 0,
                "AfterActionView": 1
              }
            }
          },
          {
            "id": "FeatureEditingContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "FeatureEditingContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "ordering": {
                "TemplatePickerView": 0,
                "AttributeEditorView": 1
              }
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "ModalViewContainerViewModel",
            "type": "geocortex.framework.ui.ViewContainer.ViewContainerViewModel",
            "libraryId": "Framework.UI",
            "configuration": {
              "containerRegionName": "ModalWindowRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "closeOnEscape": false
            },
            "require": "geocortex/framework-ui/ViewContainer/ViewContainerViewModel"
          },
          {
            "id": "ResultsRegionViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "ResultsRegion",
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showMaximizeButton": true,
              "resizeY": true,
              "ordering": {
                "ResultsTableView": 0
              },
              "statusRegionName": "ResultsStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "SimpleQueryBuilderViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "SimpleQueryBuilderContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "QueryStatusMessageView": 0,
                "SimpleQueryBuilderView": 1,
                "ListQueriesView": 2,
                "QueryActionsView": 3,
                "SaveQueryView": 4
              },
              "statusRegionName": "QueryBuilderStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "SimpleFilterBuilderViewContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "SimpleFilterBuilderContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "FilterStatusMessageView": 0,
                "SimpleFilterBuilderView": 1,
                "ListFiltersView": 2,
                "FilterActionsView": 3,
                "SaveFilterView": 4
              },
              "statusRegionName": "FilterBuilderStatusRegion"
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "OfflineMapsContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "OfflineMapsContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": false,
              "showBackButtonAsX": false,
              "showHostedViews": true,
              "ordering": {
                "ListOfflineMapsView": 0
              }
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "ProjectContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "ProjectContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {}
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "CoordinatesContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "CoordinatesContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "PlotCoordinatesView": 0,
                "CoordinateActionsView": 1
              }
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "TimeSliderContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.SmartPanel.SmartPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "TimeSliderContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": true,
              "ordering": {
                "TimeSliderSettingsView": 0
              }
            },
            "require": "geocortex/infrastructure/ui/components/SmartPanel/SmartPanelViewModel"
          },
          {
            "id": "LayerAdditionContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "LayerAdditionContainerRegion",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "ordering": {
                "AddLayerDialogView": 0,
                "ServiceConnectionsDialogView": 1,
                "MapServicesDialogView": 2,
                "SubLayersDialogView": 3
              }
            },
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelViewModel"
          },
          {
            "id": "DrawingOrderContainerViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.WizardPanel.WizardPanelViewModel",
            "require": "geocortex/infrastructure/ui/components/WizardPanel/WizardPanelViewModel",
            "libraryId": "Mapping.Infrastructure",
            "configuration": {
              "containerRegionName": "DrawingOrderContainerRegion",
              "containerManagedTitle": "@language-layerDrawingOrder-tabTitle",
              "headerIsVisible": true,
              "backButtonOnRootView": true,
              "showBackButtonAsX": true,
              "showHostedViews": false,
              "ordering": {
                "LayerGroupsView": 0,
                "ServiceDrawingOrderView": 1,
                "LayerDrawingOrderView": 2
              }
            }
          }
        ],
        "require": "Mapping/modules/Shells/ShellModule"
      },
      {
        "moduleName": "Site",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.site.SiteModule",
        "configuration": {
          "siteUri": "http://gis-map2.admin.tnrd.bc.ca/Geocortex/Essentials/REST/sites/TNRDMap"
        },
        "views": [
          {
            "id": "ServiceLayersFailureView",
            "viewModelId": "ServiceLayersFailureViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureView",
            "markup": "Mapping/modules/Site/ServiceLayersFailureView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          },
          {
            "id": "SignInErrorView",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.SignInErrorView",
            "markup": "Mapping/modules/Site/SignInErrorView.html",
            "region": "ModalWindowRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "ServiceLayersFailureViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.site.ServiceLayersFailureViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "Snapping",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.SnappingModule",
        "configuration": {
          "threshold": "25",
          "radiusFillColor": "#ffffff",
          "radiusFillOpacity": ".2",
          "radiusBorderColor": "#000000",
          "radiusBorderSize": "1",
          "pointColor": "#ffffff",
          "pointSize": "5",
          "toggleKey": 70,
          "supportedDrawModes": [
            "POINT",
            "MULTI_POINT",
            "LINE",
            "POLYGON",
            "POLYLINE"
          ],
          "snappingProvider": {
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.EsriSnappingProvider",
            "configuration": {
              "graphicsLayers": [
                "Drawings_measurement",
                "Drawings"
              ]
            }
          },
          "behaviors": [
            {
              "name": "SelectLayersForSnappingActivatedBehavior",
              "event": "SelectLayersForSnappingActivatedEvent",
              "commands": [
                "OpenDataFrame"
              ]
            },
            {
              "name": "SelectLayersForSnappingDeactivatedBehavior",
              "event": "SelectLayersForSnappingDeactivatedEvent",
              "commands": [
                "CloseDataFrame"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "SnappingLayerSelectorView",
            "viewModelId": "SnappingLayerSelectorViewModel",
            "title": "@language-snapping-layer-selector-title",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.SnappingLayerSelectorView",
            "markup": "Mapping/modules/LayerSelector/LayerSelectorView.html",
            "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
            "region": "DataRegion",
            "visible": false,
            "isManaged": false,
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "SnappingLayerSelectorViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.snapping.SnappingLayerSelectorViewModel"
          }
        ]
      },
      {
        "moduleName": "Status",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusModule",
        "configuration": {
          "busyIcon": "Resources/Images/loader-small.gif"
        },
        "views": [
          {
            "id": "StatusIndicatorView",
            "viewModelId": null,
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusIndicatorView",
            "markup": "Mapping/modules/Status/StatusIndicatorView.html",
            "region": "BottomCenterMapRegion",
            "configuration": {}
          }
        ],
        "viewModels": []
      },
      {
        "moduleName": "TabbedToolbar",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarModule",
        "configuration": {
          "isEnabled": true,
          "transientElements": [
            {
              "stateName": "MeasureState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "MeasurementToolControlRegion",
              "items": [
                {
                  "id": "MeasureSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "MeasureSelectSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                }
              ]
            },
            {
              "stateName": "MeasureState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "MeasurementToolControlRegion"
            },
            {
              "stateName": "DrawMarkupState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "MarkupEditRegion",
              "items": [
                {
                  "id": "MarkupSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "MarkupSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "HideMarkupStyleView"
                  }
                }
              ]
            },
            {
              "stateName": "EditingMarkupState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "EditControlRegion",
              "items": [
                {
                  "id": "EditingSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "EditingSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                },
                {
                  "id": "ChangeMarkupStyle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/styles-24.png",
                  "toggleStateName": "MarkupStyleToggleState",
                  "toggleOn": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "CreateMarkupStyleView"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-markup-change-markup-style",
                    "tooltip": "@language-toolbar-markup-change-markup-style-tooltip",
                    "command": "HideMarkupStyleView"
                  }
                }
              ]
            },
            {
              "stateName": "EditingMeasurementMarkupState",
              "widgetId": "MeasurementToolTransientToolbar",
              "region": "EditControlRegion"
            },
            {
              "stateName": "IdentifyState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "IdentifyToolControlRegion",
              "items": [
                {
                  "id": "IdentifyBufferingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "toggleStateName": "IdentifyBufferingState",
                  "toggleOn": {
                    "name": "@language-toolbar-buffering-enable",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-buffering-disable",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  }
                },
                {
                  "id": "IdentifyCombineModeUnionToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-add-24.png",
                  "toggleStateName": "IdentifyCombineModeUnionState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-union-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "union",
                    "tooltip": "@language-toolbar-identify-combine-union-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-union-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-union-disable-tooltip"
                  }
                },
                {
                  "id": "IdentifyCombineModeSubtractToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-subtract-24.png",
                  "toggleStateName": "IdentifyCombineModeSubtractState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-subtract-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "subtract",
                    "tooltip": "@language-toolbar-identify-combine-subtract-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-subtract-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-subtract-disable-tooltip"
                  }
                },
                {
                  "id": "ChangeIdentifiableLayers",
                  "type": "button",
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
                }
              ]
            },
            {
              "stateName": "FindDataState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "FindDataControlRegion",
              "items": [
                {
                  "id": "FindDataBufferingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/buffer-identify-24.png",
                  "toggleStateName": "FindDataBufferingState",
                  "toggleOn": {
                    "name": "@language-toolbar-buffering-enable",
                    "command": "ActivateBufferingAndDisplayOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-buffering-disable",
                    "command": "DeactivateBufferingAndDismissOptions",
                    "commandParameter": "Identify",
                    "tooltip": "@language-toolbar-buffering-alt-disable"
                  }
                },
                {
                  "id": "FindDataCombineModeUnionToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-add-24.png",
                  "toggleStateName": "FindDataCombineModeUnionState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-union-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "union",
                    "tooltip": "@language-toolbar-identify-combine-union-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-union-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-union-disable-tooltip"
                  }
                },
                {
                  "id": "FindDataCombineModeSubtractToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/refine-subtract-24.png",
                  "toggleStateName": "FindDataCombineModeSubtractState",
                  "toggleOn": {
                    "name": "@language-toolbar-identify-combine-subtract-enable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "subtract",
                    "tooltip": "@language-toolbar-identify-combine-subtract-enable-tooltip"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-identify-combine-subtract-disable",
                    "command": "SetIdentifyCombineMode",
                    "commandParameter": "replace",
                    "tooltip": "@language-toolbar-identify-combine-subtract-disable-tooltip"
                  }
                },
                {
                  "id": "FindDataSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "FindDataSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                },
                {
                  "id": "ChangeIdentifiableLayers",
                  "type": "button",
                  "name": "@language-toolbar-identify-layers-change",
                  "tooltip": "@language-toolbar-identify-layers-change-tooltip",
                  "command": "ActivateSelectLayersForIdentify",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-filtered-24.png"
                }
              ]
            },
            {
              "stateName": "FeaturePlacementPointGraphicState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "CreateNewFeatureControlRegion",
              "items": [
                {
                  "id": "CreateFeatureWithGeolocation",
                  "type": "button",
                  "name": "@language-toolbar-editing-create-new-feature-geolocation",
                  "tooltip": "@language-toolbar-editing-create-new-feature-geolocation-tooltip",
                  "command": "Geolocate",
                  "commandParameter": {
                    "toolFriendly": true
                  },
                  "iconUri": "Resources/Images/Icons/Toolbar/geolocate.png"
                }
              ]
            },
            {
              "stateName": "FeaturePlacementGraphicState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "CreateNewFeatureControlRegion",
              "items": [
                {
                  "id": "FeatureEditingSnappingToggle",
                  "type": "toggleButton",
                  "tooltip": "@language-toolbar-identify-snapping-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "FeatureEditingSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                }
              ]
            },
            {
              "stateName": "PlotCoordinatesState",
              "widgetId": "TabbedToolbarTransientBase",
              "region": "PlotCoordinatesToolControlRegion",
              "items": [
                {
                  "id": "PlotCoordinatesSnappingToggle",
                  "type": "toggleButton",
                  "iconUri": "Resources/Images/Icons/Toolbar/snapping-24.png",
                  "toggleStateName": "SnappingState",
                  "toggleOn": {
                    "name": "@language-toolbar-snapping-enable",
                    "command": "ActivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-enable"
                  },
                  "toggleOff": {
                    "name": "@language-toolbar-snapping-disable",
                    "command": "DeactivateSnapping",
                    "tooltip": "@language-toolbar-snapping-alt-disable"
                  }
                },
                {
                  "id": "PlotCoordinatesSnappingLayersButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-snapping-24.png",
                  "command": "ActivateSelectLayersForSnapping",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-snapping-select-layers",
                  "tooltip": "@language-toolbar-snapping-select-layers-tooltip"
                }
              ]
            }
          ],
          "toolbarGroups": [
            {
              "id": "MainTab",
              "type": "toolbarGroup",
              "name": "Getting Around",
              "isDefault": false,
              "items": [
                {
                  "id": "HomeButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/home-24.png",
                  "command": "ActivateHomePanel",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-home-sub",
                  "tooltip": "@language-toolbar-home-tooltip"
                },
                {
                  "id": "ShowLayerListButton",
                  "type": "button",
                  "iconUri": "Resources\\Images\\Icons\\Toolbar\\layers-24.png",
                  "command": "ShowLayerList",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "Show Layers",
                  "tooltip": "@language-toolbar-show-layerlist-desc"
                },
                {
                  "id": "BookmarksButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/bookmark-24.png",
                  "command": "ShowBookmarks",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-bookmark",
                  "tooltip": "@language-toolbar-bookmark-open"
                },
                {
                  "id": "PanButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/pan-24.png",
                  "command": "ClearActiveTool",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-navigation-pan",
                  "tooltip": "@language-toolbar-navigation-pan-tooltip"
                },
                {
                  "id": "ZoomInTool",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-in-24.png",
                  "command": "ZoomToExtent",
                  "drawMode": "EXTENT",
                  "name": "@language-toolbar-navigation-zoom-in",
                  "tooltip": "@language-toolbar-navigation-zoom-in-tooltip",
                  "hideOnDisable": false,
                  "isSticky": true,
                  "statusText": "@language-toolbar-navigation-zoom-in-desc"
                },
                {
                  "id": "ZoomOutTool",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-out-24.png",
                  "command": "ZoomOutToExtent",
                  "drawMode": "EXTENT",
                  "name": "@language-toolbar-navigation-zoom-out",
                  "tooltip": "@language-toolbar-navigation-zoom-out-tooltip",
                  "hideOnDisable": false,
                  "isSticky": true,
                  "statusText": "@language-toolbar-navigation-zoom-out-desc"
                },
                {
                  "id": "FullExtentButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/zoom-full-24.png",
                  "command": "ZoomToFullExtent",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-navigation-full-extent",
                  "tooltip": "@language-toolbar-navigation-full-extent-tooltip"
                },
                {
                  "id": "SuM4fkZ3",
                  "type": "toolbarGroup",
                  "name": "@language-toolbar-tasks-identify",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "PointIdentifyTool-Navigation",
                      "type": "tool",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/feature-location-24.png",
                      "command": "Identify",
                      "drawMode": "RECTANGLE",
                      "name": "What's Here?",
                      "tooltip": "@language-toolbar-identify-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-point-desc"
                    },
                    {
                      "id": "CXoSn2Ll",
                      "type": "tool",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/identify-polygon-32.png",
                      "command": "Identify",
                      "drawMode": "POLYGON",
                      "name": "What's in this area?",
                      "tooltip": "@language-toolbar-identify-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": false,
                      "statusText": "@language-toolbar-identify-polygon-desc"
                    }
                  ]
                }
              ]
            },
            {
              "id": "MapTab",
              "type": "toolbarGroup",
              "name": "Search ",
              "isDefault": false,
              "items": [
                {
                  "id": "uDgduE1t",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/house-number-32.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchParcelByAddress",
                  "hideOnDisable": false,
                  "name": "Address",
                  "tooltip": "Search for parcel by address"
                },
                {
                  "id": "zfwsMiQL",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/parcel-id-32.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchParcelByPid",
                  "hideOnDisable": false,
                  "name": "PID",
                  "tooltip": "Search for parcel by Land Titles property identifier (PID)"
                },
                {
                  "id": "8qrIMEMm",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/house-pointer-32.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchLegal",
                  "hideOnDisable": false,
                  "name": "Legal Description",
                  "tooltip": "Search for parcel by legal description"
                },
                {
                  "id": "TTvXwZNf",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/SearchByFolio.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchParcelByFolio",
                  "hideOnDisable": false,
                  "name": "Folio",
                  "tooltip": "Search for parcel by BC Assessment Authority jurisdiction and roll number"
                },
                {
                  "id": "0IBym8s5",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/map-default-24.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchPlace",
                  "hideOnDisable": false,
                  "name": "Community",
                  "tooltip": "Search for a place by name"
                },
                {
                  "id": "5ux8KJZD",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/SearchByRoad.png",
                  "command": "RunWorkflowById",
                  "commandParameter": "SearchRoad",
                  "hideOnDisable": false,
                  "name": "Road",
                  "tooltip": "Search for a road by name"
                },
                {
                  "id": "ShowSimpleQueryBuilderButton",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/query-24.png",
                  "command": "ActivateView",
                  "commandParameter": "SimpleQueryBuilderView",
                  "hideOnDisable": false,
                  "name": "@language-querybuilder-simple-title",
                  "tooltip": "@language-querybuilder-simple-tooltip"
                }
              ]
            },
            {
              "id": "TasksGroup",
              "type": "toolbarGroup",
              "name": "@language-toolbar-group-tasks",
              "isDefault": false,
              "items": [
                {
                  "id": "r5eZaOAA",
                  "type": "toolbarGroup",
                  "name": "Output",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "meW8smvc",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/reports-32.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "PropertyReport",
                      "hideOnDisable": false,
                      "name": "Property Report",
                      "tooltip": "Create a property report"
                    },
                    {
                      "id": "PrintMapButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/print-24.png",
                      "command": "PrintMap",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-print-map",
                      "tooltip": "@language-toolbar-tasks-print-map-tooltip"
                    },
                    {
                      "id": "ExportMapButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/share-map-24.png",
                      "command": "ShowExportMapDialog",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-export-map",
                      "tooltip": "@language-toolbar-tasks-export-map-tooltip"
                    },
                    {
                      "id": "cyw4TFOy",
                      "type": "button",
                      "iconUri": "{ViewerConfigUri}../../../Resources/Images/ExtractLayers.png",
                      "command": "RunWorkflowById",
                      "commandParameter": "ExtractLayers",
                      "hideOnDisable": false,
                      "name": "Extract layers",
                      "tooltip": "@language-extract-data"
                    }
                  ]
                },
                {
                  "id": "TqlPKXVm",
                  "type": "toolbarGroup",
                  "name": "Input",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "UploadDataButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/upload-24.png",
                      "command": "UploadData",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-upload-data",
                      "tooltip": "@language-toolbar-tasks-upload-data-tooltip"
                    },
                    {
                      "id": "AddLayersButton",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/layers-add-24.png",
                      "command": "AddMapLayerInteractive",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-tasks-add-layers",
                      "tooltip": "@language-toolbar-tasks-add-layers-tooltip"
                    }
                  ]
                }
              ]
            },
            {
              "id": "rEWAyZfP",
              "type": "toolbarGroup",
              "name": "Draw & Measure",
              "isDefault": false,
              "items": [
                {
                  "id": "DrawingTools",
                  "type": "flyout",
                  "name": "@language-toolbar-markup-drawing-tools",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "PointMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-point-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-point",
                      "tooltip": "@language-toolbar-markup-point-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-point-desc"
                    },
                    {
                      "id": "TextMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-text-24.png",
                      "command": "AddTextMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-text",
                      "tooltip": "@language-toolbar-markup-text-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-text-desc"
                    },
                    {
                      "id": "PolylineMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polyline-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POLYLINE",
                      "name": "@language-toolbar-markup-polyline",
                      "tooltip": "@language-toolbar-markup-polyline-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-polyline-desc"
                    },
                    {
                      "id": "FreehandMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-freehand-24.png",
                      "command": "AddMarkup",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-toolbar-markup-freehand",
                      "tooltip": "@language-toolbar-markup-freehand-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-freehand-desc"
                    },
                    {
                      "id": "FreehandMarkupPolygonTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-freehand-24.png",
                      "command": "AddMarkup",
                      "drawMode": "FREEHAND_POLYGON",
                      "name": "@language-toolbar-markup-freehand-polygon",
                      "tooltip": "@language-toolbar-markup-freehand-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-freehand-polygon-desc"
                    },
                    {
                      "id": "EllipseMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-ellipse-24.png",
                      "command": "AddMarkup",
                      "drawMode": "ELLIPSE",
                      "name": "@language-toolbar-markup-ellipse",
                      "tooltip": "@language-toolbar-markup-ellipse-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-ellipse-desc"
                    },
                    {
                      "id": "CircleMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-circle-24.png",
                      "command": "AddMarkup",
                      "drawMode": "CIRCLE",
                      "name": "@language-toolbar-markup-circle",
                      "tooltip": "@language-toolbar-markup-circle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-circle-desc"
                    },
                    {
                      "id": "PolygonMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-polygon-24.png",
                      "command": "AddMarkup",
                      "drawMode": "POLYGON",
                      "name": "@language-toolbar-markup-polygon",
                      "tooltip": "@language-toolbar-markup-polygon-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-polygon-desc"
                    },
                    {
                      "id": "RectangleMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-rectangle-24.png",
                      "command": "AddMarkup",
                      "drawMode": "RECTANGLE",
                      "name": "@language-toolbar-markup-rectangle",
                      "tooltip": "@language-toolbar-markup-rectangle-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-rectangle-desc"
                    }
                  ]
                },
                {
                  "id": "MarkupEditRegion",
                  "type": "region",
                  "regionName": "MarkupEditRegion"
                },
                {
                  "id": "AdvancedMeasurementTools",
                  "type": "flyout",
                  "name": "@language-toolbar-group-measurement-tools",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "MeasureLineTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-polyline-24.png",
                      "command": "MeasureDistance",
                      "drawMode": "POLYLINE",
                      "name": "@language-measurement-measure-line-tool-name",
                      "tooltip": "@language-measurement-measure-line-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-line-tool-status"
                    },
                    {
                      "id": "MeasureFreehandLineTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-freehand-24.png",
                      "command": "MeasureDistance",
                      "drawMode": "FREEHAND_POLYLINE",
                      "name": "@language-measurement-measure-freehand-line-tool-name",
                      "tooltip": "@language-measurement-measure-freehand-line-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-freehand-line-tool-status"
                    },
                    {
                      "id": "MeasureFreehandPolygonTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-polygon-freehand-24.png",
                      "command": "MeasureArea",
                      "drawMode": "FREEHAND_POLYGON",
                      "name": "@language-measurement-measure-freehand-polygon-tool-name",
                      "tooltip": "@language-measurement-measure-freehand-polygon-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-freehand-polygon-tool-status"
                    },
                    {
                      "id": "MeasureEllipseTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-ellipse-24.png",
                      "command": "MeasureArea",
                      "drawMode": "ELLIPSE",
                      "name": "@language-measurement-measure-ellipse-tool-name",
                      "tooltip": "@language-measurement-measure-ellipse-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-ellipse-tool-status"
                    },
                    {
                      "id": "MeasureCircleTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-circle-24.png",
                      "command": "MeasureArea",
                      "drawMode": "CIRCLE",
                      "name": "@language-measurement-measure-circle-tool-name",
                      "tooltip": "@language-measurement-measure-circle-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-circle-tool-status"
                    },
                    {
                      "id": "MeasurePolygonTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-polygon-24.png",
                      "command": "MeasureArea",
                      "drawMode": "POLYGON",
                      "name": "@language-measurement-measure-polygon-tool-name",
                      "tooltip": "@language-measurement-measure-polygon-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-polygon-tool-status"
                    },
                    {
                      "id": "MeasureRectangleTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/measure-rectangle-24.png",
                      "command": "MeasureArea",
                      "drawMode": "RECTANGLE",
                      "name": "@language-measurement-measure-rectangle-tool-name",
                      "tooltip": "@language-measurement-measure-rectangle-tool-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-measurement-measure-rectangle-tool-status"
                    }
                  ]
                },
                {
                  "id": "MeasurementToolControlRegion",
                  "type": "region",
                  "regionName": "MeasurementToolControlRegion"
                },
                {
                  "id": "EditingFlyout",
                  "type": "flyout",
                  "name": "@language-toolbar-group-editing",
                  "layout": "Large",
                  "items": [
                    {
                      "id": "EditMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/draw-edit-24.png",
                      "command": "EditMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-edit",
                      "tooltip": "@language-toolbar-markup-edit-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-edit-desc"
                    },
                    {
                      "id": "DeleteMarkupTool",
                      "type": "tool",
                      "iconUri": "Resources/Images/Icons/Toolbar/erase-24.png",
                      "command": "DeleteMarkup",
                      "drawMode": "POINT",
                      "name": "@language-toolbar-markup-delete",
                      "tooltip": "@language-toolbar-markup-delete-tooltip",
                      "hideOnDisable": false,
                      "isSticky": true,
                      "statusText": "@language-toolbar-markup-delete-desc"
                    },
                    {
                      "id": "ClearMarkup",
                      "type": "button",
                      "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                      "command": "ClearMarkup",
                      "commandParameter": null,
                      "hideOnDisable": false,
                      "name": "@language-toolbar-markup-clear",
                      "tooltip": "@language-toolbar-markup-clear-tooltip"
                    }
                  ]
                },
                {
                  "id": "EditControlRegion",
                  "type": "region",
                  "regionName": "EditControlRegion"
                },
                {
                  "id": "ExportMarkup",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/draw-extract-24.png",
                  "command": "ExportMarkupLayer",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "@language-toolbar-markup-export",
                  "tooltip": "@language-toolbar-markup-export-tooltip"
                },
                {
                  "id": "PlotCoordinatesToggleButton",
                  "type": "toggleButton",
                  "name": "@language-plotcoordinates-tool-name",
                  "tooltip": "@language-plotcoordinates-tool-tooltip",
                  "iconUri": "Resources/Images/Icons/Toolbar/coordinates-add-24.png",
                  "hideOnDisable": false,
                  "toggleStateName": "PlotCoordinatesState",
                  "toggleOn": {
                    "command": "SetActiveTool",
                    "commandParameter": "PlotCoordinatesTool"
                  },
                  "toggleOff": {
                    "command": "ClearActiveTool",
                    "commandParameter": null
                  }
                },
                {
                  "id": "PlotCoordinatesToolControlRegion",
                  "type": "region",
                  "regionName": "PlotCoordinatesToolControlRegion"
                }
              ]
            },
            {
              "id": "HMHJW0eI",
              "type": "toolbarGroup",
              "name": "External Mapping",
              "isDefault": false,
              "items": [
                {
                  "id": "oK7PCZvw",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/kamloops-maps-logo.jpg",
                  "command": "OpenWebPage",
                  "commandParameter": "http://www.kamloops.ca/maps/maps.shtml",
                  "hideOnDisable": true,
                  "name": "Kamloops Maps",
                  "tooltip": "View Kamloops Online Maps"
                },
                {
                  "id": "cDl5nI3T",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/BCA-Icon-32x32.png",
                  "command": "OpenWebPage",
                  "commandParameter": "http://evaluebc.bcassessment.ca/",
                  "hideOnDisable": true,
                  "name": "e-valueBC™",
                  "tooltip": "Compare assessments online"
                },
                {
                  "id": "rhIGGPRI",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/DataBC_logo.JPG",
                  "command": "OpenWebPage",
                  "commandParameter": "http://www2.gov.bc.ca/gov/content/governments/about-the-bc-government/databc/geographic-data-and-services/imapbc",
                  "hideOnDisable": true,
                  "name": "BC Maps",
                  "tooltip": "View iMapBC"
                },
                {
                  "id": "ShowExternalComponentViewButton",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/Google.png",
                  "command": "ShowExternalComponentView",
                  "commandParameter": null,
                  "hideOnDisable": true,
                  "name": "Google Maps™",
                  "tooltip": "View the current location in Google Maps / Street View"
                },
                {
                  "id": "430eswwe",
                  "type": "button",
                  "iconUri": "{ViewerConfigUri}../../../Resources/Images/ALC logo.PNG",
                  "command": "OpenWebPage",
                  "commandParameter": "http://apps.gov.bc.ca/pub/dmf-viewer/?siteid=7180127263339106301",
                  "hideOnDisable": true,
                  "name": "ALR Finder",
                  "tooltip": "Find ALR property"
                }
              ]
            },
            {
              "id": "Me0wB4i0",
              "type": "toolbarGroup",
              "name": "Tempest",
              "isDefault": false,
              "items": [
                {
                  "id": "TempestIdentifyPolygonTool",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
                  "command": "TempestIdentifyPolygon",
                  "drawMode": "EXTENT",
                  "name": "Tempest Selection Tool",
                  "tooltip": "Select properties to view in Tempest.",
                  "hideOnDisable": false,
                  "isSticky": true,
                  "statusText": "Drag the mouse over the map to select parcels."
                },
                {
                  "id": "ClearTempestSelectionTool",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                  "command": "ClearTempestSelection",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "Clear Tempest Selection",
                  "tooltip": "Clear all Tempest selections."
                },
                {
                  "id": "ZyUPrmxJ",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-24.png",
                  "command": "TempestBufferGeometryWF",
                  "drawMode": "POINT",
                  "name": "Buffer Point ",
                  "tooltip": "Select properties to view in Tempest by defining a buffer around a point.",
                  "hideOnDisable": false,
                  "isSticky": false,
                  "statusText": "Click a point on the map."
                },
                {
                  "id": "md0Mn0xy",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-rectangle-24.png",
                  "command": "TempestBufferGeometryWF",
                  "drawMode": "POLYGON",
                  "name": "BufferPolygon",
                  "tooltip": "Select properties to view in Tempest by defining a buffer around a polygon.",
                  "hideOnDisable": false,
                  "isSticky": false,
                  "statusText": "Click points on the map to define a polygon."
                },
                {
                  "id": "Pgn9TdDF",
                  "type": "tool",
                  "iconUri": "Resources/Images/Icons/Toolbar/identify-polyline-24.png",
                  "command": "TempestBufferGeometryWF",
                  "drawMode": "POLYLINE",
                  "name": "Buffer by line",
                  "tooltip": "Select properties to view in Tempest by defining a buffer around a line",
                  "hideOnDisable": false,
                  "isSticky": false,
                  "statusText": "Click points on the map to draw a line."
                },
                {
                  "id": "4CevNSbt",
                  "type": "button",
                  "iconUri": "Resources/Images/Icons/Toolbar/clear-24.png",
                  "command": "ClearTempestBufferMarkup",
                  "commandParameter": null,
                  "hideOnDisable": false,
                  "name": "Clear Buffer Markup",
                  "tooltip": "Clear all Tempest buffer markup."
                }
              ]
            }
          ]
        },
        "viewModels": [
          {
            "id": "TabbedToolbarViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarViewModel",
            "configuration": {
              "toolbarGroupRefs": [
                "MainTab",
                "MapTab",
                "TasksGroup",
                "rEWAyZfP",
                "HMHJW0eI",
                "Me0wB4i0"
              ],
              "toolbarOpenByDefault": true
            },
            "require": "Mapping/modules/Toolbar/TabbedToolbarViewModel"
          },
          {
            "id": "TabbedToolbarTransientViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientViewModel",
            "configuration": {},
            "require": "Mapping/modules/Toolbar/Transients/TransientViewModel"
          }
        ],
        "views": [
          {
            "id": "TabbedToolbarView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": false,
            "title": "@language-toolbar-name",
            "region": "ToolbarRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.TabbedToolbarView",
            "markup": "Mapping/modules/Toolbar/LargeToolbarView.html",
            "configuration": {},
            "require": "Mapping/modules/Toolbar/TabbedToolbarView"
          },
          {
            "id": "TabbedToolbarButtonView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": false,
            "region": "TopRightMapRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarButtonView",
            "markup": "Mapping/modules/Toolbar/ToolbarButtonView.html",
            "require": "Mapping/modules/Toolbar/ToolbarButtonView"
          },
          {
            "id": "ToolbarFlyoutView",
            "viewModelId": "TabbedToolbarViewModel",
            "visible": true,
            "title": "@language-toolbar-multi-tool",
            "region": "ToolbarFlyoutDropdown",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarFlyoutView",
            "markup": "Mapping/modules/Toolbar/Templates/ToolbarFlyoutDropdownTemplate.html",
            "configuration": {},
            "require": "Mapping/modules/Toolbar/ToolbarFlyoutView"
          }
        ],
        "require": "Mapping/modules/Toolbar/TabbedToolbarModule"
      },
      {
        "moduleName": "TimeSlider",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderModule",
        "configuration": {
          "behaviors": [
            {
              "name": "TimeSliderCloseTimelineActionInvokedBehavior",
              "commands": [
                "HideTimeSliderSettings",
                "HideTimeSlider"
              ]
            },
            {
              "name": "TimeSliderMoreSettingsActionInvokedBehavior",
              "commands": [
                "ToggleTimeSliderActions",
                "ShowTimeSliderSettings"
              ]
            }
          ]
        },
        "views": [
          {
            "id": "TimeSliderView",
            "viewModelId": "TimeSliderViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderView",
            "markup": "Mapping/modules/TimeSlider/TimeSliderView.html",
            "region": "TopCenterMapRegion",
            "configuration": {}
          },
          {
            "id": "TimeSliderSettingsView",
            "viewModelId": "TimeSliderViewModel",
            "visible": false,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderSettingsView",
            "markup": "Mapping/modules/TimeSlider/TimeSliderSettingsView.html",
            "region": "TimeSliderContainerRegion",
            "title": "@language-timeslider-settings-view-heading",
            "iconUri": "Resources/Images/Icons/Toolbar/hourglass-24.png",
            "configuration": {},
            "require": "Mapping/modules/TimeSlider/TimeSliderSettingsView"
          }
        ],
        "viewModels": [
          {
            "id": "TimeSliderViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.timeSlider.TimeSliderViewModel",
            "configuration": {
              "enabled": false,
              "animateSlider": false,
              "activateOnStartup": false,
              "maxTimeExtentDisplayUnits": 3,
              "noOfflineSupportStatusMsgTimeoutSecs": 10
            }
          }
        ]
      },
      {
        "moduleName": "Tools",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.tools.ToolsModule",
        "configuration": {
          "showStatusMessages": true,
          "tools": [
            {
              "name": "EditMarkupTool",
              "command": "EditMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/draw-edit-24.png",
              "statusText": "@language-toolbar-markup-edit-desc",
              "keyboardStatusText": "@language-toolbar-markup-edit-desc-keyboard"
            },
            {
              "name": "DeleteMarkupTool",
              "command": "DeleteMarkup",
              "drawMode": "POINT",
              "isSticky": true,
              "iconUri": "Resources/Images/Icons/Toolbar/Erase-24.png",
              "statusText": "@language-toolbar-markup-delete-desc",
              "keyboardStatusText": "@language-toolbar-markup-delete-desc-keyboard"
            }
          ]
        }
      },
      {
        "moduleName": "UploadData",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.UploadDataModule",
        "configuration": {
          "checkJobStatusPeriod": 4000,
          "warnOnFeatureCount": 10000,
          "heatMap": {
            "enabled": false,
            "userCanToggle": true,
            "respectScaleRange": true,
            "gradient": [
              [
                255,
                255,
                255,
                0
              ],
              [
                0,
                0,
                255,
                98
              ],
              [
                255,
                0,
                0,
                139
              ],
              [
                255,
                255,
                0,
                181
              ]
            ],
            "offset": [
              0,
              0.5,
              0.75,
              1
            ],
            "intensity": 25,
            "includeInLegend": true
          },
          "cluster": {
            "enabled": false,
            "userCanToggle": true,
            "radius": 50,
            "maximumFeatures": 100,
            "backgroundColor": [
              0,
              0,
              255
            ],
            "labelColor": [
              255,
              255,
              255
            ]
          }
        },
        "views": [
          {
            "id": "UploadDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/UploadDialogView.html",
            "viewModelId": "UploadDialogViewModel",
            "title": "@language-upload-dialog-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.UploadDialogView",
            "visible": false,
            "require": "Mapping/modules/UploadData/Dialogs/UploadDialogView"
          },
          {
            "id": "TableMappingDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/TableMappingDialogView.html",
            "viewModelId": "TableMappingDialogViewModel",
            "title": "@language-table-mapping-dialog-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableMappingDialogView",
            "visible": false,
            "require": "Mapping/modules/UploadData/Dialogs/TableMappingDialogView"
          },
          {
            "id": "LayerDetailsDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/LayerDetailsDialogView.html",
            "viewModelId": "LayerDetailsDialogViewModel",
            "title": "@language-layer-details-dialog-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.LayerDetailsDialogView",
            "visible": false,
            "require": "Mapping/modules/UploadData/Dialogs/LayerDetailsDialogView"
          },
          {
            "id": "TableRecordResultsDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/TableRecordResultsDialogView.html",
            "viewModelId": "TableRecordResultsDialogViewModel",
            "title": "@language-table-record-results-dialog-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableRecordResultsDialogView",
            "visible": false,
            "require": "Mapping/modules/UploadData/Dialogs/TableRecordResultsDialogView"
          },
          {
            "id": "SymbolDialogView",
            "markup": "Mapping/modules/UploadData/Dialogs/SymbolDialogView.html",
            "viewModelId": "SymbolDialogViewModel",
            "title": "@language-symbol-dialog-title",
            "region": "ModalWindowRegion",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.SymbolDialogView",
            "visible": false,
            "require": "Mapping/modules/UploadData/Dialogs/SymbolDialogView"
          }
        ],
        "viewModels": [
          {
            "id": "UploadDialogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.UploadDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/UploadDialogViewModel"
          },
          {
            "id": "TableMappingDialogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableMappingDialogViewModel",
            "configuration": {
              "autoDetectionTerms": {
                "xAxis": [
                  "longitude",
                  "long",
                  "lon",
                  "x"
                ],
                "yAxis": [
                  "latitude",
                  "lat",
                  "y"
                ],
                "zAxis": [
                  "altitude",
                  "alt",
                  "z"
                ],
                "featureLabel": [
                  "name",
                  "label",
                  "title"
                ],
                "Address": [
                  "address",
                  "street"
                ],
                "Neighborhood": [
                  "neighborhood"
                ],
                "City": [
                  "city"
                ],
                "Subregion": [
                  "subregion"
                ],
                "Region": [
                  "region",
                  "state",
                  "province"
                ],
                "Postal": [
                  "postal",
                  "zip"
                ],
                "PostalExt": [
                  "postalext",
                  "postal_ext"
                ],
                "CountryCode": [
                  "countrycode",
                  "country_code",
                  "cc"
                ],
                "SearchExtent": [
                  "searchextent",
                  "search_extent"
                ]
              },
              "sourceSpatialReferences": [
                {
                  "label": "WGS 1984 (WKID 4326)",
                  "spatialReference": {
                    "wkid": 4326
                  },
                  "preselected": true
                },
                {
                  "label": "Web Mercator (WKID 102100)",
                  "spatialReference": {
                    "wkid": 102100
                  }
                },
                {
                  "label": "@language-table-mapping-source-spatial-reference-map",
                  "map": true
                },
                {
                  "label": "@language-table-mapping-source-spatial-reference-custom",
                  "custom": true
                }
              ]
            },
            "require": "Mapping/modules/UploadData/Dialogs/TableMappingDialogViewModel"
          },
          {
            "id": "LayerDetailsDialogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.LayerDetailsDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/LayerDetailsDialogViewModel"
          },
          {
            "id": "TableRecordResultsDialogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.TableRecordResultsDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/TableRecordResultsDialogViewModel"
          },
          {
            "id": "SymbolDialogViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.SymbolDialogViewModel",
            "require": "Mapping/modules/UploadData/Dialogs/SymbolDialogViewModel"
          }
        ]
      },
      {
        "moduleName": "User",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserModule",
        "configuration": {},
        "views": [],
        "viewModels": [
          {
            "id": "SignInViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.SignInViewModel",
            "configuration": {
              "linkColor": "#1A72C4"
            }
          },
          {
            "id": "UserInfoViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.User.UserInfoViewModel",
            "configuration": {
              "linkColor": "#1A72C4",
              "textColor": "#333333",
              "backgroundColor": "#FFFFFF"
            }
          }
        ]
      },
      {
        "moduleName": "Visualization",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationModule",
        "configuration": {},
        "views": [
          {
            "id": "VisualizationView",
            "viewModelId": "VisualizationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationView",
            "markup": "Mapping/modules/Visualization/VisualizationView.html",
            "region": "LayerDataContainerRegion",
            "visible": false,
            "iconUri": "Resources/Images/Icons/Toolbar/visualizations-24.png",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "VisualizationViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.visualization.VisualizationViewModel",
            "configuration": {
              "containerRegionName": "LayerVisualizationRegion",
              "defaultDisplayName": "@language-visualization-none",
              "containerTitle": "@language-visualization-title",
              "visualizationProviders": [
                {
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.heatMaps.HeatMapVisualizationProvider",
                  "viewId": "HeatMapsView",
                  "displayName": "@language-heat-maps-name"
                },
                {
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.clusterLayers.ClusterLayerVisualizationProvider",
                  "viewId": "ClusterLayerView",
                  "displayName": "@language-clustering-name"
                },
                {
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.CustomLayerStylesVisualizationProvider",
                  "viewId": "LayerStyleSelectorView",
                  "displayName": "@language-layerstyles-name"
                },
                {
                  "type": "geocortex.essentialsHtmlViewer.mapping.modules.layerStyles.LayerStylesVisualizationProvider",
                  "displayName": "@language-layerstyles-custom-name"
                }
              ]
            }
          }
        ]
      },
      {
        "moduleName": "Workflow",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowModule",
        "configuration": {
          "showTitleInFormBody": false,
          "defaultContainerRegionName": "DataRegion",
          "defaultContainerTitle": "@language-workflow-title",
          "defaultContainerIconUri": "Resources/Images/Icons/Toolbar/workflow-24.png",
          "showCaptureStatusMessages": true,
          "displayResultPickerTemplateComplexity": "complex",
          "startupWorkflows": [],
          "formItems": {},
          "icons": {
            "Resources/Images/ParcelByID.png": "Resources/Images/Icons/Toolbar/house-number-24.png",
            "Resources/Images/ParcelByOwner.png": "Resources/Images/Icons/Toolbar/house-owner-24.png",
            "Resources/Images/ParcelByValue.png": "Resources/Images/Icons/Toolbar/house-value-24.png",
            "Resources/Images/SearchSchools.png": "Resources/Images/Icons/Toolbar/school-24.png"
          },
          "containers": [
            {
              "name": "Default",
              "title": "@language-workflow-title",
              "regionName": "DataRegion"
            },
            {
              "name": "DefaultNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "DataRegion",
              "allowClose": false
            },
            {
              "name": "Extract",
              "title": "@language-common-extract-data",
              "regionName": "DataRegion",
              "iconUri": "Resources/Images/Icons/Toolbar/layers-extract-24.png"
            },
            {
              "name": "ModalWindow",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion"
            },
            {
              "name": "ModalWindowNoCloseButton",
              "title": "@language-workflow-title",
              "regionName": "ModalWindowRegion",
              "allowClose": false
            }
          ]
        },
        "views": [
          {
            "id": "WorkflowListView",
            "viewModelId": "WorkflowViewModel",
            "title": "@language-workflow-workflows",
            "iconUri": "Resources/Images/Icons/arrow-right-alt-24.png",
            "description": "@language-workflow-site-workflows",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowListView",
            "markup": "Mapping/modules/Workflow/WorkflowListView.html",
            "region": "DataRegion",
            "showBackButtonAsX": true,
            "visible": false,
            "configuration": {
              "hideOnClickWorkflow": false
            }
          }
        ],
        "viewModels": [
          {
            "id": "WorkflowViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowViewModel",
            "configuration": {}
          }
        ]
      },
      {
        "moduleName": "ZoomControl",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomControlModule",
        "configuration": {},
        "views": [],
        "viewModels": []
      },
      {
        "moduleName": "SkipLinks",
        "moduleType": "geocortex.essentialsHtmlViewer.mapping.modules.SkipLinks.SkipLinksModule",
        "configuration": {
          "menus": [
            {
              "id": "SkipLinksActions",
              "defaultIconUri": "Resources/Images/Icons/check-24.png",
              "items": [
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/layers-24.png",
                  "text": "@language-skip-links-side-panel",
                  "description": "@language-skip-links-side-panel-desc",
                  "command": "OpenAndFocusDataFrame",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/search-24.png",
                  "text": "@language-skip-links-search",
                  "description": "@language-skip-links-search-desc",
                  "command": "FocusSearch",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "text": "@language-skip-links-i-want-to-menu",
                  "description": "@language-skip-links-i-want-to-desc",
                  "command": "OpenAndFocusIWantToMenu",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/tools-24.png",
                  "text": "@language-skip-links-toolbar",
                  "description": "@language-skip-links-toolbar-desc",
                  "command": "OpenAndFocusToolbar",
                  "commandParameter": null,
                  "hideOnDisable": true
                },
                {
                  "iconUri": "Resources/Images/Icons/Toolbar/map-24.png",
                  "text": "@language-skip-links-map",
                  "description": "@language-skip-links-map-desc",
                  "command": "FocusMap",
                  "commandParameter": null,
                  "hideOnDisable": true
                }
              ]
            }
          ]
        },
        "views": [
          {
            "id": "SkipLinksView",
            "viewModelId": "SkipLinksViewModel",
            "visible": true,
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.SkipLinks.SkipLinksView",
            "markup": "Mapping/modules/SkipLinks/SkipLinksView.html",
            "region": "TopShellRegion",
            "configuration": {}
          }
        ],
        "viewModels": [
          {
            "id": "SkipLinksViewModel",
            "type": "geocortex.essentialsHtmlViewer.mapping.modules.SkipLinks.SkipLinksViewModel",
            "configuration": {}
          }
        ]
      }
    ],
    "widgets": [
      {
        "id": "AutoCompleteBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.AutoCompleteBoxFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/AutoCompleteBoxFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "ColorPickerWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.ColorPickerWidget",
        "markup": "Mapping/infrastructure/ui/components/ColorPicker/ColorPickerWidget.html",
        "configuration": {
          "provider": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.KendoColorPickerProvider"
        }
      },
      {
        "id": "NumericInputWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.NumericInputWidget",
        "markup": "Mapping/infrastructure/ui/components/NumericInput/NumericInputWidget.html",
        "configuration": {
          "provider": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.KendoSliderProvider"
        }
      },
      {
        "id": "CheckBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.CheckBoxFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/CheckBoxFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "ComboBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.ListBoxFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/ComboBoxFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "ContainerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.ContainerFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/ContainerFormItemView.html",
        "configuration": {
          "allowHorizontal": true
        },
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "DatePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.DatePickerFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/DatePickerFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "FilePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.FilePickerFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/FilePickerFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "GroupBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.GroupBoxFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/GroupBoxFormItemView.html",
        "configuration": {
          "allowHorizontal": true
        },
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "HyperlinkFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.HyperlinkFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/HyperlinkFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "ImageFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.FormItemViewBase",
        "markup": "Mapping/infrastructure/ui/components/Forms/ImageFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "LabelFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.FormItemViewBase",
        "markup": "Mapping/infrastructure/ui/components/Forms/LabelFormItem.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "ListBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.ListBoxFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/ListBoxFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "MarkdownFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.MarkdownFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/MarkdownFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "RadioButtonFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.RadioButtonFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/RadioButtonFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "TextAreaFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.TextEntryFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/TextAreaFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "TextBoxFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.TextEntryFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/TextBoxFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "SimpleSymbolWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SimpleSymbolWidget",
        "markup": "Mapping/infrastructure/symbology/widgets/SimpleSymbolWidget.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SimpleSymbolWidgetViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "userSelectedOutlineColor": true,
          "lineWidth": {
            "min": 0,
            "max": 12,
            "value": 2,
            "step": 1
          },
          "markerSize": {
            "min": 1,
            "max": 64,
            "value": 16,
            "step": 1
          }
        }
      },
      {
        "id": "PictureSymbolWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.PictureSymbolWidget",
        "markup": "Mapping/infrastructure/symbology/widgets/PictureSymbolWidget.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.PictureSymbolWidgetViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "imageLibraries": [
            "Shapes",
            "Arrows",
            "A-Z",
            "Basic",
            "Business",
            "Cartographic",
            "Damage",
            "Disasters",
            "General Infrastructure",
            "National Park Service",
            "Numbers",
            "Outdoor Recreation",
            "People Places",
            "Points Of Interest",
            "Safety Health",
            "Transportation",
            "Emergency Management",
            "Local Government",
            "State Government"
          ],
          "imageSize": {
            "min": 16,
            "max": 64,
            "value": 32,
            "step": 1
          }
        }
      },
      {
        "id": "TimePickerFormItem",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.ui.components.Forms.TimePickerFormItemView",
        "markup": "Mapping/infrastructure/ui/components/Forms/TimePickerFormItemView.html",
        "libraryId": "Mapping.Infrastructure"
      },
      {
        "id": "IdentifyOptionsTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyOptionsView",
        "markup": "Mapping/modules/Identify/IdentifyOptionsView.html",
        "viewModelId": "IdentifyOptionsViewModel"
      },
      {
        "id": "TextSymbolWidget",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.TextSymbolWidget",
        "markup": "Mapping/infrastructure/symbology/widgets/TextSymbolWidget.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.TextSymbolWidgetViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "fontFamilies": [
            "Arial",
            "Calibri",
            "Cambria",
            "Century Gothic",
            "Consolas",
            "Courier",
            "Georgia",
            "Impact",
            "Tahoma",
            "Times New Roman",
            "Verdana"
          ],
          "fontSize": {
            "min": 10,
            "max": 72,
            "value": 16,
            "step": 1
          },
          "haloSize": {
            "min": 0,
            "max": 5,
            "value": 2,
            "step": 1
          }
        }
      },
      {
        "id": "MeasurementToolTransientToolbar",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.measurement.MeasurementView",
        "markup": "Mapping/modules/Measurement/MeasurementView.html",
        "viewModelId": "MeasurementViewModel"
      },
      {
        "id": "CompactToolbarTransientBase",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientView",
        "markup": "Mapping/modules/Toolbar/Templates/TransientItems.html",
        "viewModelId": "CompactToolbarTransientViewModel"
      },
      {
        "id": "TabbedToolbarTransientBase",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.transients.TransientView",
        "markup": "Mapping/modules/Toolbar/Templates/TransientItems.html",
        "viewModelId": "TabbedToolbarTransientViewModel"
      },
      {
        "id": "BasemapsListController",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.basemap.BasemapSwitcherViewControllerView",
        "markup": "Mapping/modules/Basemap/BasemapSwitcherViewControllerView.html",
        "configuration": {
          "grid": {
            "numberOfRows": 1,
            "numberOfColumns": 4
          }
        }
      },
      {
        "id": "SymbologySettings",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbologySettingsView",
        "markup": "Mapping/infrastructure/symbology/SymbologySettingsView.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbologySettingsViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "enableImageSelector": true
        }
      },
      {
        "id": "Uploader",
        "type": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.widgets.uploader.UploaderView",
        "markup": "Mapping/modules/UploadData/Widgets/Uploader/UploaderView.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.modules.uploadData.widgets.uploader.UploaderViewModel",
        "libraryId": "Mapping",
        "configuration": {}
      },
      {
        "id": "AttributeSymbologySettings",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.AttributeSymbologySettingsView",
        "markup": "Mapping/infrastructure/symbology/AttributeSymbologySettingsView.html",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.AttributeSymbologySettingsViewModel",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {
          "maxRenderClasses": 12,
          "maxSamples": 1000,
          "defaultPointColor": [
            150,
            150,
            150,
            0.8
          ],
          "defaultPointSize": 12,
          "defaultLineColor": [
            75,
            75,
            75,
            1
          ],
          "defaultLineWidth": 2,
          "defaultFillColor": [
            150,
            150,
            150,
            0.3
          ],
          "transparency": {
            "min": 0,
            "max": 90,
            "value": 10,
            "step": 5
          },
          "classSymbolizationConfig": {
            "enableImageSelector": true,
            "symbologyConfig": {
              "userSelectedOutlineColor": false,
              "adaptOutlineToFill": false,
              "markerSize": {
                "min": 12,
                "max": 64,
                "value": 16,
                "step": 1
              }
            },
            "pictureSymbologyConfig": {}
          }
        }
      },
      {
        "id": "SymbolEditor",
        "type": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbolEditorView",
        "viewModelType": "geocortex.essentialsHtmlViewer.mapping.infrastructure.symbology.SymbolEditorViewModel",
        "markup": "Mapping/infrastructure/symbology/SymbolEditorView.html",
        "libraryId": "Mapping.Infrastructure",
        "configuration": {}
      }
    ],
    "viewerId": "TNRDH5V"
  }
}