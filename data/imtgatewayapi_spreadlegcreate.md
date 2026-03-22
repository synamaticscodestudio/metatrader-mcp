# SpreadLegCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadLegCreate | [](imtgatewayapi_spreadcreate.md "SpreadCreate") [](imtgatewayapi_spreadsubscribe.md "SpreadSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadLegCreate
Create an object of the configuration of a spread leg.
C++
IMTConSpreadLeg* IMTGatewayAPI::SpreadLegCreate()  
---  
.NET
CIMTConSpreadLeg CIMTGatewayAPI.SpreadLegCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpreadLeg](imtconspreadleg.md "IMTConSpreadLeg") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpreadLeg::Release](imtconspreadleg_release.md "Release") method of this object.