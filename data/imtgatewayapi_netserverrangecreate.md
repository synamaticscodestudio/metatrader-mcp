# NetServerRangeCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Network ](imtgatewayapi_config_network.md "Functions")/ NetServerRangeCreate | [](imtgatewayapi_netservercreate.md "NetServerCreate") [](imtgatewayapi_netserversubscribe.md "NetServerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::NetServerRangeCreate
Create an object of the range of orders, deals or accounts.
C++
IMTConServerRange* IMTGatewayAPI::NetServerRangeCreate()  
---  
.NET
CIMTConServerRange CIMTGatewayAPI.NetServerRangeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServerRange](imtconserverrange.md "IMTConServerRange") interface. In case of failure, it returns Null.
Note
The created object must be deleted by calling the [IMTConServerRange::Release](imtconserverrange_release.md "Release") method of this object.