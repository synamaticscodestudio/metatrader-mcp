# NetServerDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerDeleteBatch | [](imtadminapi_netserverdelete.md "NetServerDelete") [](imtadminapi_netservershift.md "NetServerShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerDeleteBatch
Delete multiple server configurations.
C++
MTAPIRES IMTAdminAPI::NetServerDeleteBatch( IMTConServer**  configs, // An array of configurations const UINT config_total, // The number of configurations in the array MTAPIRES* results // An array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerDeleteBatch( CIMTConServer[] configs, // An array of configurations MTRetCode[] results // An array of results )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to delete.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of deletion of each configuration on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Further Note
A configuration can only be deleted from the applications that run on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this object.