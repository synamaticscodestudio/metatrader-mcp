# NetServerClusterStateCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerClusterStateCreate | [](imtadminapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") [](imtadminapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerClusterStateCreate
Create a network connection status object.
C++
IMTConClusterState* IMTAdminAPI::NetServerClusterStateCreate()  
---  
.NET
CIMTConClusterState CIMTAdminAPI.NetServerClusterStateCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTConClusterState](imtconclusterstate.md "IMTConClusterState") interface. Returns NULL on failure.
Note
The created object must be destroyed by calling the [IMTConClusterState::Release](imtconclusterstate_release.md "Release") method of this object.