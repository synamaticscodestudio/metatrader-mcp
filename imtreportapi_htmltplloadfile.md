# HtmlTplLoadFile (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ HTML ](imtreportapi_html_management.md "HTML")/ HtmlTplLoadFile | [](imtreportapi_htmltplload.md "HtmlTplLoad") [](imtreportapi_htmltplloadresource.md "HtmlTplLoadResource") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HtmlTplLoadFile
Loading a template from a file.
MTAPIRES IMTReportAPI::HtmlTplLoadFile( LPCWSTR templname // name of a template file )  
---  
Parameters
templname
[in] Name of the file that contains a template.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After the loading is complete the template is ready for work at once using the [IMTReportAPI::HtmlTplNext](imtreportapi_htmltplnext.md "HtmlTplNext") method.
After a new template has been downloaded, a previous one cannot be used.
Embedded templates are not supported.