# MTReportAbout (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Entry Points ](reportapi_entrypoints.md "Entry Points")/ MTReportAbout | [](reportapi_entrypoints.md "Entry Points") [](mtreportcreate.md "MTReportCreate") |
| --- | --- | --- |
| --- | --- |

MTReportAbout
Point MTReportAbout provides the initial information about the report module to the server.
MTAPIENTRY MTAPIRES MTReportAbout( const UINT index // Report index MTReportInfo& info // Reference to MTReportInfo )  
---  
Parameters
index
[in] Report index within the module beginning from zero.
info
[out] A reference to the [MTReportInfo](mtreportinfo.md "MTReportInfo") structure.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. If the return code is different from MT_RET_OK, the plug will not appear in the list of modules.
Note
The module must correctly fill in the [MTReportInfo](mtreportinfo.md "MTReportInfo") structure.