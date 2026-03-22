# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Shift | [](imtecnproviderarray_updatecopy.md "UpdateCopy") [](imtecnproviderarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Shift
Change the position of a provider in an array.
C++
MTAPIRES IMTECNProviderArray::Shift( const UINT pos, // provider position const int shift // shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.Shift( uint pos, // provider position int shift // shift )  
---  
Parameters
pos
[in] Position of a provider in the array, starting with 0.
shift
[in] Shift provider relative to its current position. A negative value means shift towards the array beginning, while a positive value means shift towards its end.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.