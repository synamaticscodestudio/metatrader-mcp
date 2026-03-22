# DashboardHeight (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardHeight | [](imtreportapi_dashboardwidth.md "DashboardWidth") [](imtreportapi_dashboardtitle.md "DashboardTitle") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardHeight
Get dashboard height.
UINT IMTReportAPI::DashboardHeight() const  
---  
Return Value
Dashboard height in pixels.
IMTReportAPI::DashboardHeight
Set dashboard height.
MTAPIRES IMTReportAPI::DashboardHeight( const UINT width // height )  
---  
Parameters
width
[in] Dashboard height in pixels.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If the height is not set, the height of the report workspace in the Manager terminal is used.