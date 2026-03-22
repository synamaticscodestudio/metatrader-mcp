# MailDeleteId (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailDeleteId | [](imtmanagerapi_maildelete.md "MailDelete") [](imtmanagerapi_mailsend.md "MailSend") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailDeleteId
Delete a mail by an ID.
C++
MTAPIRES IMTManagerAPI::MailDeleteId( const UINT64 id // Mail ID )  
---  
.NET
MTRetCode CIMTManagerAPI.MailDeleteId( ulong id // Mail ID )  
---  
Parameters
id
[in] The ID of the email that should be deleted.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTMail::Id](imtmail_id.md "ID") value is used as the identifier.