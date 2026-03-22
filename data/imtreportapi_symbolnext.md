# SymbolNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Symbols ](imtreportapi_config_symbol.md "Symbols")/ SymbolNext | [](imtreportapi_symboltotal.md "SymbolTotal") [](imtreportapi_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SymbolNext
Get the symbol configuration by the index.
MTAPIRES IMTReportAPI::SymbolNext( const UINT pos, // Position of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTReportAPI::SymbolCreate](imtreportapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a symbol with a specified index to the symbol object.