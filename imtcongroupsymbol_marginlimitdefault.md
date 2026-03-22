# MarginLimitDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginLimitDefault | [](imtcongroupsymbol_marginlimit.md "MarginLimit") [](imtcongroupsymbol_marginstop.md "MarginStop") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginLimitDefault
Get the default [margin ratio of limit orders](imtconsymbol_marginlimit.md "MarginLimit") set for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
double IMTConGroupSymbol::MarginLimitDefault() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginLimitDefault()  
---  
Python (Manager API)
MTConGroupSymbol.MarginLimitDefault  
---  
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. You should use [IMTConGroupSymbol::MarginRateInitialDefault](imtcongroupsymbol_marginrateinitialdefault.md "MarginRateInitialDefault") and [IMTConGroupSymbol::MarginRateMaintenanceDefault](imtcongroupsymbol_marginratemaintenancedefault.md "MarginRateMaintenanceDefault") instead.