# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTAttachmentArray ](imtattachmentarray.md "IMTAttachmentArray")/ Assign | [](imtattachmentarray_release.md "Release") [](imtattachmentarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTAttachmentArray::Assign( const IMTAttachmentArray* array // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocumentArray.Assign( CIMTAttachmentArray array // source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.