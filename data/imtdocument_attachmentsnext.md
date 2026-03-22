# AttachmentsNext (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ AttachmentsNext | [](imtdocument_attachmentstotal.md "AttachmentsTotal") [](imtdocumentarray.md "IMTDocumentArray") |
| --- | --- | --- |
| --- | --- |

IMTDocument::AttachmentsNext
Get the file ID from a document, by index.
C++
MTAPIRES IMTDocument::AttachmentsNext( const UINT pos, // Position in the list UINT64& attachment_id, // Identifier MTAPISTR& attachment_name, // Name UINT& attachment_size // Size ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.AttachmentsNext( uint pos, // Position in the list out ulong attachment_id, // Identifier out string attachment_name, // Name out uint attachment_size // Size )  
---  
Parameters
pos
[in] File position starting with 0.
attachment_id
[out] File identifier ([IMTAttachment::RecordId](imtattachment_recordid.md "RecordID")).
attachment_name
[out] File name ([IMTAttachment::FileName](imtattachment_filename.md "FileName")).
attachment_size
[out] File size in bytes ([IMTAttachment::Size](imtattachment_filesize.md "FileSize")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To get a file, use the [IMTServerAPI::AttachmentGet](imtserverapi_attachmentget.md "AttachmentGet") method by passing an appropriate identifier to it.