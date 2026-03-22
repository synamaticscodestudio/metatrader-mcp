# AttachmentsAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ AttachmentsAdd | [](imtdocument_documentstatus.md "DocumentStatus") [](imtdocument_attachmentsclear.md "AttachmentsClear") |
| --- | --- | --- |
| --- | --- |

IMTDocument::AttachmentsAdd
Add a file to a document.
C++
MTAPIRES IMTDocument::AttachmentsAdd( IMTAttachment* attachment // Attachment object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.AttachmentsAdd( CIMTAttachment attachment // Attachment object )  
---  
Parameters
attachment
[in] [Attachment object](imtattachment.md "IMTAttachment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The [IMTAttachment::RecordID](imtattachment_recordid.md "RecordID") identifier must be specified for the attachment to be added. To get the identifier, call the [IMTServerAPI::AttachmentAdd](imtserverapi_attachmentadd.md "AttachmentAdd") method and only after that add the ready attachment object to a document. Actually, IMTDocument::AttachmentsAdd does not create an attachment, but it only adds a link to a ready attachment in a document.