# DashboardWidgetDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardWidgetDelete | [](imtreportapi_dashboardwidgetclear.md "DashboardWidgetClear") [](imtreportapi_dashboardwidgettotal.md "DashboardWidgetTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardWidgetDelete
Remove a widget from a dashboard.
MTAPIRES IMTReportAPI::DashboardWidgetDelete( const UINT pos // widget position )  
---  
Parameters
pos
[in] Position of a widget that should be removed beginning with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When removing a widget, a data set ([IMTDataset](imtdataset.md "IMTDataset") or [IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml")) bound to it is not deleted.