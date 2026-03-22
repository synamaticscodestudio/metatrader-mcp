# SeriesDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ SeriesDelete | [](imtreportchart_seriesaddcopy.md "SeriesAddCopy") [](imtreportchart_seriesdetach.md "SeriesDetach") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::SeriesDelete
Delete an object of a data series by its position.
MTAPIRES IMTReportChart::SeriesDelete( const UINT pos // Series position )  
---  
Parameters
pos
[in] Position of a data series, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The object to delete will be automatically released by calling the [IMTReportSeries::Release](imtreportseries_release.md "Release") method.