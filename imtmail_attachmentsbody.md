# AttachmentsBody (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ AttachmentsBody | [](imtmail_attachmentstotal.md "AttachmentsTotal") [](imtmail_attachmentssize.md "AttachmentsSize") |
| --- | --- | --- |
| --- | --- |

IMTMail::AttachmentsBody
Get the attachment body by its position.
C++
LPVOID IMTMail::AttachmentsBody( const UINT pos // Position of attachment ) const  
---  
.NET (Gateway/Manager API)
byte[] CIMTMail.AttachmentsBody( uint pos // Position of attachment )  
---  
Parameters
pos
[in] The position of an attached file in the list, starting with 0.
Return Value
A pointer to the attachment body at the specified position.
Note
The returned pointer is valid until the object is deleted by calling [IMTMail::Release](imtmail_release.md "Release") or another object control method ([IMTMail::AttachmentsAdd](imtmail_attachmentsadd.md "AttachmentsAdd") or [IMTMail::AttachmentsClear](imtmail_attachmentsclear.md "AttachmentsClear")).