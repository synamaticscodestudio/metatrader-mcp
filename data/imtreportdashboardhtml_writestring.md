# WriteString (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardHtml ](imtreportdashboardhtml.md "IMTReportDashboardHtml")/ WriteString | [](imtreportdashboardhtml_write.md "Write") [](imtreportdashboardhtml_writesafe.md "WriteSafe") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardHtml::WriteString
Output an unformatted string into an HTML page (faster output).
MTAPIRES IMTReportDashboardHtml::WriteString( LPCWSTR html // output string )  
---  
Parameters
html
[in] Output sting with optional arguments.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Compared to [IMTReportDashboardHtml::Write](imtreportdashboardhtml_write.md "Write"), which formats the output, this method uses less resources.
The maximum size of the HTML part is 128 megabytes. When the maximum size is reached, the IMTReportDashboardHtml::Write method will return the [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation") error.