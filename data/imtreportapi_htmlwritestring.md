# HtmlWriteString (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ HTML ](imtreportapi_html_management.md "HTML")/ HtmlWriteString | [](imtreportapi_htmlwrite.md "HtmlWrite") [](imtreportapi_htmlwritesafe.md "HtmlWriteSafe") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HtmlWriteString
Output an unformatted string into an HTML page (faster output).
MTAPIRES IMTReportAPI::HtmlWriteString( LPCWSTR string // output string )  
---  
Parameters
string
[in] Output line.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The maximum size of an HTML report is 128 megabytes. When the maximum size is reached, the IMTReportAPI::HtmlWrite method will return the [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation") error.
Compared to [IMTReportAPI::HtmlWrite](imtreportapi_htmlwrite.md "HtmlWrite"), which formats the output, this method uses less resources.