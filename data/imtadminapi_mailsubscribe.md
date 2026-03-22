# MailSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Mail Database ](imtadminapi_mail.md "Functions")/ MailSubscribe | [](imtadminapi_mailcreate.md "MailCreate") [](imtadminapi_mailunsubscribe.md "MailUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MailSubscribe
Subscribe to events associated with changes in the mail database.
C++
MTAPIRES IMTAdminAPI::MailSubscribe( IMTMailSink* sink // A pointer at the IMTMailSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.MailSubscribe( CIMTMailSink sink // CIMTMailSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTMailSink](imtmailsink.md "IMTMailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTMailSink](imtmailsink.md "IMTMailSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::MailUnsubscribe](imtadminapi_mailunsubscribe.md "MailUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.