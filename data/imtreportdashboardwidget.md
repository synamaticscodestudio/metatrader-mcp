# IMTReportDashboardWidget (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces")/ IMTReportDashboardWidget | [](imtreportdashboardhtml_tplprocess.md "TplProcess") [](imtreportdashboardwidget_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget
A widget is a separate type of presentation that can be used on a dashboard. It allows presenting data as HTML content, chart and/or table. The IMTReportDashboardWidget interface allows managing its properties and contents.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Assign](imtreportdashboardwidget_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtreportdashboardwidget_clear.md "Clear") | Clear an object. |
| [Title](imtreportdashboardwidget_title.md "Title") | Get and set a widget title. |
| [Description](imtreportdashboardwidget_description.md "Description") | Get and set widget description. |
| [Type](imtreportdashboardwidget_type.md "Type") | Get and set a default display type for the widget diagram. |
| [ChartStackType](imtreportdashboardwidget_chartstacktype.md "ChartStackType") | Get and set a default accumulation type for the widget diagram. |
| [ChartValueAxis](imtreportdashboardwidget_chartvalueaxis.md "ChartValueAxis") | Get and set the type of the value axis for the chart. |
| [Flags](imtreportdashboardwidget_flags.md "Flags") | Get and set widget display flags. |
| [Width](imtreportdashboardwidget_width.md "Width") | Get and set a widget width. |
| [Height](imtreportdashboardwidget_height.md "Height") | Get and set a widget height. |
| [Left](imtreportdashboardwidget_left.md "Left") | Get and set a widget indent from the left dashboard border. |
| [Top](imtreportdashboardwidget_top.md "Top") | Get and set a widget indent from the upper dashboard border. |
| [Html](imtreportdashboardwidget_html.md "Html") | Get and add data for displaying in the widget as HTML content. |
| [Data](imtreportdashboardwidget_data.md "Data") | Get and add data for displaying in the widget as a diagram and/or table. |
| [DataColumnTitle](imtreportdashboardwidget_datacolumntitle.md "DataColumnTitle") | Get and set an ID of a column containing headers of all the remaining table columns. |
| [DataColumnClear](imtreportdashboardwidget_datacolumnclear.md "DataColumnClear") | Clear the widget columns display rules. |
| [DataColumnAdd](imtreportdashboardwidget_datacolumnadd.md "DataColumnAdd") | Add the column to the display rules. |
| [DataColumnDelete](imtreportdashboardwidget_datacolumndelete.md "DataColumnDelete") | Delete a column from the display rules. |
| [DataColumnShift](imtreportdashboardwidget_datacolumnshift.md "DataColumnShift") | Change column position in the display rules. |
| [DataColumnTotal](imtreportdashboardwidget_datacolumntotal.md "DataColumnTotal") | Get the number of columns in the display rules. |
| [DataColumnNext](imtreportdashboardwidget_datacolumnnext.md "DataColumnNext") | Get column ID by its position in the display rules. |

  * Use [IMTReportAPI::DashboardWidgetAppend](imtreportapi_dashboardwidgetappend.md "DashboardWidgetAppend") to create a widget object.
  * The IMTReportDashboardWidget::DataColumn* method group defines what columns from the [IMTDataset](imtdataset.md "IMTDataset") data set are to be displayed in the dashboard widget, as well as their display order. If the DataColumn array is empty, all columns are displayed in the order they are added to IMTDataset. The values from the first column are to be used as headers.

  
---  
The IMTReportDashboardWidget interface contains the following enumerations:
| Interface | Purpose |
| --- | --- |
| --- | --- |
| [EnWidgetType](imtreportdashboardwidget_enum.htm#enwidgettype) | Types of diagrams and widget contents. |
| [EnChartStackType](imtreportdashboardwidget_enum.htm#enchartstacktype) | Accumulation types for widget diagrams. |
| [EnWidgetFlags](imtreportdashboardwidget_enum.htm#enwidgetflags) | Widget display flags. |