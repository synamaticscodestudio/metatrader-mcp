# Title (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ Title | [](imtreportdashboardwidget_clear.md "Clear") [](imtreportdashboardwidget_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Title
Get a widget title.
LPCWSTR IMTReportDashboardWidget::Title() const  
---  
Return Value
If successful, it returns a pointer to the string with the chart name. Otherwise, it returns NULL.
IMTReportDashboardWidget::Title
Set a widget title.
MTAPIRES IMTReportDashboardWidget::Title( LPCWSTR title // title )  
---  
Parameters
title
[in] Widget title.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum header length is 256 characters (with the sign of the string end). If a string of a greater length is assigned, it is cut to this length.