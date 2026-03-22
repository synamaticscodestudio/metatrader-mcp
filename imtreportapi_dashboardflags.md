# DashboardFlags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardFlags | [](imtreportapi_dashboardtitle.md "DashboardTitle") [](imtreportapi_dashboardhtmlappend.md "DashboardHtmlAppend") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::Flags
Get dashboard display flags.
UINT64 IMTReportDashboardWidget::Flags() const  
---  
Return Value
[IMTReportDashboardWidget::EnWidgetFlags](imtreportdashboardwidget_enum.htm#enwidgetflags) enumeration value.
Note
The method is reserved for future use.
IMTReportDashboardWidget::Flags
Set dashboard display flags.
MTAPIRES IMTReportDashboardWidget::Flags( const UINT64 flags // flags )  
---  
Parameters
flags
[in] Dashboard display flags. The [IMTReportAPI::EnDashboardFlags](imtreportapi_enum.htm#endashboardflags) enumeration is used to pass them.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is reserved for future use.