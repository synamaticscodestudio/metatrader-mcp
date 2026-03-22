# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Delete | [](imtdocumentarray_addcopy.md "AddCopy") [](imtdocumentarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Delete
Delete a document object by its position.
C++
MTAPIRES IMTDocumentArray::Delete( const UINT pos // Position of a document )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Delete( uint pos // Position of a document )  
---  
Parameters
pos
[in] Position of a document in an array starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTDocument::Release](imtdocument_release.md "Release") method.