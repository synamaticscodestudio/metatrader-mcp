# Messengers (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Messengers | [](imtserverapi_emailsend.md "EmailSend") [](imtserverapi_messengercreate.md "MessengerCreate") |
| --- | --- | --- |
| --- | --- |

Integration with instant messengers
The MetaTrader 5 platform features the built-in service for sending messages via different service: SMS, messengers, push servers. This service can be used to verify phone numbers which traders specify when opening accounts via client terminals. For more details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration).
The functions described in this section enable users to manage messenger configurations, as well as to subscribe and to unsubscribe from events related to configuration changes.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [MessengerCreate](imtserverapi_messengercreate.md "MessengerCreate") | Create a messenger configuration object. |
| [MessengerCountryCreate](imtserverapi_messengercountrycreate.md "MessengerCountryCreate") | Create an object of a country for which the messenger will be used. |
| [MessengerGroupCreate](imtserverapi_messengergroupcreate.md "MessengerGroupCreate") | Create an object of an account group for which the messenger will be used. |
| [MessengerTemplateCreate](imtserverapi_messengertemplatecreate.md "MessengerTemplateCreate") | Create a message template object that will be used in the messenger. |
| [MessengerSubscribe](imtserverapi_messengersubscribe.md "MessengerSubscribe") | Subscribe to events and hooks associated with messenger configurations. |
| [MessengerUnsubscribe](imtserverapi_messengerunsubscribe.md "MessengerUnsubscribe") | Unsubscribe from events and hooks associated with messenger configurations. |
| [MessengerAdd](imtserverapi_messengeradd.md "MessengerAdd") | Add or update a messenger configuration. |
| [MessengerDelete](imtserverapi_messengerdelete.md "MessengerDelete") | Delete a messenger configuration by name or index. |
| [MessengerShift](imtserverapi_messengershift.md "MessengerShift") | Change the position of a messenger configuration in the list. |
| [MessengerTotal](imtserverapi_messengertotal.md "MessengerTotal") | Get the total number of messenger configurations available in the platform. |
| [MessengerNext](imtserverapi_messengernext.md "MessengerNext") | Get a messenger configuration by index. |
| [MessengerGet](imtserverapi_messengerget.md "MessengerGet") | Get a messenger configuration by name. |
| [MessengerVerifyPhone](imtserverapi_messengerverifyphone.md "MessengerVerifyPhone") | Verify the validity of a passed phone number based on local phone number formation rules. |
| [MessengerSend](imtserverapi_messengersend.md "MessengerSend") | Send an SMS message. |