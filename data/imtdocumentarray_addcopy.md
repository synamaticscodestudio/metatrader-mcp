# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ AddCopy | [](imtdocumentarray_add.md "Add") [](imtdocumentarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::AddCopy
Add a copy of a document object at the end of an array.
C++
MTAPIRES IMTDocumentArray::AddCopy( const IMTDocument* document // Document to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.AddCopy( CIMTDocument document // Document to be added )  
---  
Parameters
document
[in] [Document object](imtdocument.md "IMTDocument").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'client' object and places it at the end of the array.
Unlike [IMTDocumentArray::Add(IMTDocument* document)](imtdocumentarray_add.md "Add"), this method call does not set any additional conditions for the 'document' object control, but it is more resource-intensive, since an additional object is created.
IMTDocumentArray::AddCopy
Add copies of document objects into an array.
C++
MTAPIRES IMTDocumentArray::AddCopy( const IMTDocumentArray* array // Array of documents to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.AddCopy( CIMTDocumentArray  array // Array of documents to be added )  
---  
Parameters
array
[in] Object of the array of documents.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates copies of comment objects belonging to the 'array' object and inserts them at the end of the current array.
Unlike [IMTDocumentArray::Add(IMTDocumentArray* array)](imtdocumentarray_add.md "Add"), this method call does not change the source 'array' object, but it is more resource-intensive, since additional objects are created.