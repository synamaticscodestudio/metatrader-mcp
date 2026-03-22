# EmailUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailUnsubscribe | [](imtserverapi_emailsubscribe.md "EmailSubscribe") [](imtserverapi_emailadd.md "EmailAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailUnsubscribe
Unsubscribe from events and hooks related to mail server configurations.
MTAPIRES IMTServerAPI::EmailUnsubscribe( IMTConEmailSink* sink // A pointer to the IMTConEmailSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConEmailSink](imtconemailsink.md "IMTConEmailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::EmailSubscribe](imtserverapi_emailsubscribe.md "EmailSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.