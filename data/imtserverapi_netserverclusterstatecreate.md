# NetServerClusterStateCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerClusterStateCreate | [](imtserverapi_netservercreate.md "NetServerCreate") [](imtserverapi_netserverrangecreate.md "NetServerRangeCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerClusterStateCreate
Create the network connection status object.
IMTConClusterState* IMTServerAPI::NetServerClusterStateCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTConClusterState](imtconclusterstate.md "IMTConClusterState") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConClusterState::Release](imtconclusterstate_release.md "Release") method of this object.