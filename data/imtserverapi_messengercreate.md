# MessengerCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerCreate | [](serverapi_config_messenger.md "Messengers") [](imtserverapi_messengercountrycreate.md "MessengerCountryCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerCreate
Create a messenger configuration object.
IMTConMessenger* IMTServerAPI::MessengerCreate()  
---  
Return Value
Return the pointer to a created object implementing the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object.