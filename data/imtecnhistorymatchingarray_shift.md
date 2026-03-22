# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ Shift | [](imtecnhistorymatchingarray_updatecopy.md "UpdateCopy") [](imtecnhistorymatchingarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::Shift
Change the position of a matching order in the array.
C++
MTAPIRES IMTECNHistoryMatchingArray::Shift( const UINT pos, // order position const int shift // shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.Shift( uint pos, // order position int shift // shift )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
shift
[in] Shift of an oder relative to its current position. A negative value means shift towards the array beginning, while a positive value means shift towards its end.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.