# SymbolGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Symbols ](imtreportapi_config_symbol.md "Symbols")/ SymbolGet | [](imtreportapi_symbolnext.md "SymbolNext") [](imtreportapi_symbolgetlight.md "SymbolGetLight") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SymbolGet
Gets the symbol configuration by the name.
MTAPIRES IMTReportAPI::SymbolGet( LPCWSTR name, // Name of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
Parameters
name
[in] The name of the configuration.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTReportAPI::SymbolCreate](imtreportapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the name. This method returns a symbol configuration with default trade settings.
SymbolGet
Get an individual configuration of a symbol for a group by the name of the symbol.
MTAPIRES IMTReportAPI::SymbolGet( LPCWSTR name, // Name of the configuration const IMTConGroup* group, /An object of the group configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
Parameters
name
[in] The name of the configuration.
group
[in] An object of the group configuration. The group object must be first created using the [IMTReportAPI::GroupCreate](imtreportapi_groupcreate.md "GroupCreate") method.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTReportAPI::SymbolCreate](imtreportapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the name.
This method returns a symbol configuration with trade settings for the specified group.