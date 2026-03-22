# MessengerNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerNext | [](imtserverapi_messengertotal.md "MessengerTotal") [](imtserverapi_messengerget.md "MessengerGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerNext
Get a messenger configuration by index.
MTAPIRES IMTServerAPI::MessengerNext( const UINT pos, // Configuration position IMTConMessenger* messenger // Messenger configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
messenger
[out] Messenger configuration object. The 'messenger' object must be previously created using the [IMTServerAPI::MessengerCreate](imtserverapi_messengercreate.md "MessengerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a messenger with a specified index to the 'messenger' object.