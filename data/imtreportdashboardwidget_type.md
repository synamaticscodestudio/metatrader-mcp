# Type (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Type | [](imtreportdashboardwidget_description.md "Description") [](imtreportdashboardwidget_chartstacktype.md "ChartStackType") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Type
Get a default display type for the widget diagram.
UINT IMTReportDashboardWidget::Type() const  
---  
Return Value
[IMTReportDashboardWidget::EnWidgetType](imtreportdashboardwidget_enum.htm#enwidgettype) enumeration value.
IMTReportDashboardWidget::Type
Set a default display type for the widget diagram.
MTAPIRES IMTReportDashboardWidget::Type( const UINT type // diagram type )  
---  
Parameters
type
[in] Diagram type. The [IMTReportDashboardWidget::EnWidgetType](imtreportdashboardwidget_enum.htm#enwidgettype) enumeration is used to pass it.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method sets only a default value. Diagram type can be changed in its context menu in the Manager terminal.