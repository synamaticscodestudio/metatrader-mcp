# AttachmentsAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ AttachmentsAdd | [](imtcomment_commentresult.md "CommentResult") [](imtcomment_attachmentsclear.md "AttachmentsClear") |
| --- | --- | --- |
| --- | --- |

IMTComment::AttachmentsAdd
Add [attachment](imtattachment.md "IMTAttachment") to a comment.
C++
MTAPIRES IMTComment::AttachmentsAdd( IMTAttachment* attachment // Attachment object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.AttachmentsAdd( CIMTAttachment attachment // Attachment object )  
---  
Parameters
attachment
[in] [Attachment object](imtattachment.md "IMTAttachment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The [IMTAttachment::RecordID](imtattachment_recordid.md "RecordID") identifier must be specified for the attachment to be added. To get the identifier, call the [IMTServerAPI::AttachmentAdd](imtserverapi_attachmentadd.md "AttachmentAdd") method and only after that add the ready attachment object to a comment. Actually, IMTComment::AttachmentsAdd does not create an attachment, but it only adds to a comment a link to a ready attachment.