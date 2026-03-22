# Login (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ Login | [](imtconhistorysync_servertype.md "ServerType") [](imtconhistorysync_password.md "Password") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::Login
Get the trading account login used to connect to the server the data is synchronized with.
C++
UINT64 IMTConHistorySync::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConHistorySync.Login()  
---  
Python (Manager API)
MTConHistorySync.Login  
---  
Return Value
Trading account login.
IMTConHistorySync::Login
Set the trading account login used to connect to the server the data is synchronized with.
C++
MTAPIRES IMTConHistorySync::Login( UINT64 login // login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.Login( ulong login // login )  
---  
Python (Manager API)
MTConHistorySync.Login  
---  
Parameters
login
[in] Trading account login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.