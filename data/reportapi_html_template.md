# Templates (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Templates | [](reportapi_dashboards.md "Dashboards") [](reportapi_html_charts.md "Charts") |
| --- | --- | --- |
| --- | --- |

Templates
Templates can be used in MetaTrader 5 Report API to form [HTML reports](reportapi_html.md "HTML Reports") and [dashboards](imtreportdashboardhtml.md "IMTReportDashboardHtml"). Templates are described according to the HTML markup rules.
There is no need to use the templates, as HTML can be directly generated from the code using the [IMTReportAPI::HTMLWrite](imtreportapi_htmlwrite.md "HtmlWrite"), [IMTReportAPI::HTMLWriteSafe](imtreportapi_htmlwritesafe.md "HtmlWriteSafe"), [IMTReportDashboardHtml::Write](imtreportdashboardhtml_write.md "Write") and [IMTReportDashboardHtml::WriteSafe](imtreportdashboardhtml_writesafe.md "WriteSafe") functions. But it is not recommended to use such method, as the report formatting and its logics will be mixed in the source code. Further work with such a code will be considerably complicated.
The template allows to describe the look of the report separately from the logics. Further it will allow to easily change the template formatting and the source code will be clear and comprehensible.
Macros
Special macroses cn be used with the templates. The macroses are replaced with the report data when the report is generated.
The macros is a construction having the <mt5:random_name> look. There are two types of macros:
  * Simple ones have the <mt5:.../> look. Simple macros do not contain embedded constructions.
  * Complex ones have the <mt5:...>...</mt5:...> look. Such macros can contain embedded constructions consisting of HTML contents or another macros.

MetaTrader 5 Report API provides two methods of the macroses processing:
  * [IMTReportAPI::HtmlTplNext](imtreportapi_htmltplnext.md "HtmlTplNext") — this method orders to get the next macros in a template.
  * [IMTReportAPI::HtmlTplProcess](imtreportapi_htmltplprocess.md "HtmlTplProcess") — this method orders to process constructions embedded in a complex macros. Using complex macroses is similar to the using of the while cycle. As long as the IMTReportAPI::HtmlProcess method is called for a complex macros, its contents will be processed. When the final </mt5:...> macros is reached, transition to the macros beginning will be performed where the decision concerning its contents processing can be made again. And the counter passed by Report API to the [IMTReportAPI::HtmlTplNext](imtreportapi_htmltplnext.md "HtmlTplNext") method will increase by one.

A similar pair of methods is available for dashboards: [IMTReportDashboardHtml::TplNext ](imtreportdashboardhtml_tplnext.md "TplNext") and [IMTReportDashboardHtml::TplProcess](imtreportdashboardhtml_tplprocess.md "TplProcess").
Using the methods of working with macroses allows to easily process and display the data arrays received from a trade server. [Example of using the macroses](reportapi_html.htm#macro_process) is described in the section devoted to HTML reports.