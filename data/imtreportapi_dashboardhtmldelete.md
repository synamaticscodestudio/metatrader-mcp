# DashboardHtmlDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardHtmlDelete | [](imtreportapi_dashboardhtmlclear.md "DashboardHtmlClear") [](imtreportapi_dashboardhtmltotal.md "DashboardHtmlTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardHtmlDelete
Delete a set of HTML data from a dashboard.
MTAPIRES IMTReportAPI::DashboardHtmlDelete( const UINT pos // data set position )  
---  
Parameters
pos
[in] Data set position to be removed beginning with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.