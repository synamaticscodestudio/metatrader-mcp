# SeriesAdd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ SeriesAdd | [](imtreportchart_seriesclear.md "SeriesClear") [](imtreportchart_seriesaddcopy.md "SeriesAddCopy") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::SeriesAdd
Add data series to a chart.
MTAPIRES IMTReportChart::SeriesAdd( IMTReportSeries* series // Data series object )  
---  
Parameters
series
[in] [Data series](imtreportseries.md "IMTReportSeries") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method places a pointer to a passed object at a chart object. After a successful call of this method, the control over the life time of the series object is passed to the chart object. Thus, when deleting a chart object ([IMTReportChart::Release](imtreportchart_release.md "Release") call), an earlier inserted object will be automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the chart object to become invalid, and its call (including the case of the chart object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object, because this will lead to a crash during memory release.