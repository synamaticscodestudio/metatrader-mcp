# HtmlTplProcess (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ HTML ](imtreportapi_html_management.md "HTML")/ HtmlTplProcess | [](imtreportapi_htmltplnext.md "HtmlTplNext") [](imtreportapi_chart_management.md "Charts") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HtmlTplProcess
Set the feature of the processing of all tags inside the current macros (predetermined tag).
MTAPIRES IMTReportAPI::HtmlTplProcess( const UINT flags // processing flag )  
---  
Parameters
flags
[in] Flag of a macros processing necessity. Transfered using the [IMTReportAPI::EnTplProcessFlags](imtreportapi_enum.htm#entplprocessflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
In fact, this method dermines the necessity of processing of the macros received by the [IMTReportAPI::HtmlTplNext](imtreportapi_htmltplnext.md "HtmlTplNext") method.