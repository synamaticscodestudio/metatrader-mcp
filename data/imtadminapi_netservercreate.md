# NetServerCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerCreate | [](imtadminapi_config_network.md "Functions") [](imtadminapi_netserverrangecreate.md "NetServerRangeCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerCreate
Create an object of configuration of the platform components.
C++
IMTConServer* IMTAdminAPI::NetServerCreate()  
---  
.NET
CIMTConServer CIMTAdminAPI.NetServerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServer](imtconserver.md "IMTConServer") interface. In case of failure, it returns Null.
Note
The created object must be deleted by calling the [IMTConServer::Release](imtconserver_release.md "Release") method of this object.