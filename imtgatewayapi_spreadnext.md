# SpreadNext (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadNext | [](imtgatewayapi_spreadtotal.md "SpreadTotal") [](imtgatewayapi_spreadget.md "SpreadGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadNext
Receiving a spread configuration by the index.
C++
MTAPIRES IMTGatewayAPI::SpreadNext( const UINT pos, // Position of the configuration IMTConSymbol* spread // Spread configuration object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SpreadNext( uint pos, // Position of the configuration CIMTConSymbol spread // Spread configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
spread
[out] Spread configuration object. The spread object must be first created using [IMTServerAPI::SpreadCreate](imtgatewayapi_spreadcreate.md "SpreadCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a spread with a specified index to spread object.