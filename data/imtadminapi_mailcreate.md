# MailCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Mail Database ](imtadminapi_mail.md "Functions")/ MailCreate | [](imtadminapi_mail.md "Functions") [](imtadminapi_mailsubscribe.md "MailSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MailCreate
Create an object of a message in the internal mail system.
C++
IMTMail* IMTAdminAPI::MailCreate()  
---  
.NET
CIMTMail CIMTAdminAPI.MailCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTMail](imtmail.md "IMTMail") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTMail::Release](imtmail_release.md "Release") method of this object.