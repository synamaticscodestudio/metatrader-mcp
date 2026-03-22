# WriteSafe (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardHtml ](imtreportdashboardhtml.md "IMTReportDashboardHtml")/ WriteSafe | [](imtreportdashboardhtml_writestring.md "WriteString") [](imtreportdashboardhtml_writechart.md "WriteChart") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardHtml::WriteSafe
Output of a line in HTML with HTML service symbols screening.
MTAPIRES IMTReportDashboardHtml::WriteSafe( LPCWSTR html, // output line const UINT flags // output flags )  
---  
Parameters
html
[in] Output line.
flags
[in] Additional output flags transferred using the [IMTReportAPI::EnHtmlSafeFlags](imtreportapi_enum.htm#enhtmlsafeflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
During the output of a line, special symbols used in HTML are replaced with special codes with the use of this method. E.g., "<" is replaced with "&lt;".
Additionally, the flag of the empty line replacement with "&nbsp;" non-breaking space symbol can be turned on using the "flags" parameter. In some cases, it allows avoiding the distortion of the markup.
Maximum size of an HTML part is 128 MB. When reaching the maximum size, the IMTReportDashboardHtml::WriteSafe method returns the [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation") error.