# Connected (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Connected | [](imtconserver_lastboottime.md "LastBootTime") [](imtconserver_os.md "OS") |
| --- | --- | --- |
| --- | --- |

IMTConServer::Connected
Get the status of a server connection to the main trade server.
C++
bool IMTConServer::Connected() const  
---  
.NET (Gateway/Manager API)
bool CIMTConServer.Connected()  
---  
Python (Manager API)
MTConServer.Connected  
---  
Return Value
0 - the server is not connected to the main trade server, 1 - the server is connected.