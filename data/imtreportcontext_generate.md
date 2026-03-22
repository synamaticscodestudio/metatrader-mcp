# Generate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Report Plugin Interface ](imtreportcontext.md "Report Plugin Interface")/ Generate | [](imtreportcontext_release.md "Release") [](imtreportapi.md "Main Report Interface") |
| --- | --- | --- |
| --- | --- |

IMTReportContext::Generate
Method of the generation of the report requested by a server during the arrival of an appropriate request from a manager terminal.
MTAPIRES IMTReportContext::Generate( const UINT type, // Type of a report IMTReportAPI *api // Pointer to the API interface )  
---  
Parameters
type
[in] Type of a generated report. Transfered using the [MTReportInfo::EnTypes](mtreportinfo.md "MTReportInfo") enumeration.
*api
[in] Pointer to the interface of the Report API.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Maximum allowed time for generating a report is 10 minutes.