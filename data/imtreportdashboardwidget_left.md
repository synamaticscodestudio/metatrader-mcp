# Left (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Left | [](imtreportdashboardwidget_height.md "Height") [](imtreportdashboardwidget_top.md "Top") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Left
Get a widget indent from the left dashboard border.
UINT IMTReportDashboardWidget::Left() const  
---  
Return Value
Offset from the left border in pixels.
IMTReportDashboardWidget::Left
Set a widget indent from the left dashboard border.
MTAPIRES IMTReportDashboardWidget::Left( const UINT left // offset from the left border )  
---  
Parameters
height
[in] Offset from the left border in pixels.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
For dashboard auto left alignment, use the [IMTReportDashboardWidget::WIDGET_FLAG_AUTO_LEFT](imtreportdashboardwidget_enum.htm#enwidgetflags) flag.