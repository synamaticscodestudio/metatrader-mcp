# SymbolGroupNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolGroupNext | [](imtadminapi_symbolgrouptotal.md "SymbolGroupTotal") [](imtadminapi_symbolgroupexist.md "SymbolGroupExist") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolGroupNext
Get the name of a subgroup of symbols by index.
C++
MTAPIRES IMTAdminAPI::SymbolGroupNext( const UINT pos, // the position of the symbol subgroup MTAPISTR& name // the name of the symbol subgroup )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolGroupNext( uint pos, // the position of the symbol subgroup string name // the name of the symbol subgroup )  
---  
Python
str AdminAPI.SymbolGroupNext( int pos # the position of the symbol subgroup )  
---  
Parameters
pos
[in] Position of the symbol subgroup, starting from 0.
name
[out] The name of the symbol subgroup.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.