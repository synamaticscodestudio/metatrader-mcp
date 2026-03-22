# HtmlTplLoadResource (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ HTML ](imtreportapi_html_management.md "HTML")/ HtmlTplLoadResource | [](imtreportapi_htmltplloadfile.md "HtmlTplLoadFile") [](imtreportapi_htmltplnext.md "HtmlTplNext") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HtmlTplLoadResource
Loading a template from a resource.
MTAPIRES IMTReportAPI::HtmlTplLoadResource( const UINT resid, // Resource ID LPCWSTR restype // Type of a resource )  
---  
Parameters
resid
[in] Resource ID in DLL.
restype
[in] Type of a resource. One of the types predetermined in MSDN (<http://msdn.microsoft.com/en-us/library/ms648009%28VS.85%29.aspx>) or a custom type may be specified as a resource.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A resource file must necessarily be saved in the Unicode format.
After the loading is complete the template is ready for work at once using the [IMTReportAPI::HtmlTplNext](imtreportapi_htmltplnext.md "HtmlTplNext") method.
After a new template has been downloaded, a previous one cannot be used.
Embedded templates are not supported.
Example:
//--- using a template from a resource if((res=api->HtmlTplLoadResource(IDR_ACCOUNTS_GROUPS,RT_HTML))!=MT_RET_OK) return(res);  
---