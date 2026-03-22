# MessengerUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerUpdate | [](imtadminapi_messengerunsubscribe.md "MessengerUnsubscribe") [](imtadminapi_messengerupdatebatch.md "MessengerUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerAdd
Add or update a messenger configuration.
C++
MTAPIRES IMTAdminAPI::MessengerAdd( IMTConMessenger* config // Messenger configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerUpdate( CIMTConMessenger config // Messenger configuration object )  
---  
Python
AdminAPI.MessengerUpdate( config # Messenger configuration object )  
---  
Parameters
config
[in] Messenger configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be added or updated from the applications running on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
The record correctness is checked before the configuration is added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.