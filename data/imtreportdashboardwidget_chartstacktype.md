# ChartStackType (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ ChartStackType | [](imtreportdashboardwidget_type.md "Type") [](imtreportdashboardwidget_chartvalueaxis.md "ChartValueAxis") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::ChartStackType
Get a default accumulation type for the widget diagram.
UINT IMTReportDashboardWidget::ChartStackType() const  
---  
Return Value
The [IMTReportDashboardWidget::EnChartStackType](imtreportdashboardwidget_enum.htm#enchartstacktype) enumeration value.
IMTReportDashboardWidget::ChartStackType
Set a default accumulation type for the widget diagram.
MTAPIRES IMTReportDashboardWidget::ChartStackType( const UINT stack_type // accumulation types )  
---  
Parameters
type
[in] Accumulation type. The [IMTReportDashboardWidget::EnChartStackType](imtreportdashboardwidget_enum.htm#enchartstacktype) enumeration is used to pass it.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method sets only a default value. Diagram accumulation type can be changed in its context menu in the Manager terminal.