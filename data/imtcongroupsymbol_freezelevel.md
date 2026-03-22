# FreezeLevel (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ FreezeLevel | [](imtcongroupsymbol_stopsleveldefault.md "StopsLevelDefault") [](imtcongroupsymbol_freezeleveldefault.md "FreezeLevelDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::FreezeLevel
Get the price band, within which it is not allowed to modify orders and positions for the group.
C++
INT IMTConGroupSymbol::FreezeLevel() const  
---  
.NET (Gateway/Manager API)
int CIMTConGroupSymbol.FreezeLevel()  
---  
Python (Manager API)
MTConGroupSymbol.FreezeLevel  
---  
Return Value
The price band, within which it is not allowed to modify orders and positions for the group.
IMTConGroupSymbol::FreezeLevel
Set the price band, within which it is not allowed to modify orders and positions for the group.
C++
MTAPIRES IMTConGroupSymbol::FreezeLevel( const INT level // Price band with modification prohibited )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.FreezeLevel( int level // Price band with modification prohibited )  
---  
Python (Manager API)
MTConGroupSymbol.FreezeLevel  
---  
Parameters
level
[in] The price band, within which it is not allowed to change orders and positions for the group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.