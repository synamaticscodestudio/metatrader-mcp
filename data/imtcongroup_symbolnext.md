# SymbolNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ SymbolNext | [](imtcongroup_symboltotal.md "SymbolTotal") [](imtcongroup_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::SymbolNext
Gets a symbol setting at the specified index.
C++
MTAPIRES IMTConGroup::SymbolNext( const UINT pos, // Position of the symbol IMTConGroupSymbol* symbol // An object of the symbol setting ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.SymbolNext( uint pos, // Position of the symbol CIMTConGroupSymbol symbol // An object of the symbol setting )  
---  
Python (Manager API)
MTConGroup.SymbolNext( pos # Position of the symbol )  
---  
Parameters
pos
[in] The position of the symbol in the list of [group symbol settings](config_group.htm#symbols), starting with 0.
symbol
[out] An object of symbol setting. The symbol object must be first created using the [IMTAdminAPI::GroupSymbolCreate](imtadminapi_groupsymbolcreate.md "GroupSymbolCreate") or [IMTManagerAPI::GroupSymbolCreate](imtmanagerapi_groupsymbolcreate.md "GroupSymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of a symbol with a specified index to the symbol object.