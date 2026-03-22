# SessionTradeTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SessionTradeTotal | [](imtconsymbol_sessiontradeshift.md "SessionTradeShift") [](imtconsymbol_sessiontradenext.md "SessionTradeNext") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SessionTradeTotal
Get the number of symbol trading sessions for a specified day.
C++
UINT IMTConSymbol::SessionTradeTotal( const UINT wday // Day of the week ) const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.SessionTradeTotal( uint wday // Day of the week )  
---  
Python (Manager API)
MTConSymbol.SessionTradeTotal( wday # Day of the week )  
---  
Parameters
wday
[in] The day of the week to get the number of trading sessions. The day is specified by a value 0 (Sunday) to 6 (Saturday).
Return Value
The number of symbol trading sessions for a specified day.