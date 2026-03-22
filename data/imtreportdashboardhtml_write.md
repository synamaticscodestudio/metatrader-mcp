# Write (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardHtml ](imtreportdashboardhtml.md "IMTReportDashboardHtml")/ Write | [](imtreportdashboardhtml_clear.md "Clear") [](imtreportdashboardhtml_writestring.md "WriteString") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardHtml::Write
Output of a line with formatting to an HTML page.
MTAPIRES IMTReportDashboardHtml::Write( LPCWSTR format, // output line ... // optional arguments )  
---  
Parameters
format
[in] Output line with optional arguments.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
Maximum size of an HTML part is 128 MB. When reaching the maximum size, the IMTReportDashboardHtml::Write method returns the [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation") error.
Example:
int value=100; Write(L"Text %d",value); // This example will display "Text 100" in the output HTML  
---