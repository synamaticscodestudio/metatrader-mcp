# TplLoadResource (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardHtml ](imtreportdashboardhtml.md "IMTReportDashboardHtml")/ TplLoadResource | [](imtreportdashboardhtml_tplloadfile.md "TplLoadFile") [](imtreportdashboardhtml_tplnext.md "TplNext") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardHtml::TplLoadResource
Load a template from a resource.
MTAPIRES IMTReportDashboardHtml::TplLoadResource( const UINT resid, // resource ID LPCWSTR restype // resource type )  
---  
Parameters
resid
[in] Resource ID in DLL.
restype
[in] Resource type. One of the types predetermined in MSDN (<http://msdn.microsoft.com/en-us/library/ms648009%28VS.85%29.aspx>) or a custom type may be specified as a resource.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
A resource file should necessarily be saved in the Unicode format.
After the loading is complete, the template is ready for work at once using the [IMTReportDashboardHtml::TplNext](imtreportdashboardhtml_tplnext.md "TplNext") method.
After a new template has been downloaded, a previous one cannot be used.
Embedded templates are not supported.
More detailed information on templates can be found in the [appropriate section](reportapi_html_template.md "Templates").
Example:
//--- use a template from a resource if((res=api->TplLoadResource(IDR_ACCOUNTS_GROUPS,RT_HTML))!=MT_RET_OK) return(res);  
---