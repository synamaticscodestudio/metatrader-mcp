# Data (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Data | [](imtreportdashboardwidget_html.md "Html") [](imtreportdashboardwidget_datacolumntitle.md "DataColumnTitle") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Data
Get a data set related to the widget.
IMTDataset* IMTReportDashboardWidget::Data() const  
---  
Return Value
[Data set object](imtdataset.md "IMTDataset").
IMTReportDashboardWidget::Data
Bind a data set to the widget.
MTAPIRES IMTReportDashboardWidget::Data( IMTDataset* data // data set object )  
---  
Parameters
chart
[in] [Data set object](imtdataset.md "IMTDataset"). To create an object, use [IMTReportAPI::DatasetAppend](imtreportapi_datasetappend.md "DatasetAppend").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
A data set is displayed in a widget as diagrams or tables.
The same data set can be bound to different widgets, for example for displaying the same data in different ways or displaying different parts of data sets in separate tables.
Widgets using the [IMTDataset](imtdataset.md "IMTDataset") data set cannot be of [IMTReportDashboardWidget::WIDGET_TYPE_HTML](imtreportdashboardwidget_data.md "Data") type.
One widget cannot use both [IMTDataset](imtdataset.md "IMTDataset") and [IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml") data types.