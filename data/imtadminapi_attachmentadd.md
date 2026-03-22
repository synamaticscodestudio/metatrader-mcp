# AttachmentAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ AttachmentAdd | [](imtadminapi_attachmentcreatearray.md "AttachmentCreateArray") [](imtadminapi_attachmentaddbatch.md "AttachmentAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AttachmentAdd
Create an attachment file for a document or a comment.
C++
MTAPIRES IMTAdminAPI::AttachmentAdd( IMTAttachment* attachment // Attachment object )  
---  
.NET
MTRetCode CIMTAdminAPI.AttachmentAdd( CIMTAttachment attachment // Attachment object )  
---  
Parameters
attachment
[in/out] [Attachment object](imtattachment.md "IMTAttachment"). A ready description of the attachment is input. At the output, the server fills the [IMTAttachment::RecordID](imtattachment_recordid.md "RecordID") identifier in this description.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Once the attachment identifier is received, you can add the attachment to a document or a request by calling the [IMTDocument::AttachmenAdd](imtdocument_attachmentsadd.md "AttachmentsAdd") or [IMTComment::AttachmentAdd](imtcomment_attachmentsadd.md "AttachmentsAdd") respectively.