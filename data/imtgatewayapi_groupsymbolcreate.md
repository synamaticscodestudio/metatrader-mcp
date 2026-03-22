# GroupSymbolCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupSymbolCreate | [](imtgatewayapi_groupcreate.md "GroupCreate") [](imtgatewayapi_groupcommissioncreate.md "GroupCommissionCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupSymbolCreate
Create an object of [symbol](config_symbol.md "Symbols") configuration for a group.
C++
IMTConGroupSymbol* IMTGatewayAPI::GroupSymbolCreate()  
---  
.NET
CIMTConGroupSymbol CIMTGatewayAPI.GroupSymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroupSymbol](imtcongroupsymbol.md "IMTConGroupSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroupSymbol::Release](imtcongroupsymbol_release.md "Release") method of this object.