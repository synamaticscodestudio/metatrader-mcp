# SpreadGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadGet | [](imtgatewayapi_spreadnext.md "SpreadNext") [](imtgatewayapi_trading.md "Trade Databases") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadGet
Receiving a spread configuration by the identifier.
C++
MTAPIRES IMTGatewayAPI::SpreadGet( UINT id, // Configuration name IMTConSpread* spread // Spread configuration object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SpreadGet( uint id, // Configuration name CIMTConSpread spread // Spread configuration object )  
---  
Parameters
id
[in] [Configuration identifier](imtconspread_id.md "ID").
spread
[out] Spread configuration object. The spread object must be first created using [IMTServerAPI::SpreadCreate](imtgatewayapi_spreadcreate.md "SpreadCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
[IMTConSpread::ID](imtconspread_id.md "ID") value is used as the identifier.