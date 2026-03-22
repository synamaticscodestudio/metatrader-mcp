# MarginLongDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginLongDefault | [](imtcongroupsymbol_marginlong.md "MarginLong") [](imtcongroupsymbol_marginshort.md "MarginShort") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginLongDefault
Get the default [margin ratio for long positions and orders](imtconsymbol_marginlong.md "MarginLong") set for a symbol. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
double IMTConGroupSymbol::MarginLongDefault() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginLongDefault()  
---  
Python (Manager API)
MTConGroupSymbol.MarginLongDefault  
---  
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. You should use [IMTConGroupSymbol::MarginRateInitialDefault](imtcongroupsymbol_marginrateinitialdefault.md "MarginRateInitialDefault") and [IMTConGroupSymbol::MarginRateMaintenanceDefault](imtcongroupsymbol_marginratemaintenancedefault.md "MarginRateMaintenanceDefault") instead.