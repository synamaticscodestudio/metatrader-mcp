# MailNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Mail Database ](imtadminapi_mail.md "Functions")/ MailNext | [](imtadminapi_mailtotal.md "MailTotal") [](imtadminapi_maildelete.md "MailDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MailNext
Get an email by a position in the mailbox.
C++
MTAPIRES IMTAdminAPI::MailNext( const UINT pos, // Mail position IMTMail* mail // Mail object )  
---  
.NET
MTRetCode CIMTAdminAPI.MailNext( uint pos, // Mail position CIMTMail mail // Mail object )  
---  
Parameters
pos
[in] Position of a message in a mailbox ranging from 0.
mail
[out] An object of the mail. The mail object must be first created using the [IMTAdminAPI::MailCreate](imtadminapi_mailcreate.md "MailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies data of the mail at the specified position to the mail object. The method is valid only if the [IMTAdminAPI::PUMP_MODE_MAIL](imtadminapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.
To prevent from the slowdown of the API performance and from unnecessary traffic, the server sends large emails without bodies and attachments. If [IMTMail::BodySize](imtmail_body.md "Body") is equal to 0, request the email body using the [IMTAdminAPI::MailBodyRequest](imtadminapi_mailbodyrequest.md "MailBodyRequest") method and pass to it the ID of the received email [IMTMail::Id](imtmail_id.md "ID").
Applications that use Manager API version below 1655, always receive a full email. IMTAdminAPI::MailBodyRequest is not supported in such applications.