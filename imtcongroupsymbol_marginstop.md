# MarginStop (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginStop | [](imtcongroupsymbol_marginlimitdefault.md "MarginLimitDefault") [](imtcongroupsymbol_marginstopdefault.md "MarginStopDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginStop
Get the group margin ratio of stop orders for a symbol.
C++
double IMTConGroupSymbol::MarginStop() const  
---  
.NET (Gateway/Manager API)
double CIMTConGroupSymbol.MarginStop()  
---  
Python (Manager API)
MTConGroupSymbol.MarginStop  
---  
Return Value
The group margin ratio of stop orders for a symbol.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.
IMTConGroupSymbol::MarginStop
Set the group margin ratio of stop orders for a symbol.
C++
MTAPIRES IMTConGroupSymbol::MarginStop( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginStop( double margin // Margin ratio )  
---  
Python (Manager API)
MTConGroupSymbol.MarginStop  
---  
Parameters
margin
[in] The group margin ratio of stop orders for a symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Use [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial") and [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance") instead.