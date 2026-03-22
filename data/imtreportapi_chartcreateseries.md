# ChartCreateSeries (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ Charts ](imtreportapi_chart_management.md "Charts")/ ChartCreateSeries | [](imtreportapi_chartcreate.md "ChartCreate") [](imtreportapi_chartwritehtml.md "ChartWriteHtml") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ChartCreateSeries
Create a data series object for a chart.
IMTReportSeries* IMTReportAPI::ChartCreateSeries()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTReportSeries](imtreportseries.md "IMTReportSeries") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTReporSeries::Release](imtreportseries_release.md "Release") method of this object.