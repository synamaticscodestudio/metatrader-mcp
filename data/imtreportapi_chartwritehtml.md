# ChartWriteHtml (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ Charts ](imtreportapi_chart_management.md "Charts")/ ChartWriteHtml | [](imtreportapi_chartcreateseries.md "ChartCreateSeries") [](imtreportapi_table.md "Tabular Reports Functions") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ChartWriteHtml
Output of a chart to an HTML report.
MTAPIRES IMTReportAPI::ChartWriteHtml( const IMTReportChart* chart // the chart object )  
---  
Parameters
chart
[in] [The chart object](imtreportchart.md "IMTReportChart").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method can be used only for HTML reports ([MTReportInfo::TYPE_HTML)](mtreportinfo.htm#entypes).