# Width (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Width | [](imtreportdashboardwidget_flags.md "Flags") [](imtreportdashboardwidget_height.md "Height") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Width
Get the widget width.
UINT IMTReportDashboardWidget::Width() const  
---  
Return Value
Widget width in pixels.
IMTReportDashboardWidget::Width
Set widget width.
MTAPIRES IMTReportDashboardWidget::Width( const UINT width // width )  
---  
Parameters
width
[in] Widget width in pixels.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To adjust a width according to the dashboard size, use the [IMTReportDashboardWidget::WIDGET_FLAG_AUTO_WIDTH](imtreportdashboardwidget_enum.htm#enwidgetflags) flag.