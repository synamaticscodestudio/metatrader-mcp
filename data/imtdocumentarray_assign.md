# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentArray ](imtdocumentarray.md "IMTDocumentArray")/ Assign | [](imtdocumentarray_release.md "Release") [](imtdocumentarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTDocumentArray::Assign( const IMTDocumentArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Assign( CIMTDocumentArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.