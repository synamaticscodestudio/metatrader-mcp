# Charts (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports")/ Charts | [](imtreportapi_htmltplprocess.md "HtmlTplProcess") [](imtreportapi_chartcreate.md "ChartCreate") |
| --- | --- | --- |
| --- | --- |

Charts Functions
The following functions for managing the charts are available:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [ChartCreate](imtreportapi_chartcreate.md "ChartCreate") | Create a chart object. |
| [ChartCreateSeries](imtreportapi_chartcreateseries.md "ChartCreateSeries") | Create a data series object for a chart. |
| [ChartWriteHtml](imtreportapi_chartwritehtml.md "ChartWriteHtml") | Output of a chart to an HTML report. |

  * The functions described in this section work only in case of an HTML report generation ([EnTypes::TYPE_HTML](mtreportinfo.htm#entypes)).
  * The Internet Explorer browser installed together with a manager terminal is used to show HTML reports including SVG charts. Note that SVG charts are supported beginnig from the Internet Explorer 9.  On default, Internet Explorer that is used in the manager terminal works in the 7 version compatibility mode. For the SVG chart to be displayed correctly, force it to use the Internet Explorer 9 compatibility mode. To do it, in the [heading of the HTML page](reportapi_html_charts.htm#html) (within the pair of tags <head></head>), include the following line: <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />

  
---