# SymbolSessionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolSessionCreate | [](imtserverapi_symbolcreate.md "SymbolCreate") [](imtserverapi_symbolsubscribe.md "SymbolSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolSessionCreate
Create an object of configuration of a trading or quoting session of the symbol.
IMTConSymbolSession* IMTServerAPI::SymbolSessionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbolSession](imtconsymbolsession.md "IMTConSymbolSession") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbolSession::Release](imtconsymbolsession_release.md "Release") method of this object.