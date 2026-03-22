# SymbolExist (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Symbols ](imtreportapi_config_symbol.md "Symbols")/ SymbolExist | [](imtreportapi_symbolgetlight.md "SymbolGetLight") [](imtreportapi_config_manager.md "Managers") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SymbolExist
Check the availability of a symbol for a specified [group](config_group.md "Groups") of clients.
MTAPIRES IMTReportAPI::SymbolExist( const IMTConSymbol* symbol, // An object of the symbol configuration const IMTConGroup* group // An object of the group configuration )  
---  
Parameters
symbol
[in] An object of the symbol configuration.
group
[in] An object of the group configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method checks whether the parameters of a client group allow working with a specified symbol.