# SymbolSessionCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Symbols ](imtreportapi_config_symbol.md "Symbols")/ SymbolSessionCreate | [](imtreportapi_symbolcreate.md "SymbolCreate") [](imtreportapi_symboltotal.md "SymbolTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SymbolSessionCreate
Create an object of configuration of a trading or quoting session of the symbol.
IMTConSymbolSession* IMTReportAPI::SymbolSessionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConSymbolSession](imtconsymbolsession.md "IMTConSymbolSession") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConSymbolSession::Release](imtconsymbolsession_release.md "Release") method of this object.