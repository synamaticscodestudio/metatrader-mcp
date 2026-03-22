# Assign (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ Assign | [](imtreportchart_release.md "Release") [](imtreportchart_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::Assign
Assign a passed object to the current one.
MTAPIRES IMTReportChart::Assign( const IMTReportChart *chart )  
---  
Parameters
*chart
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.