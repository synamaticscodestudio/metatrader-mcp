# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Shift | [](imtdocumentarray_updatecopy.md "UpdateCopy") [](imtdocumentarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Shift
Change the position of a document in an array.
C++
MTAPIRES IMTDocumentArray::Shift( const UINT pos, // Position of a document const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Shift( uint pos, // Position of a document int shift // Shift )  
---  
Parameters
pos
[in] Position of a document in an array starting with 0.
shift
[in] Shift of the document relative to the current position. A negative value means shift towards the array beginning, a positive value means shift towards its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.