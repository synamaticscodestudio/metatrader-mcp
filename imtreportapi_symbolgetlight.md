# SymbolGetLight (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Symbols ](imtreportapi_config_symbol.md "Symbols")/ SymbolGetLight | [](imtreportapi_symbolget.md "SymbolGet") [](imtreportapi_symbolexist.md "SymbolExist") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SymbolGetLight
Get an eased configuration of a symbol.
MTAPIRES IMTReportAPI::SymbolGetLight( LPCWSTR name, // Symbol name IMTConSymbol *symbol // An object of the symbol configuration )  
---  
Parameters
name
[in] Symbol name. The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the name.
*symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTReportAPI::SymbolCreate](imtreportapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method submits all symbol parameters except quoted and trade sessions settings ([IMTConSymbol::Session*](imtconsymbol_sessionquoteadd.md "SessionQuoteAdd")).
Request for eased configurations allows to save resources.