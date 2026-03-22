# SeriesShift (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ SeriesShift | [](imtreportchart_seriesupdate.md "SeriesUpdate") [](imtreportchart_seriestotal.md "SeriesTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::SeriesShift
Change the position of a [data series](imtreportseries.md "IMTReportSeries") in a chart.
MTAPIRES IMTReportChart::SeriesShift( const UINT pos, // Series position const int shift // Shift )  
---  
Parameters
pos
[in] Position of a data series, starting with 0
shift
[in] Shift of a series relative to its current position. A negative value means the shift to the top, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.