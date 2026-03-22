# MailUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Mail Database ](serverapi_mail.md "Mail Database")/ MailUnsubscribe | [](imtserverapi_mailsubscribe.md "MailSubscribe") [](imtserverapi_mailsend.md "MailSend") |
| --- | --- | --- |
| --- | --- |

IMTServeAPI::MailUnsubscribe
Undubscribe from events and hooks associated with changes in the mail database.
MTAPIRES IMTServerAPI::MailUnsubscribe( IMTMailSink* sink // A pointer at the IMTMailSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTMailSink](imtmailsink.md "IMTMailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::MailSubscribe](imtserverapi_mailsubscribe.md "MailSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.