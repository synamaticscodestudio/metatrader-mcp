# About (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Common Functions ](serverapi_common.md "Common Functions")/ About | [](imtserverapi_loggerflush.md "LoggerFlush") [](imtserverapi_licensecheck.md "LicenseCheck") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::About
Quickly receive the description of the server on which the plugin is running.
MTAPIRES IMTServerAPI::About( MTServerInfo& info // Pointer to MTServerInfo )  
---  
Parameters
info
[in] A pointer to the [MTServerInfo](mtserverinfo.md "MTServerInfo") structure.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This function copies the [MTServerInfo](mtserverinfo.md "MTServerInfo") structure to the info parameter.