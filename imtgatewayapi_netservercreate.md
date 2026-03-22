# NetServerCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Network ](imtgatewayapi_config_network.md "Functions")/ NetServerCreate | [](imtgatewayapi_config_network.md "Functions") [](imtgatewayapi_netserverrangecreate.md "NetServerRangeCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::NetServerCreate
Create an object of configuration of the platform components.
C++
IMTConServer* IMTGatewayAPI::NetServerCreate()  
---  
.NET
CIMTConServer CIMTGatewayAPI.NetServerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServer](imtconserver.md "IMTConServer") interface. In case of failure, it returns Null.
Note
The created object must be deleted by calling the [IMTConServer::Release](imtconserver_release.md "Release") method of this object.