# DashboardHtmlAppend (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardHtmlAppend | [](imtreportapi_dashboardflags.md "DashboardFlags") [](imtreportapi_dashboardhtmlclear.md "DashboardHtmlClear") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardHtmlAppend
Add a set of HTML data to a dashboard.
IMTReportDashboardHtml* IMTReportAPI::DashboardHtmlAppend()  
---  
Return Value
Pointer to the created [IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml") HTML data object.
Note
The method creates a data set bound to the dashboard and returns a pointer to it. To display a data set, it should be bound to the widget using the [IMTReportDashboardWidget::Html](imtreportdashboardwidget_html.md "Html") method. The widget in turn should be created by the [IMTReportAPI::DashboardWidgetAppend](imtreportapi_dashboardwidgetappend.md "DashboardWidgetAppend") method.