# SymbolExist (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolExist | [](imtadminapi_symbolget.md "SymbolGet") [](imtadminapi_symbolgroupadd.md "SymbolGroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolExist
Check the availability of a symbol for a specified [group](config_group.md "Groups") of clients.
C++
MTAPIRES IMTAdminAPI::SymbolExist( const IMTConSymbol* symbol, // An object of the symbol configuration const IMTConGroup* group // An object of the group configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolExist( CIMTConSymbol  symbol, // An object of the symbol configuration CIMTConGroup  group // An object of the group configuration )  
---  
Python
AdminAPI.SymbolExist( symbol, # An object of the symbol configuration group # object of the group configuration )  
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