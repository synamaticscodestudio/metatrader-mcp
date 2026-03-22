# MailTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Mail Database ](imtadminapi_mail.md "Functions")/ MailTotal | [](imtadminapi_mailunsubscribe.md "MailUnsubscribe") [](imtadminapi_mailnext.md "MailNext") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MailTotal
Get the total number of messages in the manager's mailbox.
C++
UINT IMTAdminAPI::MailTotal()  
---  
.NET
uint CIMTAdminAPI.MailTotal()  
---  
Return Value
The total number of messages in a mailbox of the manager whose account is used for connecting to the server.
Note
The method is valid only if the [IMTAdminAPI::PUMP_MODE_MAIL](imtadminapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.