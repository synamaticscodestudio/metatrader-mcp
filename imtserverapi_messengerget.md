# MessengerGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerGet | [](imtserverapi_messengernext.md "MessengerNext") [](imtserverapi_messengerverifyphone.md "MessengerVerifyPhone") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerGet
Get a messenger configuration by name.
MTAPIRES IMTServerAPI::MessengerGet( LPCWSTR name, // Configuration name IMTConMessenger* messenger // Messenger configuration object )  
---  
Parameters
name
[in] The name of the configuration.
messenger
[out] Messenger configuration object. The 'messenger' object must be previously created using the [IMTServerAPI::MessengerCreate](imtserverapi_messengercreate.md "MessengerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConMessenger::Name](imtconmessenger_name.md "Name") value is used for the name.