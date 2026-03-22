# SymbolExist (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolExist | [](imtmanagerapi_symbolrequestarray.md "SymbolRequestArray") [](imtmanagerapi_config_leverage.md "Floating Margin") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolExist
Check the availability of a symbol for a specified [group](config_group.md "Groups") of clients.
C++
MTAPIRES IMTManagerAPI::SymbolExist( const IMTConSymbol* symbol, // An object of the symbol configuration const IMTConGroup* group // An object of the group configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolExist( CIMTConSymbol symbol, // An object of the symbol configuration CIMTConGroup group // An object of the group configuration )  
---  
Python
ManagerAPI.SymbolExist( symbol, # An object of the symbol configuration group # An object of the group configuration )  
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