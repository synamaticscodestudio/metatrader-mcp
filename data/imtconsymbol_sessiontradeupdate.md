# SessionTradeUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SessionTradeUpdate | [](imtconsymbol_sessiontradeadd.md "SessionTradeAdd") [](imtconsymbol_sessiontradedelete.md "SessionTradeDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SessionTradeUpdate
Update a trading session of a symbol by the day and index.
C++
MTAPIRES IMTConSymbol::SessionTradeUpdate( const UINT wday, // Day of the week const UINT pos, // The position of a session const IMTConSymbolSession* session // An object of the session )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SessionTradeUpdate( uint wday, // Day of the week uint pos, // The position of a session CIMTConSymbolSession session // An object of the session )  
---  
Python (Manager API)
MTConSymbol.SessionTradeUpdate( wday, # Day of the week pos, # The position of a session session # An object of the session )  
---  
MTConSymbol.SessionTradeUpdate( session_list # A list of session objects )  
---  
Parameters
wday
[in] The day of the week in which the trading session is updated. The day is specified by a value 0 (Sunday) to 6 (Saturday).
pos
[in] The position of a quoting session in the specified day starting with 0.
session
[in] An object of the session.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.