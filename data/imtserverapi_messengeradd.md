# MessengerAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerAdd | [](imtserverapi_messengerunsubscribe.md "MessengerUnsubscribe") [](imtserverapi_messengerdelete.md "MessengerDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerAdd
Add or update a messenger configuration.
MTAPIRES IMTServerAPI::MessengerAdd( IMTConMessenger* config // Messenger configuration object )  
---  
Parameters
config
[in] Messenger configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the record already exists. If the record exists, it is updated, otherwise a new one is added. A key field for comparison is the configuration name [IMTConMessenger::Name()](imtconmessenger_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConMessengerSink::OnMessengerUpdate](imtconmessengersink_onmessengerupdate.md "OnMessengerUpdate") notification method is not called.
A configuration can only be added or updated from the plugins running on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
The record correctness is checked before the configuration is added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.