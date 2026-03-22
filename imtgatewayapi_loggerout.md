# LoggerOut (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Common Functions ](imtgatewayapi_common.md "Common Functions")/ LoggerOut | [](imtgatewayapi_free.md "Free") [](imtgatewayapi_loggeroutstring.md "LoggerOutString") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::LoggerOut
Log messages.
C++
MTAPIRES IMTGatewayAPI::LoggerOut( const UINT code, // Message code LPCWSTR msg, // Message string ... // Optional arguments )  
---  
.NET
MTRetCode CIMTGatewayAPI.LoggerOut( EnMTLogCode  code, // Message code string  format, // Message string params object[] args // Optional arguments )  
---  
Parameters
code
[in] Message code that is passed using the [EnMTLogCode](journal.htm#enmtlogcode) enumeration.
msg
[in] A message string with optional arguments. 
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Each string is limited to 16KB without the standard string header.
The requirements for the format string are the same as applied in C++: <http://www.cplusplus.com/reference/cstdio/printf/>
Do not use the line feed characters \r and \n as it leads to an incorrect calculation of the check sum of the log.