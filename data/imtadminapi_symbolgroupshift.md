# SymbolGroupShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Symbols ](imtadminapi_config_symbol.md "Functions")/ SymbolGroupShift | [](imtadminapi_symbolgroupdelete.md "SymbolGroupDelete") [](imtadminapi_symbolgrouptotal.md "SymbolGroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SymbolGroupShift
Change the position of a subgroup of symbols in a list.
C++
MTAPIRES IMTAdminAPI::SymbolGroupShift( const UINT pos, // the position of the symbol subgroup const int shift // shift )  
---  
.NET
MTRetCode CIMTAdminAPI.SymbolGroupShift( uint pos, // the position of the symbol subgroup int shift // shift )  
---  
Python
AdminAPI.SymbolGroupShift( int pos, # the position of the symbol subgroup int shift # shift )  
---  
Parameters
pos
[in] Position of the symbol subgroup, starting from 0.
shift
[in] The shift of the subgroup relative to its current position. A negative value means shift towards the top of the list, a positive value shifts the subgroup towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The subgroup position can only be changed from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.