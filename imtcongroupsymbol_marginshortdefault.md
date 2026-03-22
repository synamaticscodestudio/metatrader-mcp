# MarginShortDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginShortDefault | [](imtcongroupsymbol_marginshort.md "MarginShort") [](imtcongroupsymbol_marginlimit.md "MarginLimit") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginShortDefault
Get the default [margin ratio for short positions and orders](imtconsymbol_marginshort.md "MarginShort") set for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
double IMTConGroupSymbol::MarginShortDefault() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginShortDefault()  
---  
Python (Manager API)
MTConGroupSymbol.MarginShortDefault  
---  
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. You should use [IMTConGroupSymbol::MarginRateInitialDefault](imtcongroupsymbol_marginrateinitialdefault.md "MarginRateInitialDefault") and [IMTConGroupSymbol::MarginRateMaintenanceDefault](imtcongroupsymbol_marginratemaintenancedefault.md "MarginRateMaintenanceDefault") instead.