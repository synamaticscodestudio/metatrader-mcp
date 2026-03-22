# NetServerCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerCreate | [](serverapi_config_network.md "Network") [](imtserverapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerCreate
Create an object of configuration of the platform components.
IMTConServer* IMTServerAPI::NetServerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServer](imtconserver.md "IMTConServer") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConServer::Release](imtconserver_release.md "Release") method of this object.