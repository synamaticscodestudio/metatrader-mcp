# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFillingArray ](imtecnfillingarray.md "IMTECNFillingArray")/ Shift | [](imtecnfillingarray_updatecopy.md "UpdateCopy") [](imtecnfillingarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTECNFillingArray::Shift
Change the position of a filling order in the array.
C++
MTAPIRES IMTECNFillingArray::Shift( const UINT pos, // order position const int shift // shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.Shift( uint pos, // order position int shift // shift )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
shift
[in] Shift of an oder relative to its current position. A negative value means shift towards the array beginning, while a positive value means shift towards its end.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.