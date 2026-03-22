# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ UpdateCopy | [](imtdocumentarray_update.md "Update") [](imtdocumentarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::UpdateCopy
Change a document at the specified position of an array by copying the parameters of a passed document object.
C++
MTAPIRES IMTDocumentArray::UpdateCopy( const UINT  pos, // Position const IMTDocument* comment // Document object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.UpdateCopy( uint  pos, // Position CIMTDocument document // Document object )  
---  
Parameters
pos
[in] Position of a document in an array starting with 0.
document
[in] [Document object](imtdocument.md "IMTDocument").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method copies the 'document' object parameters to the document object at the specified position in the array.
Unlike [IMTDocumentArray::Update](imtdocumentarray_update.md "Update"), this method call does not set any additional conditions for the control of the 'document' object, but it is more resource-intensive, since an additional object is created.