# NetServerNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Network ](imtreportapi_config_network.md "Network")/ NetServerNext | [](imtreportapi_netservertotal.md "NetServerTotal") [](imtreportapi_netserverget.md "NetServerGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::NetServerNext
Get a server configuration by the index.
MTAPIRES IMTReportAPI::NetServerNext( const UINT pos, // Position of the configuration IMTConServer* config // Comment )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] The server configuration object. The config object must first be created using the [IMTReportAPI::NetServerCreate](imtreportapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a server with a specified index to the config object.