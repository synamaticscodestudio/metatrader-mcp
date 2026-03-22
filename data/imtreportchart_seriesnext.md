# SeriesNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ SeriesNext | [](imtreportchart_seriestotal.md "SeriesTotal") [](reportapi_dataset.md "Dataset Interfaces") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::SeriesNext
Get an object of a [data series](imtreportseries.md "IMTReportSeries") by its position.
IMTReportSeries* IMTReportChart::SeriesNext( const UINT pos // Position )  
---  
Parameters
pos
[in] Position of a data series, starting with 0.
Return Value
If successful, it returns a pointer to the path to the data series object at the specified chart object position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current chart object. Thus, when deleting a chart object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTReportChart::Release](imtreportchart_release.md "Release")) will cause the pointer stored within the chart object to become invalid, and its call (including the case of the chart object deletion) will cause the crash of the plugin and the server.