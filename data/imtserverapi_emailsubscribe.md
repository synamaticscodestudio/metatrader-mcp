# EmailSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailSubscribe | [](imtserverapi_emailcreate.md "EmailCreate") [](imtserverapi_emailunsubscribe.md "EmailUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailSubscribe
Subscribe to events and hooks related to mail server configurations.
MTAPIRES IMTServerAPI::EmailSubscribe( IMTConEmailSink* sink // A pointer to the IMTConEmailSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConEmailSink](imtconemailsink.md "IMTConEmailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConEmailSink](imtconemailsink.md "IMTConEmailSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::EmailUnsubscribe](imtserverapi_emailunsubscribe.md "EmailUnsubscribe") or until the plugin is deleted.