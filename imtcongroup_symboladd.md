# SymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ SymbolAdd | [](imtcongroup_commissionget.md "CommissionGet") [](imtcongroup_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::SymbolAdd
Add a symbol setting for a group.
C++
MTAPIRES IMTConGroup::SymbolAdd( IMTConGroupSymbol* symbol // An object of the symbol setting )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.SymbolAdd( CIMTConGroupSymbol symbol // An object of the symbol setting )  
---  
Python (Manager API)
MTConGroup.SymbolAdd( symbol # An object of the symbol setting )  
---  
Parameters
symbol
[in] An object of the symbol setting.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.