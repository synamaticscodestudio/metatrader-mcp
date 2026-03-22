# LoggerOutString (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Common Functions ](imtadminapi_common.md "Common Functions")/ LoggerOutString | [](imtadminapi_loggerout.md "LoggerOut") [](imtadminapi_loggerflush.md "LoggerFlush") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LoggerOutString
Fast output method which prints unformatted logs to the Administrator API local journal.
C++
MTAPIRES IMTAdminAPI::LoggerOutString( const UINT code, // log code LPCWSTR string // log string )  
---  
.NET
MTRetCode CIMTAdminAPI.LoggerOutString( EnMTLogCode code, // log code string  string // log string )  
---  
Parameters
code
[in] Log code which is passed using the [EnMTLogCode](journal.htm#enmtlogcode) enumerations.
string
[in] Log string with optional arguments. 
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Compared to [IMTAdminAPI::LoggerOut](imtadminapi_loggerout.md "LoggerOut") which formats the output, this method consumes less resources.
Each string is limited to 16KB, not including the standard string header.
Do not use the newline characters \r and \n, as this will lead to incorrect calculation of the checksum for the log lines.