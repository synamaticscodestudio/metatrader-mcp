# Password (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Password | [](imtconserver_id.md "Id") [](imtconserver_passwordcheck.md "PasswordCheck") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Password
Set the server password.
C++
MTAPIRES IMTConServer::Password( LPCWSTR password // Server password ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.Password( string  password // Server password )  
---  
Python (Manager API)
MTConServer.Password( password  # Server password )  
---  
Parameters
password
[in] Server password.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The must be no less than five symbols long and contain at least two of three symbols types (lower-case letters, upper-case letters or digits).