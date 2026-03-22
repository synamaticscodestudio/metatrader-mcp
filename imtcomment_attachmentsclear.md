# AttachmentsClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ AttachmentsClear | [](imtcomment_attachmentsadd.md "AttachmentsAdd") [](imtcomment_attachmentstotal.md "AttachmentsTotal") |
| --- | --- | --- |
| --- | --- |

IMTComment::AttachmentsClear
Clear the list of comment [attachments](imtattachment.md "IMTAttachment").
C++
MTAPIRES IMTComment::AttachmentsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.AttachmentsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears the entire list of attachments in a comment.