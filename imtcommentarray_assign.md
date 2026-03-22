# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Assign | [](imtcommentarray_release.md "Release") [](imtcommentarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTCommentArray::Assign( const IMTCommentArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.Assign( CIMTCommentArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.