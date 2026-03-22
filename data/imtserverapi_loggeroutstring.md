# LoggerOutString (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Common Functions ](serverapi_common.md "Common Functions")/ LoggerOutString | [](imtserverapi_loggerout.md "LoggerOut") [](imtserverapi_loggerrequest.md "LoggerRequest") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LoggerOutString
Output unformatted stings to the server journal (quick output).
MTAPIRES IMTServerAPI::LoggerOutString( const UINT code, // log code LPCWSTR string // log string )  
---  
Parameters
code
[in] Log code which is passed using the [EnMTLogCode](journal.htm#enmtlogcode) enumerations.
string
[in] Log string with optional arguments.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Compared to [IMTServerAPI::LoggerOut](imtserverapi_loggerout.md "LoggerOut"), which formats the output, this method uses less resources.
Each string is limited to 16KB, not including the standard string header.
Do not use the newline characters \r and \n, as this will lead to incorrect calculation of the checksum for the log lines.