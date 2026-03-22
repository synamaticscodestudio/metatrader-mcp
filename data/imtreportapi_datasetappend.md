# DatasetAppend (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dataset ](imtreportapi_dataset.md "Data set")/ DatasetAppend | [](imtreportapi_dataset.md "Data set") [](imtreportapi_datasetclear.md "DatasetClear") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DatasetAppend
Add a data set to a dashboard.
IMTDataset* IMTReportAPI::DatasetAppend()  
---  
Return Value
Pointer to the created [IMTDataset](imtdataset.md "IMTDataset") tabular data set object.
Note
The method creates a data set bound to the dashboard and returns a pointer to it. To display a data set, it should be bound to the widget using the [IMTReportDashboardWidget::Data](imtreportdashboardwidget_data.md "Data") method. The widget in turn should be created by the [IMTReportAPI::DashboardWidgetAppend](imtreportapi_dashboardwidgetappend.md "DashboardWidgetAppend") method.
The previous name of the method was DashboardDataAppend