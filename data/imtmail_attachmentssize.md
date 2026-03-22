# AttachmentsSize (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ AttachmentsSize | [](imtmail_attachmentsbody.md "AttachmentsBody") [](imtmail_attachmentsname.md "AttachmentsName") |
| --- | --- | --- |
| --- | --- |

IMTMail::AttachmentsSize
Get the size of an attachment by its position.
C++
UINT IMTMail::AttachmentsSize( const UINT pos // File position ) const  
---  
.NET (Gateway/Manager API)
uint CIMTMail.AttachmentsSize( uint pos // File position )  
---  
Parameters
pos
[in] The position of an attached file in the list, starting with 0.
Return Value
The size of an attachment at the specified position in bytes.