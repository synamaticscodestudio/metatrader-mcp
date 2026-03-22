# MTReportCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Entry Points ](reportapi_entrypoints.md "Entry Points")/ MTReportCreate | [](mtreportabout.md "MTReportAbout") [](imtreportcontext.md "Report Plugin Interface") |
| --- | --- | --- |
| --- | --- |

MTReportCreate
MTReportCreate entry point. This method is called by the server to create an instance of an object of the reports module that implements the [IMTReportContext](imtreportcontext.md "Report Plugin Interface") interface.
MTAPIENTRY MTAPIRES MTReportCreate( const UINT index, // Report index const UINT apiversion, // API Version IMTReportConext** context // Pointer to a pointer to the module )  
---  
Parameters
index
[in] Report index within the module beginning from zero.
apiversion
[in] The current version of the Report API supported by the server is passed in this parameter.
context
[out] A pointer to a pointer to the [reports context](imtreportcontext.md "Report Plugin Interface").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.