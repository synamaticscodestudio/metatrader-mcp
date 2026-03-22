# SymbolSessionCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolSessionCreate | [](imtgatewayapi_symbolcreate.md "SymbolCreate") [](imtgatewayapi_symbolsubscribe.md "SymbolSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolSessionCreate
Create an object of configuration of a trading or quoting session of the symbol.
C++
IMTConSymbolSession* IMTGatewayAPI::SymbolSessionCreate()  
---  
.NET
CIMTConSymbolSession CIMTGatewayAPI.SymbolSessionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbolSession](imtconsymbolsession.md "IMTConSymbolSession") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbolSession::Release](imtconsymbolsession_release.md "Release") method of this object.