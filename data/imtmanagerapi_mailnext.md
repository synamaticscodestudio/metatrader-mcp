# MailNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailNext | [](imtmanagerapi_mailtotal.md "MailTotal") [](imtmanagerapi_maildelete.md "MailDelete") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailNext
Get a mail by a position in the mailbox.
C++
MTAPIRES IMTManagerAPI::MailNext( const UINT pos, // Mail position IMTMail* mail // Mail object )  
---  
.NET
MTRetCode CIMTManagerAPI.MailNext( uint pos, // Mail position CIMTMail mail // Mail object )  
---  
Parameters
pos
[in] Position of a message in a mailbox ranging from 0.
mail
[out] An object of the mail. The mail object must be first created using the [IMTManagerAPI::MailCreate](imtmanagerapi_mailcreate.md "MailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies data of the mail at the specified position to the mail object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_MAIL](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.