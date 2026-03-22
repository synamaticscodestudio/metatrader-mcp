# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Add | [](imtdocumentarray_clear.md "Clear") [](imtdocumentarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Add
Add a document object to the end of an array.
C++
MTAPIRES IMTDocumentArray::Add( IMTDocument* document // Document to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Add( CIMTDocument document // Document to be added )  
---  
Parameters
document
[in] [Document object](imtdocument.md "IMTDocument").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the lifetime of the 'document' object is passed to the array object. Thus, when deleting an array object (by a call of [IMTDocumentArray::Release](imtdocumentarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTDocumentArray::Add
Add a document array object to the end of an array.
C++
MTAPIRES IMTDocumentArray::Add( IMTDocumentArray* array // Array of documents to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Add( CIMTDocumentArray array // Array of documents to be added )  
---  
Parameters
array
[in] Object of the array of documents.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the 'array' object, at the end of the current array and clears the 'array' object.
After a successful call of this method, control of objects that earlier belonged to the 'array' object is passed to the current array object. The array object is cleared ([IMTDocumentArray::Total](imtdocumentarray_total.md "Total") call will return 0). When deleting the current array object ([IMTDocumentArray::Release](imtdocumentarray_release.md "Release") call), earlier inserted objects are automatically deleted.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash. Use the [IMTDocumentArray::Delete](imtdocumentarray_delete.md "Delete") method for a correct deletion of an element.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTDocumentArray *array =api->DocumentCreateArray();  IMTDocument *document=api->DocumentCreate(); //--- array->Add(document); // after that the lifetime is controlled by the array array->Delete(0); // delete the first element, after that a pointer in 'document' becomes invalid ('Release' was called) //--- Incorrect use example IMTDocumentArray *array =api->DocumentCreateArray();  IMTDocument *document=api->DocumentCreate(); //--- array->Add(document); array->Add(document); // in this case the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---