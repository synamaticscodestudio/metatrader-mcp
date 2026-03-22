# LoggerOutString (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Common Functions ](imtmanagerapi_common.md "Common Functions")/ LoggerOutString | [](imtmanagerapi_loggerout.md "LoggerOut") [](imtmanagerapi_loggerflush.md "LoggerFlush") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LoggerOutString
Fast output method which prints unformatted logs to the Manager API local journal.
C++
MTAPIRES IMTManagerAPI::LoggerOutString( const UINT code, // log code LPCWSTR string // log string )  
---  
.NET
MTRetCode CIMTManagerAPI.LoggerOutString( EnMTLogCode  code, // log code string string // log string )  
---  
Parameters
code
[in] Log code which is passed using the [EnMTLogCode](journal.htm#enmtlogcode) enumerations.
string
[in] Log string with optional arguments. 
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Compared to [IMTManagerAPI::LoggerOut](imtmanagerapi_loggerout.md "LoggerOut"), which formats the output, this method consumes less resources.
Each string is limited to 16KB, not including the standard string header.
Do not use the newline characters \r and \n, as this will lead to incorrect calculation of the checksum for the log lines.