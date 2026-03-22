# SymbolGroupExist (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolGroupExist | [](imtadminapi_symbolgroupnext.md "SymbolGroupNext") [](imtadminapi_config_spread.md "Configuration of Spreads") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolGroupExist
Check the presence of a subgroup of symbols on the trading server.
C++
MTAPIRES IMTAdminAPI::SymbolGroupExist( LPCWSTR name // the name of the subgroup of symbols )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolGroupExist( string name // the name of the subgroup of symbols )  
---  
Python
AdminAPI.SymbolGroupExist( str name # the name of the subgroup of symbols )  
---  
Parameters
name
[in] The name of the symbol subgroup.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.