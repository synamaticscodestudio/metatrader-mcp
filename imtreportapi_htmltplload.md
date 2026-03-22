# HtmlTplLoad (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ HTML ](imtreportapi_html_management.md "HTML")/ HtmlTplLoad | [](imtreportapi_htmlwritesafe.md "HtmlWriteSafe") [](imtreportapi_htmltplloadfile.md "HtmlTplLoadFile") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HtmlTplLoad
Loading a template from the submitted line.
MTAPIRES IMTReportAPI::HtmlTplLoad( LPCWSTR templstr // Template line )  
---  
Parameters
templstr
[in] The line, describing a template.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After the loading is complete the template is ready for work at once using the [IMTReportAPI::HtmlTplNext](imtreportapi_htmltplnext.md "HtmlTplNext") method.
After a new template has been downloaded, a previous one cannot be used.
Embedded templates are not supported.