# MarginStopDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginStopDefault | [](imtcongroupsymbol_marginstop.md "MarginStop") [](imtcongroupsymbol_marginstoplimit.md "MarginStopLimit") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginStopDefault
Get the default [margin ratio for stop orders](imtconsymbol_marginstop.md "MarginStop") set for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
double IMTConGroupSymbol::MarginStopDefault() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginStopDefault()  
---  
Python (Manager API)
MTConGroupSymbol.MarginStopDefault  
---  
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. You should use [IMTConGroupSymbol::MarginRateInitialDefault](imtcongroupsymbol_marginrateinitialdefault.md "MarginRateInitialDefault") and [IMTConGroupSymbol::MarginRateMaintenanceDefault](imtcongroupsymbol_marginratemaintenancedefault.md "MarginRateMaintenanceDefault") instead.