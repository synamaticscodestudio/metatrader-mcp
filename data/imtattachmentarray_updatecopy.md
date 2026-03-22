# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ UpdateCopy | [](imtattachmentarray_update.md "Update") [](imtattachmentarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::UpdateCopy
Change an attachment at the specified position of an array by copying the parameters of a passed attachment object.
C++
MTAPIRES IMTAttachmentArray::UpdateCopy( const UINT  pos, // position const IMTAttachment* attachment // attachment object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.UpdateCopy( uint  pos, // position CIMTAttachment attachment // attachment object )  
---  
Parameters
pos
[in] Position of an attachment in the array, starting with 0.
attachment
[in] [Attachment object](imtattachment.md "IMTAttachment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the 'attachment' object parameters to the attachment object at the specified position in the array.
Unlike the [IMTAttachmentArray::Update](imtattachmentarray_update.md "Update") method, calling this method does not impose any additional conditions for the control of the 'attachment' object, but is more resource-intensive, since an additional object is created.