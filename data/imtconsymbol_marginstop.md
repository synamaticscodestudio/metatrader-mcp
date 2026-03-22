# MarginStop (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginStop | [](imtconsymbol_marginlimit.md "MarginLimit") [](imtconsymbol_marginstoplimit.md "MarginStopLimit") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginStop
Get the margin ratio for stop orders.
C++
double IMTConSymbol::MarginStop() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.MarginStop()  
---  
Python (Manager API)
MTConSymbol.MarginStop  
---  
Return Value
The margin ratio for stop orders.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").
IMTConSymbol::MarginStop
Set the margin ratio for stop orders.
C++
MTAPIRES IMTConSymbol::MarginStop( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.MarginStop( double margin // Margin ratio )  
---  
Python (Manager API)
MTConSymbol.MarginStop  
---  
Parameters
margin
[in] The margin ratio for stop orders.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").