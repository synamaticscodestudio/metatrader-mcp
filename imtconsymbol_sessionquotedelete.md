# SessionQuoteDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SessionQuoteDelete | [](imtconsymbol_sessionquoteupdate.md "SessionQuoteUpdate") [](imtconsymbol_sessionquoteclear.md "SessionQuoteClear") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SessionQuoteDelete
Delete a quoting session of a symbol by the day and index.
C++
MTAPIRES IMTConSymbol::SessionQuoteDelete( const UINT wday, // Day of the week const UINT pos // The session position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SessionQuoteDelete( uint wday, // Day of the week uint pos // The session position )  
---  
Python (Manager API)
MTConSymbol.SessionQuoteDelete( wday, # Day of the week pos # The session position )  
---  
Parameters
wday
[in] The day of the week to delete the quoting session. The day is specified by a value 0 (Sunday) to 6 (Saturday).
pos
[in] The position of a quoting session in the specified day starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.