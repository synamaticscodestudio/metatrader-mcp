# LoggerOut (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Common Functions ](imtmanagerapi_common.md "Common Functions")/ LoggerOut | [](imtmanagerapi_free.md "Free") [](imtmanagerapi_loggeroutstring.md "LoggerOutString") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LoggerOut
The functions for adding messages to the local journal of the manager interface.
C++
MTAPIRES IMTManagerAPI::LoggerOut( const UINT code, // Message code LPCWSTR format, // Message string ... // Optional arguments )  
---  
.NET
MTRetCode CIMTManagerAPI.LoggerOut( EnMTLogCode  code, // Message code string format, // Message string params object[] args // Optional arguments )  
---  
Python
ManagerAPI.LoggerOut( code, // Message code format // Message string )  
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