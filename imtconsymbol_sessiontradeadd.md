# SessionTradeAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SessionTradeAdd | [](imtconsymbol_sessionquotenext.md "SessionQuoteNext") [](imtconsymbol_sessiontradeupdate.md "SessionTradeUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SessionTradeAdd
Add a trading session for a symbol.
C++
MTAPIRES IMTConSymbol::SessionTradeAdd( const UINT wday, // A day of the week IMTConSymbolSession* session // A session object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SessionTradeAdd( uint wday, // A day of the week CIMTConSymbolSession session // A session object )  
---  
Python (Manager API)
MTConSymbol.SessionTradeAdd( wday, # A day of the week session # A session object )  
---  
Parameters
wday
[in] The day of the week, for which the trading session is being added. The day is specified by a value 0 (Sunday) to 6 (Saturday).
session
[in] An object of the session.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.