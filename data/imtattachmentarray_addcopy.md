# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ AddCopy | [](imtattachmentarray_add.md "Add") [](imtattachmentarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::AddCopy
Add a copy of an attachment object to the end of an array.
C++
MTAPIRES IMTAttachmentArray::AddCopy( const IMTAttachment* attachment // attachment to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.AddCopy( CIMTAttachment attachment // attachment to be added )  
---  
Parameters
attachment
[in] [Attachment object](imtattachment.md "IMTAttachment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method creates a copy of the attachment object and inserts it at the end of the array.
Unlike [IMTAttachmentArray::Add(IMTAttachment* attachment)](imtattachmentarray_add.md "Add"), calling this method does not impose any additional conditions for the control of the 'attachment' object, but is more resource-intensive, since an additional object is created.
IMTAttachmentArray::AddCopy
Add copies of attachment objects to an array.
C++
MTAPIRES IMTAttachmentArray::AddCopy( const IMTAttachmentArray* array // array of attachments to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.AddCopy( CIMTAttachmentArray  array // array of attachments to be added )  
---  
Parameters
array
[in] Object of the array of attachments.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of attachment objects belonging to the 'array' object and inserts them at the end of the current array.
Unlike [IMTAttachmentArray::Add(IMTAttachmentArray* array)](imtattachmentarray_add.md "Add"), this method call does not change the source 'array' object but is more resource-intensive, since additional objects are created.