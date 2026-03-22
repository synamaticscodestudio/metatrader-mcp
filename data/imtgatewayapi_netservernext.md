# NetServerNext (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Network ](imtgatewayapi_config_network.md "Functions")/ NetServerNext | [](imtgatewayapi_netservertotal.md "NetServerTotal") [](imtgatewayapi_netserverget.md "NetServerGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::NetServerNext
Get a server configuration by the index.
C++
MTAPIRES IMTGatewayAPI::NetServerNext( const UINT pos, // Position of the configuration IMTConServer* config // Comment )  
---  
.NET
MTRetCode CIMTGatewayAPI.NetServerNext( uint pos, // Position of the configuration CIMTConServer config // Comment )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] The server configuration object. The config object must first be created using the [IMTGatewayAPI::NetServerCreate](imtgatewayapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a server with a specified index to the config object.