# LoggerOut (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Common Functions ](imtadminapi_common.md "Common Functions")/ LoggerOut | [](imtadminapi_free.md "Free") [](imtadminapi_loggeroutstring.md "LoggerOutString") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LoggerOut
Add messages to the local journal of the administrator interface.
C++
MTAPIRES IMTAdminAPI::LoggerOut( const UINT code, // Message code LPCWSTR format, // Message string ... // Optional arguments )  
---  
.NET
MTRetCode CIMTAdminAPI.LoggerOut( EnMTLogCode code, // Message code string  format, // Message string params object[] args // Optional arguments )  
---  
Python
AdminAPI.LoggerOut( code, # Message code msg # Message string )  
---  
Parameters
code
[in] Message code that is passed using the [EnMTLogCode](journal.htm#enmtlogcode) enumeration.
format
[in] A message string with optional arguments. 
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Each string is limited to 16KB without the standard string header.
The requirements for the format string are the same as applied in C++: <http://www.cplusplus.com/reference/cstdio/printf/>
Do not use the line feed characters \r and \n as it leads to an incorrect calculation of the check sum of the log.