# MailCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Mail Database ](serverapi_mail.md "Mail Database")/ MailCreate | [](serverapi_mail.md "Mail Database") [](imtserverapi_mailsubscribe.md "MailSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServeAPI::MailCreate
Create an object of a message in the internal mail system.
IMTMail* IMTServerAPI::MailCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTMail](imtmail.md "IMTMail") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTMail::Release](imtmail_release.md "Release") method of this object.