# MailSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Mail Database ](serverapi_mail.md "Mail Database")/ MailSubscribe | [](imtserverapi_mailcreate.md "MailCreate") [](imtserverapi_mailunsubscribe.md "MailUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServeAPI::MailSubscribe
Subscribe to events and hooks associated with changes in the mail database.
MTAPIRES IMTServerAPI::MailSubscribe( IMTMailSink* sink // A pointer at the IMTMailSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTMailSink](imtmailsink.md "IMTMailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTMailSink](imtmailsink.md "IMTMailSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::MailUnsubscribe](imtserverapi_mailunsubscribe.md "MailUnsubscribe") or until the plugin is deleted.