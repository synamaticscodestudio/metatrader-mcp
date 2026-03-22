# MarginStopLimitDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginStopLimitDefault | [](imtcongroupsymbol_marginstoplimit.md "MarginStopLimit") [](imtcongroupsymbol_marginhedged.md "MarginHedged") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginStopLimitDefault
Get the default [margin ratio for stop-limit orders](imtconsymbol_marginstoplimit.md "MarginStopLimit") set for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
double IMTConGroupSymbol::MarginStopLimitDefault() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginStopLimitDefault()  
---  
Python (Manager API)
MTConGroupSymbol.MarginStopLimitDefault  
---  
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. You should use [IMTConGroupSymbol::MarginRateInitialDefault](imtcongroupsymbol_marginrateinitialdefault.md "MarginRateInitialDefault") and [IMTConGroupSymbol::MarginRateMaintenanceDefault](imtcongroupsymbol_marginratemaintenancedefault.md "MarginRateMaintenanceDefault") instead.