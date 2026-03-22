# MailDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Mail Database ](imtadminapi_mail.md "Functions")/ MailDelete | [](imtadminapi_mailnext.md "MailNext") [](imtadminapi_maildeleteid.md "MailDeleteId") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MailDelete
Delete a mail by a position in the mailbox.
C++
MTAPIRES IMTAdminAPI::MailDelete( const UINT pos // Position of the mail )  
---  
.NET
MTRetCode CIMTAdminAPI.MailDelete( uint pos // Position of the mail )  
---  
Parameters
pos
[in] Position of a mail in a mailbox ranging from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.