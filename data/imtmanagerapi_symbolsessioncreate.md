# SymbolSessionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolSessionCreate | [](imtmanagerapi_symbolcreatearray.md "SymbolCreateArray") [](imtmanagerapi_symbolsubscribe.md "SymbolSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolSessionCreate
Create an object of configuration of a trading or quoting session of the symbol.
C++
IMTConSymbolSession* IMTManagerAPI::SymbolSessionCreate()  
---  
.NET
CIMTConSymbolSession CIMTManagerAPI.SymbolSessionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbolSession](imtconsymbolsession.md "IMTConSymbolSession") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTManagerAPI::Release](imtconsymbolsession_release.md "Release") method of this object.