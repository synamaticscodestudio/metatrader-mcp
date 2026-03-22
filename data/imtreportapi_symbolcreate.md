# SymbolCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Symbols ](imtreportapi_config_symbol.md "Symbols")/ SymbolCreate | [](imtreportapi_config_symbol.md "Symbols") [](imtreportapi_symbolsessioncreate.md "SymbolSessionCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SymbolCreate
Create an object of the symbol configuration.
IMTConSymbol* IMTReportAPI::SymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbol](imtconsymbol.md "IMTConSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbol::Release](imtconsymbol_release.md "Release") method of this object.