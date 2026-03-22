# SeriesDetach (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ SeriesDetach | [](imtreportchart_seriesdelete.md "SeriesDelete") [](imtreportchart_seriesupdate.md "SeriesUpdate") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::SeriesDetach
Detach a data series object from a chart.
IMTReportSeries* IMTReportChart::SeriesDetach( const UINT pos // Series position )  
---  
Parameters
pos
[in] Position of a data series, starting with 0.
Return Value
A pointer to the detached object of the [data series](imtreportseries.md "IMTReportSeries").
Note
This method removes the pointer to the object at the given position of a chart object and returns it. The deleted object is not freed.