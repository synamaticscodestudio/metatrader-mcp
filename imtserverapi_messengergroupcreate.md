# MessengerGroupCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerGroupCreate | [](imtserverapi_messengercountrycreate.md "MessengerCountryCreate") [](imtserverapi_messengertemplatecreate.md "MessengerTemplateCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerGroupCreate
Create an object of an account group for which the messenger will be used.
IMTConMessengerGroup* IMTServerAPI::MessengerGroupCreate()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConMessengerGroup](imtconmessengergroup.md "IMTConMessengerGroup") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConMessengerGroup::Release](imtconmessengergroup_release.md "Release") method of this object.