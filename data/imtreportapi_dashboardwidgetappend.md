# DashboardWidgetAppend (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardWidgetAppend | [](imtreportapi_dashboardhtmlnext.md "DashboardHtmlNext") [](imtreportapi_dashboardwidgetclear.md "DashboardWidgetClear") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardWidgetAppend
Add a widget to a dashboard.
IMTReportDashboardWidget* IMTReportAPI::DashboardWidgetAppend()  
---  
Return Value
Pointer to the created [IMTReportDashboardWidget](imtreportdashboardwidget.md "IMTReportDashboardWidget") widget object.
Note
The method creates a widget bound to the dashboard and returns a pointer to it. To display data in the widget, bind a data set to it using the [IMTReportDashboardWidget::Data](imtreportdashboardwidget_data.md "Data") or [IMTReportDashboardWidget::Html](imtreportdashboardwidget_html.md "Html") method.