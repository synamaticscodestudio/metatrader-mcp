# HtmlWrite (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ HTML ](imtreportapi_html_management.md "HTML")/ HtmlWrite | [](imtreportapi_html_management.md "HTML") [](imtreportapi_htmlwritestring.md "HtmlWriteString") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::HtmlWrite
Output of a line with formatting to a HTML page.
MTAPIRES IMTReportAPI::HtmlWrite( LPCWSTR format, // Output line ... // Options arguments )  
---  
Parameters
format
[in] Output line with optional arguments.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Maximum allowed size of an HTML report is 128MB. If this limit is reached, IMTReportAPI::HtmlWrite will return error [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation").
Example:
int value=100; HtmlWrite(L"Text %d",value); // This example will display "Text 100" in the output HTML  
---