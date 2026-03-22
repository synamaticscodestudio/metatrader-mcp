# CPU (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ CPU | [](imtconserver_os.md "OS") [](imtconserver_cputotal.md "CPUTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::CPU
Get the processor type of the computer that is running the server.
C++
LPCWSTR IMTConServer::CPU() const  
---  
.NET (Gateway/Manager API)
string CIMTConServer.CPU()  
---  
Python (Manager API)
MTConServer.CPU  
---  
Return Value
If successful, it returns a pointer to the string with the processor. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConServer](imtconserver.md "IMTConServer") object.
To use the string after the object removal (call of the [IMTConServer::Release](imtconserver_release.md "Release") method of this object), a copy of it should be created.
The length of the processor type is limited to 64 characters (including the end-of-line character).