# Messengers (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ Messengers | [](imtadminapi_emailsend.md "EmailSend") [](imtadminapi_messengercreate.md "MessengerCreate") |
| --- | --- | --- |
| --- | --- |

Integration with instant messengers
The MetaTrader 5 platform features the built-in service for sending messages via different service: SMS, messengers, push servers. This service can be used to verify phone numbers which traders specify when opening accounts via client terminals. For more details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration).
The functions described in this section enable users to manage messenger configurations, as well as to subscribe and to unsubscribe from events related to configuration changes.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [MessengerCreate](imtadminapi_messengercreate.md "MessengerCreate") | Create a messenger configuration object. |
| [MessengerCountryCreate](imtadminapi_messengercountrycreate.md "MessengerCountryCreate") | Create an object of a country for which the messenger will be used. |
| [MessengerGroupCreate](imtadminapi_messengergroupcreate.md "MessengerGroupCreate") | Create an object of an account group for which the messenger will be used. |
| [MessengerTemplateCreate](imtadminapi_messengertemplatecreate.md "MessengerTemplateCreate") | Create a message template object that will be used in the messenger. |
| [MessengerUnsubscribe](imtadminapi_messengerunsubscribe.md "MessengerUnsubscribe") | Subscribe to events and hooks associated with messenger configurations. |
| [MessengerUnsubscribe](imtadminapi_messengerunsubscribe.md "MessengerUnsubscribe") | Unsubscribe from events and hooks associated with messenger configurations. |
| [MessengerUpdate](imtadminapi_messengerupdate.md "MessengerUpdate") | Add or update a messenger configuration. |
| [MessengerUpdateBatch](imtadminapi_messengerupdatebatch.md "MessengerUpdateBatch") | Add or edit multiple messenger configurations. |
| [MessengerDelete](imtadminapi_messengerdelete.md "MessengerDelete") | Delete a messenger configuration by name or index. |
| [MessengerDeleteBatch](imtadminapi_messengerdeletebatch.md "MessengerDeleteBatch") | Delete multiple messenger configurations. |
| [MessengerShift](imtadminapi_messengershift.md "MessengerShift") | Change the position of a messenger configuration in the list. |
| [MessengerTotal](imtadminapi_messengertotal.md "MessengerTotal") | Get the total number of messenger configurations available in the platform. |
| [MessengerNext](imtadminapi_messengernext.md "MessengerNext") | Get a messenger configuration by index. |
| [MessengerGet](imtadminapi_messengerget.md "MessengerGet") | Get a messenger configuration by name. |
| [MessengerVerifyPhone](imtadminapi_messengerverifyphone.md "MessengerVerifyPhone") | Verify the validity of a passed phone number based on local phone number formation rules. |
| [MessengerSend](imtadminapi_messengersend.md "MessengerSend") | Send an SMS message. |