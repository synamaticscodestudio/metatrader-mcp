# MessengerDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerDelete | [](imtserverapi_messengeradd.md "MessengerAdd") [](imtserverapi_messengershift.md "MessengerShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerDelete
Delete a messenger configuration by name.
MTAPIRES IMTServerAPI::MessengerDelete( LPCWSTR name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The [IMTConMessenger::Name](imtconmessenger_name.md "Name") value is used as the configuration name.
IMTServerAPI::MessengerDelete
Delete a messenger configuration by index.
MTAPIRES IMTServerAPI::MessengerDelete( const UINT pos // Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.