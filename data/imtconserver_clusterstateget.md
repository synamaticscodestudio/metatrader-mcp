# ClusterStateGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ ClusterStateGet | [](imtconserver_clusterstatenext.md "ClusterStateNext") [](imtconservertrade.md "IMTConServerTrade") |
| --- | --- | --- |
| --- | --- |

IMTConServer::ClusterStateGet
Get the network connection status with a cluster component having the specified identifier.
C++
MTAPIRES IMTConServer::ClusterStateGet( const UINT64 id, // Identifier IMTConServerRange* state // Connection status object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.ClusterStateGet( ulong id, // Identifier CIMTConServerRange state // Connection status object )  
---  
Python (Manager API)
MTConServer.ClusterStateGet( id # Identifier )  
---  
Parameters
id
[in] The network identifier of the component, the status of connection with which you ant to get. Corresponds to [RequestInfo::id](imtconserver_id.md "Id") of this server (not of the current object).
state
[out] The [network connection status](imtconclusterstate.md "IMTConClusterState") object. The 'state' object must be previously created using the [IMTServerAPI::NetServerClusterStateCreate](imtserverapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method enables the obtaining of the network connection status between the current server ([IMTConServer::Id](imtconserver_id.md "Id")) and another server within the cluster, which is specified as a network identifier.