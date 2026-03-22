# TimeExpiration (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ TimeExpiration | [](imtconsymbol_timestart.md "TimeStart") [](imtconsymbol_sessionquoteadd.md "SessionQuoteAdd") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::TimeExpiration
Get the date of trading expiration for a symbol.
C++
INT64 IMTConSymbol::TimeExpiration() const  
---  
.NET (Gateway/Manager API)
long CIMTConSymbol.TimeExpiration()  
---  
Python (Manager API)
long MTConSymbol.TimeExpiration  
---  
Return Value
The date of trading expiration for a symbol. The date is specified as seconds that have elapsed since 01.01.1970.
Note
It is considered that there is no time limitation for trading by a symbol if both [IMTConSymbol::TimeStart](imtconsymbol_timestart.md "TimeStart") and IMTConSymbol::TimeExpiration are equal to 0.
IMTConSymbol::TimeExpiration
Set the date of trading expiration for a symbol.
C++
MTAPIRES IMTConSymbol::TimeExpiration( const INT64 expiration // Trading expiration date )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.TimeExpiration( ulong expiration // Trading expiration date )  
---  
Python (Manager API)
long MTConSymbol.TimeExpiration  
---  
Parameters
expiration
[in] Trading expiration date. The date is specified as seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
It is considered that there is no time limitation for trading by a symbol if both [IMTConSymbol::TimeStart](imtconsymbol_timestart.md "TimeStart") and IMTConSymbol::TimeExpiration are equal to 0.