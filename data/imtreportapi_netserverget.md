# NetServerGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Network ](imtreportapi_config_network.md "Network")/ NetServerGet | [](imtreportapi_netservernext.md "NetServerNext") [](imtreportapi_config_plugin.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::NetServerGet
Get a server configuration by the ID.
MTAPIRES IMTReportAPI::NetServerGet( const UINT64 id, // ID IMTConServer* config // Comment )  
---  
Parameters
id
[in] Server ID.
config
[out] The server configuration object. The config object must first be created using the [IMTReportAPI::NetServerCreate](imtreportapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConServer::Id()](imtconserver_id.md "Id") value is used as the ID.