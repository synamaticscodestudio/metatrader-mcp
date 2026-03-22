# ChartCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports") / [ Charts ](imtreportapi_chart_management.md "Charts")/ ChartCreate | [](imtreportapi_chart_management.md "Charts") [](imtreportapi_chartcreateseries.md "ChartCreateSeries") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ChartCreate
Create a chart object.
IMTReportChart* IMTReportAPI::ChartCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTReportChart](imtreportchart.md "IMTReportChart") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTReportChart::Release](imtreportchart_release.md "Release") method of this object.