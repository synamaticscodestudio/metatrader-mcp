# TplLoadFile (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardHtml ](imtreportdashboardhtml.md "IMTReportDashboardHtml")/ TplLoadFile | [](imtreportdashboardhtml_tplload.md "TplLoad") [](imtreportdashboardhtml_tplloadresource.md "TplLoadResource") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardHtml::TplLoadFile
Load a template from a file.
MTAPIRES IMTReportDashboardHtml::TplLoadFile( LPCWSTR templname // name of a template file )  
---  
Parameters
templname
[in] Name of the file that contains a template.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
After the loading is complete, the template is ready for work at once using the [IMTReportDashboardHtml::TplNext](imtreportdashboardhtml_tplnext.md "TplNext") method.
After a new template has been downloaded, a previous one cannot be used.
Embedded templates are not supported.
More detailed information on templates can be found in the [appropriate section](reportapi_html_template.md "Templates").