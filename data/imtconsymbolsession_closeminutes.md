# CloseMinutes (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSession ](imtconsymbolsession.md "IMTConSymbolSession")/ CloseMinutes | [](imtconsymbolsession_closehours.md "CloseHours") [](imtconsymbolarray.md "IMTConSymbolArray") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSession::CloseMinutes
Get the number of minutes in the closing time of trading or quoting session of a symbol.
C++
UINT IMTConSymbolSession::CloseMinutes() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbolSession.CloseMinutes()  
---  
Python (Manager API)
MTConSymbolSession.CloseMinutes  
---  
Return Value
The number of minutes in the closing time of trading or quoting session of a symbol.
Note
For example, if the [IMTConSymbolSession::Close](imtconsymbolsession_close.md "Close") method returns the value 100, the IMTConSymbolSession::CloseMinutes will return 40 (the number of minutes for 01:40).