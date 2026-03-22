# Dashboards (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface")/ Dashboards | [](imtreportapi_tablesummarytotal.md "TableSummaryTotal") [](imtreportapi_dashboardwidth.md "DashboardWidth") |
| --- | --- | --- |
| --- | --- |

Dashboards
Dashboards form a separate type of reports that allow combining different data and their presentation on one sheet.
A dashboard consists of widgets representing data either in the form of HTML content, or in the form of a diagram and/or table. A set of tabular data ([IMTDataset](imtdataset.md "IMTDataset")) or HTML data ([IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml")) can be used as a data source. The data set is bound to the widget using the [IMTReportDashboardWidget::Html](imtreportdashboardwidget_html.md "Html") or [IMTReportDashboardWidget::Data](imtreportdashboardwidget_data.md "Data") method depending on its type. The same data set can be used in different widgets, for example for displaying the same data in different ways or displaying different parts of data sets in separate tables.
The following functions are provided for managing dashboards:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [DashboardWidth](imtreportapi_dashboardwidth.md "DashboardWidth") | Get and set a dashboard width. |
| [DashboardHeight](imtreportapi_dashboardheight.md "DashboardHeight") | Get and set a dashboard height. |
| [DashboardTitle](imtreportapi_dashboardtitle.md "DashboardTitle") | Get and set a dashboard title. |
| [DashboardFlags](imtreportapi_dashboardflags.md "DashboardFlags") | Get and set dashboard display flags. |
| [DashboardHtmlAppend](imtreportapi_dashboardhtmlappend.md "DashboardHtmlAppend") | Add a set of HTML data to a dashboard. |
| [DashboardHtmlClear](imtreportapi_dashboardhtmlclear.md "DashboardHtmlClear") | Delete all dashboard HTML data. |
| [DashboardHtmlDelete](imtreportapi_dashboardhtmldelete.md "DashboardHtmlDelete") | Delete a set of HTML data from a dashboard. |
| [DashboardHtmlTotal](imtreportapi_dashboardhtmltotal.md "DashboardHtmlTotal") | Get a number of HTML data sets in a dashboard. |
| [DashboardHtmlNext](imtreportapi_dashboardhtmlnext.md "DashboardHtmlNext") | Get a description of an HTML data set by index. |
| [DashboardWidgetAppend](imtreportapi_dashboardwidgetappend.md "DashboardWidgetAppend") | Add a widget to a dashboard. |
| [DashboardWidgetClear](imtreportapi_dashboardwidgetclear.md "DashboardWidgetClear") | Remove all widgets from a dashboard. |
| [DashboardWidgetDelete](imtreportapi_dashboardwidgetdelete.md "DashboardWidgetDelete") | Remove a widget from a dashboard. |
| [DashboardWidgetTotal](imtreportapi_dashboardwidgettotal.md "DashboardWidgetTotal") | Get a number of widgets in a dashboard. |
| [DashboardWidgetNext](imtreportapi_dashboardwidgetnext.md "DashboardWidgetNext") | Get a widget description by index. |