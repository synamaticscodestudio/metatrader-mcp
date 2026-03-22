# ChartValueAxis (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ ChartValueAxis | [](imtreportdashboardwidget_chartstacktype.md "ChartStackType") [](imtreportdashboardwidget_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::ChartValueAxis
Receive the type of the value axis for the chart.
UINT IMTReportDashboardWidget::ChartValueAxis() const  
---  
Return Value
A value from the [IMTReportDashboardWidget::EnChartValueAxis](imtreportdashboardwidget_enum.htm#enchartvalueaxis) enumeration.
IMTReportDashboardWidget::ChartValueAxis
Set the type of the value axis for the chart.
MTAPIRES IMTReportDashboardWidget::ChartValueAxis( const UINT value_axis // The axis type )  
---  
Parameters
value_axis
[in] The axis type. The type is passed using the [IMTReportDashboardWidget::EnChartValueAxis](imtreportdashboardwidget_enum.htm#enchartvalueaxis) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.