# AttachmentsNext (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ AttachmentsNext | [](imtcomment_attachmentstotal.md "AttachmentsTotal") [](imtcommentarray.md "IMTCommentArray") |
| --- | --- | --- |
| --- | --- |

IMTComment::AttachmentsNext
Get the comment attachment identifier by index.
C++
MTAPIRES IMTComment::AttachmentsNext( const UINT pos, // Position in the list UINT64& attachment_id, // Identifier MTAPISTR& attachment_name, // Name UINT& attachment_size // Size ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.AttachmentsNext( uint pos, // Position in the list out ulong attachment_id, // Identifier out string attachment_name, // Name out uint attachment_size // Size )  
---  
Parameters
pos
[in] Attachment position starting with 0.
attachment_id
[out] Attachment ID ([IMTAttachment::RecordId](imtattachment_recordid.md "RecordID")).
attachment_name
[out] Attachment name ([IMTAttachment::FileName](imtattachment_filename.md "FileName")).
attachment_size
[out] Attachment size in bytes ([IMTAttachment::Size](imtattachment_filesize.md "FileSize")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To get an attachment, use the [IMTServerAPI::AttachmentGet](imtserverapi_attachmentget.md "AttachmentGet") method by passing the appropriate identifier to it.