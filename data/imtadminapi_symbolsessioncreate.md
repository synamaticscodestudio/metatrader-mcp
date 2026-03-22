# SymbolSessionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolSessionCreate | [](imtadminapi_symbolcreate.md "SymbolCreate") [](imtadminapi_symbolsubscribe.md "SymbolSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolSessionCreate
Create an object of configuration of a trading or quoting session of the symbol.
C++
IMTConSymbolSession* IMTAdminAPI::SymbolSessionCreate()  
---  
.NET
CIMTConSymbolSession CIMTAdminAPI.SymbolSessionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbolSession](imtconsymbolsession.md "IMTConSymbolSession") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbolSession::Release](imtconsymbolsession_release.md "Release") method of this object.