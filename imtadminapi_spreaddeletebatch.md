# SpreadDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadDeleteBatch | [](imtadminapi_spreaddelete.md "SpreadDelete") [](imtadminapi_spreadshift.md "SpreadShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadDelete
Delete multiple spread configurations.
C++
MTAPIRES IMTAdminAPI::SpreadDeleteBatch( IMTConSpread**  configs, // An array of configurations const UINT config_total, // The number of configurations in the array MTAPIRES* results // An array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.SpreadDeleteBatch( CIMTConSpread[] configs, // An array of configurations MTRetCode[] results // An array of results )  
---  
Python
AdminAPI.SpreadDeleteBatch( configs # An array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to delete.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of deletion of each configuration on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful sending of changes to a server; results of applying the changes are passed in the 'results' parameter.
Further Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this object.