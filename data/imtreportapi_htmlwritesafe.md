# HtmlWriteSafe (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ HTML ](imtreportapi_html_management.md "HTML")/ HtmlWriteSafe | [](imtreportapi_htmlwritestring.md "HtmlWriteString") [](imtreportapi_htmltplload.md "HtmlTplLoad") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HtmlWriteSafe
Output of a line in HTML with HTML service symbols screening.
MTAPIRES IMTReportAPI::HtmlWriteSafe( LPCWSTR html, // Output line const UINT flags // Output flags )  
---  
Parameters
html
[in] Output line.
flags
[in] Additional output flags transferred using the [IMTReportAPI::EnHtmlSafeFlags](imtreportapi_enum.htm#enhtmlsafeflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
During the output of a line with the use of this method special symbols used in HTML are replaced with special codes. E.g., "<" is replaced with "&lt;".
Additionally, the flag of the empty line replacement with "&nbsp;" nonbreaking space symbol can be turned on using the "flags" parameter. In some cases that allows to avoid positioning defects.
Maximum allowed size of an HTML report is 128MB. If this limit is reached, IMTReportAPI::HtmlWriteSafe will return error [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation").