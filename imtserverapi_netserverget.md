# NetServerGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerGet | [](imtserverapi_netservernext.md "NetServerNext") [](imtserverapi_tlscertificateupdate.md "TLSCertificateUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerGet
Get a server configuration by the ID.
MTAPIRES IMTServerAPI::NetServerGet( const UINT64 id, // ID IMTConServer* config // Comment )  
---  
Parameters
id
[in] Server ID.
config
[out] The server configuration object. The config object must first be created using the [IMTServerAPI::NetServerCreate](imtserverapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConServer::Id()](imtconserver_id.md "Id") value is used as the ID.