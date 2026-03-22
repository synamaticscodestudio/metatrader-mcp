# MailUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailUnsubscribe | [](imtmanagerapi_mailsubscribe.md "MailSubscribe") [](imtmanagerapi_mailtotal.md "MailTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailUnsubscribe
Undubscribe from events associated with changes in the mail database.
C++
MTAPIRES IMTManagerAPI::MailUnsubscribe( IMTMailSink* sink // A pointer at the IMTMailSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.MailUnsubscribe( CIMTMailSink sink // CIMTMailSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTMailSink](imtmailsink.md "IMTMailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method [IMTManagerAPI::MailSubscribe](imtmanagerapi_mailsubscribe.md "MailSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.