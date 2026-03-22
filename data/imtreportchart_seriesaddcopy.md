# SeriesAddCopy (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ SeriesAddCopy | [](imtreportchart_seriesadd.md "SeriesAdd") [](imtreportchart_seriesdelete.md "SeriesDelete") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::SeriesAddCopy
Add a data series copy to a chart.
MTAPIRES IMTReportChart::SeriesAddCopy( const IMTReportSeries* series // Data series object )  
---  
Parameters
series
[in] [Data series](imtreportseries.md "IMTReportSeries") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method creates a copy of the series object and places it at the chart object.
Unlike [IMTReportChart::Add(const IMTReportSeries* series)](imtreportchart_seriesadd.md "SeriesAdd"), calling this method does not set any additional conditions for the control of the series object, but is more resource-intensive, since an additional object is created.