# About (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Common Functions ](imtreportapi_common.md "Common Functions")/ About | [](imtreportapi_licensecheck.md "LicenseCheck") [](imtreportapi_parameters.md "Report Parameters") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::About
Quickly receive the description of the server on which the module is running.
MTAPIRES IMTReportAPI::About( MTReportServerInfo& info // Reference to MTReportServerInfo )  
---  
Parameters
info
[in] A reference to the [MTReportServerInfo](mtreportserverinfo.md "MTReportServerInfo") structure.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This function copies the [MTReportServerInfo](mtreportserverinfo.md "MTReportServerInfo") structure to the info parameter.