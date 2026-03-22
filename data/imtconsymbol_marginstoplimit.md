# MarginStopLimit (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginStopLimit | [](imtconsymbol_marginstop.md "MarginStop") [](imtconsymbol_marginhedged.md "MarginHedged") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginStopLimit
Get the margin ratio for stop-limit orders.
C++
double IMTConSymbol::MarginStopLimit() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.MarginStopLimit()  
---  
Python (Manager API)
MTConSymbol.MarginStopLimit  
---  
Return Value
Margin ratio for stop-limit orders.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").
IMTConSymbol::MarginStopLimit
Set the margin ratio for stop-limit orders.
C++
MTAPIRES IMTConSymbol::MarginStopLimit( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.MarginStopLimit( double margin // Margin ratio )  
---  
Python (Manager API)
MTConSymbol.MarginStopLimit  
---  
Parameters
margin
[in] Margin ratio for stop-limit orders.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").