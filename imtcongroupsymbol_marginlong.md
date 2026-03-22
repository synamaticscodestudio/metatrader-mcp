# MarginLong (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginLong | [](imtcongroupsymbol_marginratecurrencydefault.md "MarginRateCurrencyDefault") [](imtcongroupsymbol_marginlongdefault.md "MarginLongDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginLong
Get the group margin ratio for long positions and orders for a symbol.
C++
double IMTConGroupSymbol::MarginLong() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginLong()  
---  
Python (Manager API)
MTConGroupSymbol.MarginLong  
---  
Return Value
The group margin ratio for long positions and orders for a symbol.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.
IMTConGroupSymbol::MarginLong
Set the group margin ratio for long positions and orders for a symbol.
C++
MTAPIRES IMTConGroupSymbol::MarginLong( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginLong( double margin // Margin ratio )  
---  
Python (Manager API)
MTConGroupSymbol.MarginLong  
---  
Parameters
margin
[in] The group margin ratio for long positions and orders for a symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.