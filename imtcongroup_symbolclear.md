# SymbolClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ SymbolClear | [](imtcongroup_symboldelete.md "SymboDelete") [](imtcongroup_symbolshift.md "SymbolShift") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::SymbolClear
Clear the list of symbols of a group
C++
MTAPIRES IMTConGroup::SymbolClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.SymbolClear()  
---  
Python (Manager API)
MTConGroup.SymbolClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears the entire list of group symbols.