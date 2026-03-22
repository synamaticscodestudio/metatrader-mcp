# MarginStopLimit (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginStopLimit | [](imtcongroupsymbol_marginstopdefault.md "MarginStopDefault") [](imtcongroupsymbol_marginstoplimitdefault.md "MarginStopLimitDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginStopLimit
Get the group margin ratio for stop-limit orders for a symbol.
C++
double IMTConGroupSymbol::MarginStopLimit() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginStopLimit()  
---  
Python (Manager API)
MTConGroupSymbol.MarginStopLimit  
---  
Return Value
The group margin ratio for stop-limit orders for a symbol.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.
IMTConGroupSymbol::MarginStopLimit
Set the group margin ratio for stop-limit orders for a symbol.
C++
MTAPIRES IMTConGroupSymbol::MarginStopLimit( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginStopLimit( double margin // Margin ratio )  
---  
Python (Manager API)
MTConGroupSymbol.MarginStopLimit  
---  
Parameters
margin
[in] The group margin ratio for stop-limit orders for a symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.