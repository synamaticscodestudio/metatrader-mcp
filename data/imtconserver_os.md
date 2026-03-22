# OS (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ OS | [](imtconserver_connected.md "Connected") [](imtconserver_cpu.md "CPU") |
| --- | --- | --- |
| --- | --- |

IMTConServer::OS
Get the operating system of the computer running the server.
C++
LPCWSTR IMTConServer::OS() const  
---  
.NET (Gateway/Manager API)
string CIMTConServer.OS()  
---  
Python (Manager API)
MTConServer.OS  
---  
Return Value
If successful, it returns a pointer to the string with the operating system. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
The length of the operating system name is limited to 128 characters (including the end-of-line character).