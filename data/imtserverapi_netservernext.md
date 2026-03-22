# NetServerNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerNext | [](imtserverapi_netservertotal.md "NetServerTotal") [](imtserverapi_netserverget.md "NetServerGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerNext
Get a server configuration by the index.
MTAPIRES IMTServerAPI::NetServerNext( const UINT pos, // Position of the configuration IMTConServer* config // Comment )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] The server configuration object. The config object must first be created using the [IMTServerAPI::NetServerCreate](imtserverapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a server with a specified index to the config object.