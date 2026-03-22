# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ Shift | [](imtclientarray_updatecopy.md "UpdateCopy") [](imtclientarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::Shift
Change the position of a client in an array.
C++
MTAPIRES IMTClientArray::Shift( const UINT pos, // Client position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.Shift( uint pos, // Client position int shift // Shift )  
---  
Parameters
pos
[in] Position of the client in an array, starting with 0.
shift
[in] Shift of the client relative to the current position. A negative value means shift towards the array beginning, a positive value means shift towards its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.