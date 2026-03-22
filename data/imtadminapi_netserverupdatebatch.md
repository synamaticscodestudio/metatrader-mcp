# NetServerUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerUpdateBatch | [](imtadminapi_netserverupdate.md "NetServerUpdate") [](imtadminapi_netserverdelete.md "NetServerDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerUpdateBatch
Add or edit multiple server configurations.
C++
MTAPIRES IMTAdminAPI::NetServerUpdateBatch( IMTConServer**  configs, // An array of configurations const UINT config_total, // The number of configurations in the array MTAPIRES* results // An array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerUpdateBatch( CIMTConServer[] configs, // An array of configurations MTRetCode[] results // An array of results )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/update.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of applying of each configuration change on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful sending of changes to a server; results of applying the changes are passed in the 'results' parameter.
Further Note
A configuration can only be added or updated from the applications that run on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding an entry, its correctness is checked. If an entry is incorrect, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this entry.