# TplLoad (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardHtml ](imtreportdashboardhtml.md "IMTReportDashboardHtml")/ TplLoad | [](imtreportdashboardhtml_writechart.md "WriteChart") [](imtreportdashboardhtml_tplloadfile.md "TplLoadFile") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardHtml::TplLoad
Load a template from the submitted line.
MTAPIRES IMTReportDashboardHtml::TplLoad( LPCWSTR templstr // template line )  
---  
Parameters
templstr
[in] The line describing a template.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
After the loading is complete the template is ready for work at once using the [IMTReportDashboardHtml::TplNext](imtreportdashboardhtml_tplnext.md "TplNext") method.
After a new template has been downloaded, a previous one cannot be used.
Embedded templates are not supported.
More detailed information on templates can be found in the [appropriate section](reportapi_html_template.md "Templates").