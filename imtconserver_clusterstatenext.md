# ClusterStateNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ ClusterStateNext | [](imtconserver_clusterstatetotal.md "ClusterStateTotal") [](imtconserver_clusterstateget.md "ClusterStateGet") |
| --- | --- | --- |
| --- | --- |

IMTConServer::ClusterStateNext
Get the network connection status with a cluster component having the specified index.
C++
MTAPIRES IMTConServer::ClusterStateNext( const UINT pos, // Component position IMTConServerRange* state // Connection status object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.ClusterStateNext( uint pos, // Component position CIMTConServerRange state // Connection status object )  
---  
Python (Manager API)
MTConServer.ClusterStateNext( pos # Component position )  
---  
Parameters
pos
[in] The position of the cluster component in the list, starting with 0.
state
[out] The [network connection status](imtconclusterstate.md "IMTConClusterState") object. The 'state' object must be previously created using the [IMTServerAPI::NetServerClusterStateCreate](imtserverapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The enables the obtaining of the network connection status between the current server ([IMTConServer::Id](imtconserver_id.md "Id")) and another server within the cluster, which is specified as a position in the list of components.