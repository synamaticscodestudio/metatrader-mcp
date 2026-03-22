# SymboDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ SymboDelete | [](imtcongroup_symbolupdate.md "SymbolUpdate") [](imtcongroup_symbolclear.md "SymbolClear") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::SymbolDelete
Deletes a symbol setting for a group.
C++
MTAPIRES IMTConGroup::SymbolDelete( const UINT pos // Position of the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.SymbolDelete( uint pos // Position of the symbol )  
---  
Python (Manager API)
MTConGroup.SymbolDelete( pos # Position of the symbol )  
---  
Parameters
pos
[in] The position of the symbol in the list of [group symbol settings](config_group.htm#symbols), starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.