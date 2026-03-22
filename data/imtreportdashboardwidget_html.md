# Html (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Html | [](imtreportdashboardwidget_top.md "Top") [](imtreportdashboardwidget_data.md "Data") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Html
Get data displayed in the widget as HTML content.
IMTReportDashboardHtml* IMTReportDashboardWidget::Html() const  
---  
Return Value
[HTML content object](imtreportdashboardhtml.md "IMTReportDashboardHtml").
IMTReportDashboardWidget::Html
Add data to be displayed in the widget as HTML content.
MTAPIRES IMTReportDashboardWidget::Html( IMTReportDashboardHtml* html // HTML content object )  
---  
Parameters
chart
[in] [HTML content object](imtreportdashboardhtml.md "IMTReportDashboardHtml"). To create an object, use [IMTReportAPI::DashboardHtmlAppend](imtreportapi_dashboardhtmlappend.md "DashboardHtmlAppend")
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
HTML data can be displayed only in the widgets of [IMTReportDashboardWidget::WIDGET_TYPE_HTML](imtreportdashboardwidget_html.md "Html") type.
The same HTML data can be bound to multiple widgets.
One widget cannot use both [IMTDataset](imtdataset.md "IMTDataset") and [IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml") data types.