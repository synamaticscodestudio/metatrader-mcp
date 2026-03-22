# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ Shift | [](imtuserarray_updatecopy.md "UpdateCopy") [](imtuserarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::Shift
Change the position of a client record in an array.
C++
MTAPIRES IMTUserArray::Shift( const UINT pos, // The position of a client record const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.Shift( uint pos, // The position of a client record int shift // Shift )  
---  
Parameters
pos
[in] Position of a client record in an array, starting with 0.
shift
[in] Shift of the client record relative to its current position. A negative value means the shift to the beginning of an array, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.