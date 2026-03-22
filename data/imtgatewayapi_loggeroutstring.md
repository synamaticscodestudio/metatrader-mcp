# LoggerOutString (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Common Functions ](imtgatewayapi_common.md "Common Functions")/ LoggerOutString | [](imtgatewayapi_loggerout.md "LoggerOut") [](imtgatewayapi_loggerflush.md "LoggerFlush") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::LoggerOutString
Quick output of unformatted stings to the journal.
C++
MTAPIRES IMTGatewayAPI::LoggerOutString( const UINT code, // log code LPCWSTR string // log string )  
---  
.NET
MTRetCode CIMTGatewayAPI.LoggerOutString( EnMTLogCode  code, // log code string  string // log string )  
---  
Parameters
code
[in] Log code which is passed using the [EnMTLogCode](journal.htm#enmtlogcode) enumerations.
msg
[in] The message string.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Compared to [IMTGatewayAPI::LoggerOut](imtgatewayapi_loggerout.md "LoggerOut"), which formats the output, this method consumes less resources.
Each string is limited to 16KB, not including the standard string header.
Do not use the newline characters \r and \n, as this will lead to incorrect calculation of the checksum for the log lines.