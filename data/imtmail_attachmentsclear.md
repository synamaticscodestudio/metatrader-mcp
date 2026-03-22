# AttachmentsClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ AttachmentsClear | [](imtmail_attachmentsadd.md "AttachmentsAdd") [](imtmail_attachmentstotal.md "AttachmentsTotal") |
| --- | --- | --- |
| --- | --- |

IMTMail::AttachmentsClear
Clear the list of files attached to an email.
C++
MTAPIRES IMTMail::AttachmentsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.AttachmentsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method removes all attachments.