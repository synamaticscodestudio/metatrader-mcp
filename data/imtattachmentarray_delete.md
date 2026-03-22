# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Delete | [](imtattachmentarray_addcopy.md "AddCopy") [](imtattachmentarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Delete
Delete an attachment object by its position.
C++
MTAPIRES IMTAttachmentArray::Delete( const UINT pos // attachment position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.Delete( uint pos // attachment position )  
---  
Parameters
pos
[in] Position of an attachment in the array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The deleted object will be automatically released by calling the [IMTAttachment::Release](imtattachment_release.md "Release") method.