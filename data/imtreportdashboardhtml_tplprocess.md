# TplProcess (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardHtml ](imtreportdashboardhtml.md "IMTReportDashboardHtml")/ TplProcess | [](imtreportdashboardhtml_tplnext.md "TplNext") [](imtreportdashboardwidget.md "IMTReportDashboardWidget") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TplProcess
Set the feature of the processing of all tags inside the current macro (predetermined tag).
MTAPIRES IMTReportAPI::TplProcess( const UINT flags // processing flag )  
---  
Parameters
flags
[in] Flag of a macro processing necessity. Transfered using the [IMTReportAPI::EnTplProcessFlags](imtreportapi_enum.htm#entplprocessflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
In fact, this method determines the necessity of processing the macro received by the [IMTReportDashboardHtml::TplNext](imtreportdashboardhtml_tplnext.md "TplNext") method.
More detailed information on templates can be found in the [appropriate section](reportapi_html_template.md "Templates").