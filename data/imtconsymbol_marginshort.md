# MarginShort (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginShort | [](imtconsymbol_marginlong.md "MarginLong") [](imtconsymbol_marginlimit.md "MarginLimit") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginShort
Get the margin ratio for short positions and orders.
C++
double IMTConSymbol::MarginShort() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.MarginShort()  
---  
Python (Manager API)
MTConSymbol.MarginShort  
---  
Return Value
The margin ratio for short positions and orders.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").
IMTConSymbol::MarginShort
Margin for short positions and orders.
C++
MTAPIRES IMTConSymbol::MarginShort( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)s
MTRetCode CIMTConSymbol.MarginShort( double margin // Margin ratio )  
---  
Python (Manager API)
MTConSymbol.MarginShort  
---  
Parameters
margin
[in] The margin ratio for short positions and orders.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").