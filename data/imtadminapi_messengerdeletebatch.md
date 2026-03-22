# MessengerDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerDeleteBatch | [](imtadminapi_messengerdelete.md "MessengerDelete") [](imtadminapi_messengershift.md "MessengerShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerDeleteBatch
Delete multiple messenger configurations.
C++
MTAPIRES IMTAdminAPI::MessengerDeleteBatch( IMTConMessenger**  configs, // Array of configurations const UINT config_total, // Number of configurations in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerDeleteBatch( CIMTConMessenger[] configs, // Array of configurations MTRetCode[] results // Array of results )  
---  
Python
AdminAPI.MessengerDeleteBatch( configs # Array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to delete.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of each configuration deletion on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful change sending to a server; change applying results are passed in the 'results' parameter.
Note
Configurations can only be deleted when connected to the main trade server. In all other cases, the [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code is returned. If the object is not found, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this object.