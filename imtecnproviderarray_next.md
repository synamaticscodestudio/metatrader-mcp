# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Next | [](imtecnproviderarray_total.md "Total") [](imtecnproviderarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Next
Get a provider object by its position.
C++
IMTECNProvider* IMTECNProviderArray::Next( const UINT index // provider position ) const  
---  
.NET (Gateway/Manager API)
CIMTECNProvider CIMTECNProviderArray.Next( uint  index // provider position )  
---  
Parameters
index
[in] Position of a provider in the array, starting with 0.
Return Value
If successful, the method returns a pointer to the provider object at the specified position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, if you delete an array object, the returned pointer will become invalid.
The deletion of the returned object (by [IMTECNProvider::Release](imtecnprovider_release.md "Release") call) will cause the pointer stored inside the array object to become invalid, while the pointer call (including the one used when deleting an array object) will cause the plugin and the server to crash.