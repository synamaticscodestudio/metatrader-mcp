# NetServerGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Network ](imtgatewayapi_config_network.md "Functions")/ NetServerGet | [](imtgatewayapi_netservernext.md "NetServerNext") [](imtgatewayapi_config_spread.md "Configuration of Spreads") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::NetServerGet
Get a server configuration by the ID.
C++
MTAPIRES IMTGatewayAPI::NetServerGet( const UINT64 id, // ID IMTConServer* config // Comment )  
---  
.NET
MTRetCode CIMTGatewayAPI.NetServerGet( ulong id, // ID CIMTConServer  config // Comment )  
---  
Parameters
id
[in] Server ID.
config
[out] The server configuration object. The config object must first be created using the [IMTGatewayAPI::NetServerCreate](imtgatewayapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConServer::Id()](imtconserver_id.md "Id") value is used as the ID.