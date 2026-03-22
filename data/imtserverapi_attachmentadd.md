# AttachmentAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ AttachmentAdd | [](imtserverapi_attachmentcreate.md "AttachmentCreate") [](imtserverapi_attachmentget.md "AttachmentGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AttachmentAdd
Create an attachment file for a document or a comment.
MTAPIRES IMTServerAPI::AttachmentAdd( IMTAttachment* attachment, // Attachment object const UINT64 author // Author )  
---  
Parameters
attachment
[in/out] [Attachment object](imtattachment.md "IMTAttachment"). A ready description of the attachment is input. At the output, the server fills the [IMTAttachment::RecordID](imtattachment_recordid.md "RecordID") identifier in this description.
author
[in] The login of the manager account, on whose behalf the attachment is being added. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After receiving an attachment ID, you can add it to a document or a comment by calling the [IMTDocument::AttachmenAdd](imtdocument_attachmentsadd.md "AttachmentsAdd") or [IMTComment::AttachmentAdd](imtcomment_attachmentsadd.md "AttachmentsAdd") method, respectively.