# MessengerGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerGet | [](imtadminapi_messengernext.md "MessengerNext") [](imtadminapi_messengerverifyphone.md "MessengerVerifyPhone") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerGet
Get a messenger configuration by name.
C++
MTAPIRES IMTAdminAPI::MessengerGet( LPCWSTR name, // Configuration name IMTConMessenger* messenger // Messenger configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerGet( string name, // Configuration name CIMTConMessenger messenger // Messenger configuration object )  
---  
Python
AdminAPI.MessengerGet( name  # Configuration name )  
---  
Parameters
name
[in] The name of the configuration.
messenger
[out] Messenger configuration object. The 'messenger' object must be previously created using the [IMTAdminAPI::MessengerCreate](imtadminapi_messengercreate.md "MessengerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConMessenger::Name](imtconmessenger_name.md "Name") value is used for the name.