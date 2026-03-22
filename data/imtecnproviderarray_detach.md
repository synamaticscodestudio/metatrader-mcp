# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Detach | [](imtecnproviderarray_delete.md "Delete") [](imtecnproviderarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Detach
Detach a provider object from an array.
C++
IMTECNProvider* IMTECNProviderArray::Detach( const UINT pos // provider position ) const  
---  
.NET (Gateway/Manager API)
CIMTECNProvider CIMTECNProviderArray.Detach( uint pos // provider position )  
---  
Parameters
pos
[in] Position of a provider in the array, starting with 0.
Return Value
Returns a pointer to the detached provider object.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, while the deleted object is not freed.