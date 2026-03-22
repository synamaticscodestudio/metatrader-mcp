# MailTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailTotal | [](imtmanagerapi_mailunsubscribe.md "MailUnsubscribe") [](imtmanagerapi_mailnext.md "MailNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailTotal
Get the total number of messages in the manager's mailbox.
C++
UINT IMTManagerAPI::MailTotal()  
---  
.NET
uint CIMTManagerAPI.MailTotal()  
---  
Return Value
The total number of messages in a mailbox of the manager whose account is used for connecting to the server.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_MAIL](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.