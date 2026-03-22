# MailSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailSubscribe | [](imtmanagerapi_mailcreate.md "MailCreate") [](imtmanagerapi_mailunsubscribe.md "MailUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailSubscribe
Subscribe to events associated with changes in the mail database.
C++
MTAPIRES IMTManagerAPI::MailSubscribe( IMTMailSink* sink // A pointer at the IMTMailSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.MailSubscribe( CIMTMailSink sink // CIMTMailSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTMailSink](imtmailsink.md "IMTMailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTMailSink](imtmailsink.md "IMTMailSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::MailUnsubscribe](imtmanagerapi_mailunsubscribe.md "MailUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with mail database changes, the pumping mode [IMTManagerAPI::PUMP_MODE_MAIL](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.