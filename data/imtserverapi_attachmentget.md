# AttachmentGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ AttachmentGet | [](imtserverapi_attachmentadd.md "AttachmentAdd") [](serverapi_users.md "Clients") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::AttachmentGet
Get an attachment by identifier.
MTAPIRES IMTServerAPI::AttachmentGet( const UINT64 attachment_id, // Identifier IMTAttachment* attachment // Attachment object )  
---  
Parameters
attachment_id
[in] Attachment identifier ([IMTAttachment::RecordID](imtattachment_recordid.md "RecordID")).
attachment
[out] Attachment object. The 'attachment' object must be previously created using the [IMTServerAPI::AttachmentCreate](imtserverapi_attachmentcreate.md "AttachmentCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies data of an attachment with the specified ID, to the 'attachment' object.