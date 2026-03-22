# MarginShort (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginShort | [](imtcongroupsymbol_marginlongdefault.md "MarginLongDefault") [](imtcongroupsymbol_marginshortdefault.md "MarginShortDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginShort
Get the group margin ratio for short positions and orders for a symbol.
C++
double IMTConGroupSymbol::MarginShort() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginShort()  
---  
Python (Manager API)
MTConGroupSymbol.MarginShort  
---  
Return Value
The group margin ratio for short positions and orders for a symbol.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.
IMTConGroupSymbol::MarginShort
Set the group margin ratio for short positions and orders for a symbol.
C++
MTAPIRES IMTConGroupSymbol::MarginShort( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginShort( double margin // Margin ratio )  
---  
Python (Manager API)
MTConGroupSymbol.MarginShort  
---  
Parameters
margin
[in] The group margin ratio for short positions and orders for a symbol.
Return Value
An indication of successful completion is the MT_RET_OK response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.