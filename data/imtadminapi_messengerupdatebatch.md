# MessengerUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerUpdateBatch | [](imtadminapi_messengerupdate.md "MessengerUpdate") [](imtadminapi_messengerdelete.md "MessengerDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerUpdateBatch
Add or edit multiple messenger configurations.
C++
MTAPIRES IMTAdminAPI::MessengerUpdateBatch( IMTConMessenger** configs, // Array of configurations const UINT config_total, // Number of configurations in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerUpdateBatch( CIMTConMessenger[] configs, // Array of configurations MTRetCode[] results // Array of results )  
---  
Python
AdminAPI.MessengerUpdateBatch( configs # Array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/update.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of each configuration applying on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful change sending to a server; change applying results are passed in the 'results' parameter.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
The record correctness is checked before the configuration is added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.