# DashboardWidth (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardWidth | [](imtreportapi_dashboard.md "Dashboards") [](imtreportapi_dashboardheight.md "DashboardHeight") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardWidth
Get a dashboard width.
UINT IMTReportAPI::DashboardWidth() const  
---  
Return Value
Dashboard width in pixels.
IMTReportAPI::DashboardWidth
Set a dashboard width.
MTAPIRES IMTReportAPI::DashboardWidth( const UINT width // width )  
---  
Parameters
width
[in] Dashboard width in pixels.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If the width is not set, the width of the report workspace in the Manager terminal is used.