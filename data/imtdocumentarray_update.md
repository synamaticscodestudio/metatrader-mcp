# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Update | [](imtdocumentarray_detach.md "Detach") [](imtdocumentarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Update
Change a document at the specified position of an array.
C++
MTAPIRES IMTDocumentArray::Update( const UINT pos, // Position IMTDocument* document // Document object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Update( uint pos, // Position CIMTDocument document // Document object )  
---  
Parameters
pos
[in] Position of a document in an array starting with 0.
document
[in] [Document object](imtdocument.md "IMTDocument").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The IMTDocumentArray::Update method deletes the previous element ([IMTDocument::Release](imtdocument_release.md "Release") call) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (by IMTDocumentArray::Release call), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object causes the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause plugin and server crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTDocumentArray *array =api->DocumentCreateArray();  IMTDocument *document1=api->DocumentCreate(); IMTDocument *document2=api->DocumentCreate(); //--- array->Add(document1); array->Update(0,document2); // the first element (object document1) is replaced by document2 //--- after that the document1 element will be released via Release, and the document2 lifetime will be controlled by the array  
---