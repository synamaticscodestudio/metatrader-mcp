# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Add | [](imtattachmentarray_clear.md "Clear") [](imtattachmentarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Add
Add an attachment object at the end of an array.
C++
MTAPIRES IMTAttachmentArray::Add( IMTAttachment* attachment // attachment to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.Add( CIMTAttachment attachment // attachment to be added )  
---  
Parameters
attachment
[in] [Attachment object](imtattachment.md "IMTAttachment").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the "attachment" object is passed to the array object. Thus, when deleting an array object (by a call of [IMTAttachmentArray::Release](imtattachmentarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTAttachmentArray::Add
Add an array of attachment objects to the end of an array.
C++
MTAPIRES IMTAttachmentArray::Add( IMTAttachmentArray* array // array of attachments to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAttachmentArray.Add( CIMTAttachmentArray array // array of attachments to be added )  
---  
Parameters
array
[in] Object of the array of attachments.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places the pointers from the 'array' object to the end of the current array, and clears the 'array' object.
After a successful call of this method, control of objects that earlier belonged to the 'array' object is passed to the current array object. The 'array' object is cleared (the [IMTAttachmentArray::Total](imtattachmentarray_total.md "Total") call will return 0). When you delete the current array (by calling [IMTAttachmentArray::Release](imtattachmentarray_release.md "Release")), all previously inserted objects are deleted.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server to crash. Use the [IMTAttachmentArray::Delete](imtattachmentarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTAttachmentArray *array =api->AttachmentCreateArray();  IMTAttachment *attachment=api->AttachmentCreate(); //--- array->Add(attachment); // after that the array controls the lifetime array->Delete(0); // delete the first element, after which a pointer in 'attachment' becomes invalid ('Release' was called) //--- Incorrect use example IMTAttachmentArray *array =api->AttachmentCreateArray();  IMTAttachment *attachment=api->AttachmentCreate(); //--- array->Add(attachment); array->Add(attachment); // in this case, the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---