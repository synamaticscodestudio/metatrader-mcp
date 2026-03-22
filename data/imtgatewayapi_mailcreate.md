# MailCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Mail Database ](imtgatewayapi_mail.md "Mail Database")/ MailCreate | [](imtgatewayapi_mail.md "Mail Database") [](imtgatewayapi_mailsend.md "MailSend") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::MailCreate
Create an object of a message in the internal mail system.
C++
IMTMail* IMTGatewayAPI::MailCreate()  
---  
.NET
CIMTMail CIMTGatewayAPI.MailCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTMail](imtmail.md "IMTMail") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTMail::Release](imtmail_release.md "Release") method of this object.