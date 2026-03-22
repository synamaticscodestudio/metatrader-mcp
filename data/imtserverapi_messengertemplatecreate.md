# MessengerTemplateCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerTemplateCreate | [](imtserverapi_messengergroupcreate.md "MessengerGroupCreate") [](imtserverapi_messengersubscribe.md "MessengerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerTemplateCreate
Create a message template object that will be used in the messenger.
IMTConMessengerTemplate* IMTServerAPI::MessengerTemplateCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConMessengerTemplate](imtconmessengertemplate.md "IMTConMessengerTemplate") interface. On failure, NULL is returned.
Note
The created object must be destroyed by calling its [IMTConMessengerTemplate::Release](imtconmessengertemplate_release.md "Release") method.