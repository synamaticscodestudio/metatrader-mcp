# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentArray ](imtcommentarray.md "IMTCommentArray")/ Shift | [](imtcommentarray_updatecopy.md "UpdateCopy") [](imtcommentarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTCommentArray::Shift
Change the position of a comment in an array.
C++
MTAPIRES IMTCommentArray::Shift( const UINT pos, // Comment position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCommentArray.Shift( uint pos, // Comment position int shift // Shift )  
---  
Parameters
pos
[in] Comment position in an array, starting with 0.
shift
[in] Shift of the comment relative to the current position. A negative value means shift towards the array beginning, a positive value means shift towards its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.