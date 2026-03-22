# BuildDate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ BuildDate | [](imtconserver_build.md "Build") [](imtconserver_lastboottime.md "LastBootTime") |
| --- | --- | --- |
| --- | --- |

IMTConServer::BuildDate
Get the date of the server build.
C++
LPCWSTR IMTConServer::BuildDate() const  
---  
.NET (Gateway/Manager API)
string CIMTConServer.BuildDate()  
---  
Python (Manager API)
MTConServer.BuildDate  
---  
Return Value
If successful, it returns a pointer to the string with the server build date. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
The date length is limited to 32 characters (including the end-of-line character).