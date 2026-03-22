# ClusterStateTotal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ ClusterStateTotal | [](imtconserver_failovertimeout.md "FailoverTimeout") [](imtconserver_clusterstatenext.md "ClusterStateNext") |
| --- | --- | --- |
| --- | --- |

IMTConServer::ClusterStateTotal
Get the number of cluster components, the status of connection with which can be analyzed for the current server.
C++
UINT IMTConServer::ClusterStateTotal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServer.ClusterStateTotal()  
---  
Python (Manager API)
MTConServer.ClusterStateTotal()  
---  
Return Value
The number of cluster components.