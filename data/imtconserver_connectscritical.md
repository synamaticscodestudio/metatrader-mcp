# ConnectsCritical (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ ConnectsCritical | [](imtconserver_connectsmax.md "ConnectsMax") [](imtconserver_networkmax.md "NetworkMax") |
| --- | --- | --- |
| --- | --- |

IMTConServer::ConnectsCritical
Get the critical number of simultaneous connections to the server.
C++
UINT IMTConServer::ConnectsCritical() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.ConnectsCritical()  
---  
Python (Manager API)
MTConServer.ConnectsCritical  
---  
Return Value
Critical number of simultaneous connections to the server.
Note
The critical level is strictly defined. This method allows to respond to the critical state of the system.