# MailCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailCreate | [](imtmanagerapi_mail.md "Mail Database Functions") [](imtmanagerapi_mailsubscribe.md "MailSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailCreate
Create an object of a message in the internal mail system.
C++
IMTMail* IMTManagerAPI::MailCreate()  
---  
.NET
CIMTMail CIMTManagerAPI.MailCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTMail](imtmail.md "IMTMail") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTMail::Release](imtmail_release.md "Release") method of this object.