# Top (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Top | [](imtreportdashboardwidget_left.md "Left") [](imtreportdashboardwidget_html.md "Html") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Top
Get a widget indent from the upper dashboard border.
UINT IMTReportDashboardWidget::Top() const  
---  
Return Value
Offset from the upper border in pixels.
IMTReportDashboardWidget::Top
Set a widget indent from the upper dashboard border.
MTAPIRES IMTReportDashboardWidget::Top( const UINT left // offset from the right border )  
---  
Parameters
height
[in] Offset from the upper border in pixels.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
For dashboard auto top alignment, use the [IMTReportDashboardWidget::WIDGET_FLAG_AUTO_TOP](imtreportdashboardwidget_enum.htm#enwidgetflags) flag.