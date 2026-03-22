# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Delete | [](imtecnproviderarray_addcopy.md "AddCopy") [](imtecnproviderarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Delete
Delete a provider object by its position.
C++
MTAPIRES IMTECNProviderArray::Delete( const UINT pos // provider position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.Delete( uint pos // provider position )  
---  
Parameters
pos
[in] Position of a provider in the array, starting with 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The deleted object will be automatically released by the [IMTECNProvider::Release](imtecnprovider_release.md "Release") method call.