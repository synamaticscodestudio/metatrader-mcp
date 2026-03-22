# MessengerNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerNext | [](imtadminapi_messengertotal.md "MessengerTotal") [](imtadminapi_messengerget.md "MessengerGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerNext
Get a messenger configuration by index.
C++
MTAPIRES IMTAdminAPI::MessengerNext( const UINT pos, // Configuration position IMTConMessenger* messenger // Messenger configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerNext( uint  pos, // Configuration position CIMTConMessenger messenger // Messenger configuration object )  
---  
Python
AdminAPI.MessengerNext( pos # Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
messenger
[out] Messenger configuration object. The 'messenger' object must be previously created using the [IMTAdminAPI::MessengerCreate](imtadminapi_messengercreate.md "MessengerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a messenger with a specified index to the 'messenger' object.