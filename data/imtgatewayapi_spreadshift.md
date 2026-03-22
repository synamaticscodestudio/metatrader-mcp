# SpreadShift (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadShift | [](imtgatewayapi_spreaddelete.md "SpreadDelete") [](imtgatewayapi_spreadtotal.md "SpreadTotal") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadShift
Change the position of a spread configuration in the list.
C++
MTAPIRES IMTGatewayAPI::SpreadShift( const UINT pos, // Position of the configuration const int shift // Shift )  
---  
.NET
MTRetCode CIMTGatewayAPI.SpreadShift( uint pos, // Position of the configuration int shift // Shift )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
shift
[in] Shift of the configuration relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The position of a configuration can be changed only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.