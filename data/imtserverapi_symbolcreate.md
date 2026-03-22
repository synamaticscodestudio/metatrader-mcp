# SymbolCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolCreate | [](serverapi_config_symbol.md "Symbols") [](imtserverapi_symbolsessioncreate.md "SymbolSessionCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolCreate
Create an object of the symbol configuration.
IMTConSymbol* IMTServerAPI::SymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object.