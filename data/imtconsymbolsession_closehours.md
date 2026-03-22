# CloseHours (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSession ](imtconsymbolsession.md "IMTConSymbolSession")/ CloseHours | [](imtconsymbolsession_close.md "Close") [](imtconsymbolsession_closeminutes.md "CloseMinutes") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSession::CloseHours
Get the number of hours in the closing time of trading or quoting session of a symbol.
C++
UINT IMTConSymbolSession::CloseHours() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbolSession.CloseHours()  
---  
Python (Manager API)
MTConSymbolSession.CloseHours  
---  
Return Value
The number of hours in the closing time of trading or quoting session of a symbol.
Note
For example, if the [IMTConSymbolSession::Close](imtconsymbolsession_close.md "Close") method returns the value 100, the IMTConSymbolSession::CloseHours will return 1 (the number of hours for 01:40).