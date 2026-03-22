# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Next | [](imtdocumentarray_total.md "Total") [](imtdocumentarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Next
Get a document object by its position.
C++
IMTDocument* IMTDocumentArray::Next( const UINT pos // Position of a document ) const  
---  
.NET (Gateway/Manager API)
CIMTDocument CIMTDocumentArray.Next( uint  pos // Document position )  
---  
Parameters
pos
[in] Position of a document in an array starting with 0.
Return Value
If successful, a pointer to the document object at the specified position is returned. Otherwise, NULL is returned.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Deletion of the returned object (call of [IMTDocument::Release](imtdocument_release.md "Release")) will cause the pointer stored inside the array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash.