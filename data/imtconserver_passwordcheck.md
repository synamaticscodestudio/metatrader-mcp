# PasswordCheck (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ PasswordCheck | [](imtconserver_password.md "Password") [](imtconserver_servicetime.md "ServiceTime") |
| --- | --- | --- |
| --- | --- |

IMTConServer::PasswordCheck
Check the server password.
C++
MTAPIRES IMTConServer::PasswordCheck( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.PasswordCheck( string password // Password )  
---  
Python (Manager API)
MTConServer.PasswordCheck( password # Password )  
---  
Parameters
password
[in] A password for checking.
Return Value
An indication of a successful password check is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code.