# NetServerGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerGet | [](imtadminapi_netservernext.md "NetServerNext") [](imtadminapi_tlscertificateupdate.md "TLSCertificateUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerGet
Get a server configuration by the ID.
C++
MTAPIRES IMTAdminAPI::NetServerGet( const UINT64 id, // ID IMTConServer* config // Comment )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerGet( ulong id, // ID CIMTConServer config // Comment )  
---  
Python
AdminAPI.NetServerGet( id # ID )  
---  
Parameters
id
[in] Server ID.
config
[out] The server configuration object. The config object must first be created using the [IMTAdminAPI::NetServerCreate](imtadminapi_netservercreate.md "NetServerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConServer::Id()](imtconserver_id.md "Id") value is used as the ID.