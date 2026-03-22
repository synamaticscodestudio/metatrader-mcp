# SessionQuoteTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SessionQuoteTotal | [](imtconsymbol_sessionquoteshift.md "SessionQuoteShift") [](imtconsymbol_sessionquotenext.md "SessionQuoteNext") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SessionQuoteTotal
Get the number of symbol quoting sessions for a specified day.
C++
UINT IMTConSymbol::SessionQuoteTotal( const UINT wday // Day of the week ) const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.SessionQuoteTotal( uint wday // Day of the week )  
---  
Python (Manager API)
MTConSymbol.SessionQuoteTotal()  
---  
Parameters
wday
[in] The day of the week to get the number of quoting sessions. The day is specified by a value 0 (Sunday) to 6 (Saturday).
Return Value
The number of symbol quoting sessions for a specified day.