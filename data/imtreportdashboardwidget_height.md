# Height (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Height | [](imtreportdashboardwidget_width.md "Width") [](imtreportdashboardwidget_left.md "Left") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Height
Get a widget height.
UINT IMTReportDashboardWidget::Height() const  
---  
Return Value
Widget height in pixels.
IMTReportDashboardWidget::Height
Set a widget width.
MTAPIRES IMTReportDashboardWidget::Height( const UINT height // height )  
---  
Parameters
height
[in] Widget height in pixels.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To adjust a height according to the dashboard size, use the [IMTReportDashboardWidget::WIDGET_FLAG_AUTO_HEIGHT](imtreportdashboardwidget_enum.htm#enwidgetflags) flag.