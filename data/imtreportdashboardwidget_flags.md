# Flags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Flags | [](imtreportdashboardwidget_chartvalueaxis.md "ChartValueAxis") [](imtreportdashboardwidget_width.md "Width") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Flags
Get widget display flags.
UINT64 IMTReportDashboardWidget::Flags() const  
---  
Return Value
[IMTReportDashboardWidget::EnWidgetFlags](imtreportdashboardwidget_enum.htm#enwidgetflags) enumeration value.
IMTReportDashboardWidget::Flags
Set widget display flags.
MTAPIRES IMTReportDashboardWidget::Flags( const UINT64 flags // flags )  
---  
Parameters
flags
[in] Widget display flags. The [IMTReportDashboardWidget::EnWidgetFlags](imtreportdashboardwidget_enum.htm#enwidgetflags) enumeration is used to pass them.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.