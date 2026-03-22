# AttachmentAddBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ AttachmentAddBatch | [](imtmanagerapi_attachmentadd.md "AttachmentAdd") [](imtmanagerapi_attachmentaddbatcharray.md "AttachmentAddBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::AttachmentAddBatch
Create attachment files for documents or comments in batch.
C++
MTAPIRES IMTManagerAPI::AttachmentAddBatch( IMTAttachmentArray* attachments, // array of attachments MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.AttachmentAddBatch( CIMTAttachmentArray attachments, // array of attachments MTRetCode[] retcodes // array of results )  
---  
Parameters
attachments
[in/out] [Attachment array object](imtattachment.md "IMTAttachment"). You input ready descriptions of attachments. At the output, the server fills the [IMTAttachment::RecordID](imtattachment_recordid.md "RecordID") in these attachments.
results
[out] An array with attachment creation results. The size of the 'results' array must not be less than that of 'attachments'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all the specified comments have been created. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the comments have been created. Analyze the 'results' array for more details of the execution results. The result of creation of each attachment from the 'attachments' array is added to 'results'. The index of a result corresponds to the index of an attachment in the source array.
Note
Once the attachment identifier is received, you can add the attachment to a document or a request by calling the [IMTDocument::AttachmenAdd](imtdocument_attachmentsadd.md "AttachmentsAdd") or [IMTComment::AttachmentAdd](imtcomment_attachmentsadd.md "AttachmentsAdd") respectively.