# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Update | [](imtattachmentarray_detach.md "Detach") [](imtattachmentarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Update
Change an attachment at the specified position of the array.
C++
MTAPIRES IMTAttachmentArray::Update( const UINT pos, // position IMTAttachment* attachment // attachment object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.Update( uint pos, // position CIMTAttachment attachment // attachment object )  
---  
Parameters
pos
[in] Position of an attachment in the array, starting with 0.
attachment
[in] [Attachment object](imtattachment.md "IMTAttachment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTAttachmentArray::Update method deletes the previous element ([IMTAttachment::Release](imtattachment_release.md "Release") call) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (by a call of IMTAttachmentArray::Release), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object causes its pointer stored inside an array object to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTAttachmentArray *array =api->AttachmentCreateArray();  IMTAttachment *attachment1=api->AttachmentCreate(); IMTAttachment *attachment2=api->AttachmentCreate(); //--- array->Add(attachment1); array->Update(0,attachment2); // the first element (the attachment1 object) is replaced by attachment2 //--- after that the attachment1 element will be released via Release, and the attachment2 lifetime will be controlled by the array  
---