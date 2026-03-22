# MarginLong (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginLong | [](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance") [](imtconsymbol_marginshort.md "MarginShort") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginLong
Get the margin ratio for long positions and orders.
C++
double IMTConSymbol::MarginLong() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.MarginLong()  
---  
Python (Manager API)
MTConSymbol.MarginLong  
---  
Return Value
The margin ratio for long positions and orders.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").
IMTConSymbol::MarginLong
Set the margin ratio for long positions and orders.
C++
MTAPIRES IMTConSymbol::MarginLong( const double margin // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.MarginLong( double margin // Margin ratio )  
---  
Python (Manager API)
MTConSymbol.MarginLong  
---  
Parameters
margin
[in] The margin ratio for long positions and orders.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method is obsolete. The functionality of the method in the future is not guaranteed. Instead of it one should use [IMTConSymbol::MarginRateInitial](imtconsymbol_marginrateinitial.md "MarginRateInitial") or [IMTConSymbol::MarginRateMaintenance](imtconsymbol_marginratemaintenance.md "MarginRateMaintenance").