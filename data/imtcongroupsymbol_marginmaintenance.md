# MarginMaintenance (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginMaintenance | [](imtcongroupsymbol_margininitialdefault.md "MarginInitialDefault") [](imtcongroupsymbol_marginmaintenancedefault.md "MarginMaintenanceDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginMaintenance
Get the size of symbol maintenance margin for the group.
C++
double IMTConGroupSymbol::MarginMaintenance() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginMaintenance()  
---  
Python (Manager API)
MTConGroupSymbol.MarginMaintenance  
---  
Return Value
The size of symbol maintenance margin for the group.
IMTConGroupSymbol::MarginMaintenance
Set the size of symbol maintenance margin for the group.
C++
MTAPIRES IMTConGroupSymbol::MarginMaintenance( const double margin // Maintenance margin )  
---  
.NET (Gateway/Manager API)
MTReCode CIMTConGroupSymbol.MarginMaintenance( double margin // Maintenance margin )  
---  
Python (Manager API)
MTConGroupSymbol.MarginMaintenance  
---  
Parameters
margin
[in] The size of symbol maintenance margin for the group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.