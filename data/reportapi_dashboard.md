# Dashboard Interfaces (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Dashboard Interfaces | [](imtreportapi_georesolvebatch.md "GeoResolveBatch") [](imtreportdashboardhtml.md "IMTReportDashboardHtml") |
| --- | --- | --- |
| --- | --- |

Interfaces of dashboards
Dashboards form a separate type of reports that allow combining different data and their presentation on one sheet.
A dashboard consists of widgets representing data either in the form of HTML content, or in the form of a diagram and/or table. A set of tabular data ([IMTDataset](imtdataset.md "IMTDataset")) or HTML data ([IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml")) can be used as a data source. The data set is bound to the widget using the [IMTReportDashboardWidget::Html](imtreportdashboardwidget_html.md "Html") or [IMTReportDashboardWidget::Data](imtreportdashboardwidget_data.md "Data") method depending on its type. The same data set can be used in different widgets, for example for displaying the same data in different ways or displaying different parts of data sets in separate tables.
Three interfaces are provided for working with data and widget representation:
  * [IMTDataset](imtdataset.md "IMTDataset") — methods for using a data set for widgets displaying diagrams and tables.
  * [IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml") — methods for working with data for widgets displaying HTML content.
  * [IMTReportDashboardWidget](imtreportdashboardwidget.md "IMTReportDashboardWidget") — methods for working with widget settings: general parameters, alignment and content presentation.
