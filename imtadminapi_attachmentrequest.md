# AttachmentRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ AttachmentRequest | [](imtadminapi_attachmentaddbatcharray.md "AttachmentAddBatchArray") [](imtadminapi_user.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::AttachmentRequest
Get attachments by identifiers.
C++
MTAPIRES IMTAdminAPI::AttachmentRequest( const UINT64* attachment_ids, // array of identifiers const UINT attachment_ids_total, // number of identifiers in the array IMTAttachmentArray* attachments // array of attachments )  
---  
.NET
MTRetCode CIMTAdminAPI.AttachmentRequest( ulong[] attachment_ids, // array of identifiers CIMTAttachmentArray attachments // array of attachments )  
---  
Parameters
attachment_ids
[in] An array of attachment identifiers ([IMTAttachment::RecordID](imtattachment_recordid.md "RecordID")).
attachment_ids_total
[in] The number of identifiers in the attachment_ids array.
attachments
[out] An array of attachment objects. The 'attachments' object must first be created using the [IMTAdminAPI::AttachmentCreateArray](imtadminapi_attachmentcreatearray.md "AttachmentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method copies data of attachments with the specified IDs, to the 'attachments' object.
The method cannot be called from event handlers (any IMT*Sink class methods).