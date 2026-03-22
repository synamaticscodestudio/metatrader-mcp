# SpreadCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadCreate | [](imtgatewayapi_config_spread.md "Configuration of Spreads") [](imtgatewayapi_spreadlegcreate.md "SpreadLegCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadCreate
Create an object of the configuration of a spread.
C++
IMTConSpread* IMTGatewayAPI::SpreadCreate()  
---  
.NET
CIMTConSpread CIMTGatewayAPI.SpreadCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpread](imtconspread.md "IMTConSpread") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpread::Release](imtconspread_release.md "Release") method of this object.