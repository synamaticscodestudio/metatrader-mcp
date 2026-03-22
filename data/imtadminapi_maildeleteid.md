# MailDeleteId (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Mail Database ](imtadminapi_mail.md "Functions")/ MailDeleteId | [](imtadminapi_maildelete.md "MailDelete") [](imtadminapi_mailsend.md "MailSend") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MailDeleteId
Delete a mail by an ID.
C++
MTAPIRES IMTAdminAPI::MailDeleteId( const UINT64 id // Mail ID )  
---  
.NET
MTRetCode CIMTAdminAPI.MailDeleteId( ulong id // Mail ID )  
---  
Parameters
id
[in] The ID of the email that should be deleted.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTMail::Id](imtmail_id.md "ID") value is used as the identifier.