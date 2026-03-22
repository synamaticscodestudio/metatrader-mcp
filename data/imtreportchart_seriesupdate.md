# SeriesUpdate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ SeriesUpdate | [](imtreportchart_seriesdetach.md "SeriesDetach") [](imtreportchart_seriesshift.md "SeriesShift") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::SeriesUpdate
Change a data series at the specified position of a chart.
MTAPIRES IMTReportChart::SeriesUpdate( const UINT pos, // Series position IMTReportSeries* series // Series object )  
---  
Parameters
pos
[in] Position of a data series, starting with 0.
series
[in] [Data series](imtreportseries.md "IMTReportSeries") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The Update method deletes the previous element (call of [IMTReportSeries::Release](imtreportseries_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by a chart object. Thus, when deleting a chart object ([IMTReportChart::Release](imtreportchart_release.md "Release") call), an earlier inserted object will be automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside a chart object, to be no longer valid. Therefore, call to this pointer (including the case of a chart object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object, because this will lead to a crash during memory release.