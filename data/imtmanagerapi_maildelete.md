# MailDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailDelete | [](imtmanagerapi_mailnext.md "MailNext") [](imtmanagerapi_maildeleteid.md "MailDeleteId") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailDelete
Delete a mail by a position in the mailbox.
C++
MTAPIRES IMTManagerAPI::MailDelete( const UINT pos // Position of the mail )  
---  
.NET
MTRetCode CIMTManagerAPI.MailDelete( uint  pos // Position of the mail )  
---  
Parameters
pos
[in] Position of a mail in a mailbox ranging from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.