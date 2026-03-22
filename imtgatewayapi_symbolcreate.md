# SymbolCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolCreate | [](imtgatewayapi_config_symbol.md "Functions") [](imtgatewayapi_symbolsessioncreate.md "SymbolSessionCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolCreate
Create an object of the symbol configuration.
C++
IMTConSymbol* IMTGatewayAPI::SymbolCreate()  
---  
.NET
CIMTConSymbol CIMTGatewayAPI.SymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object.