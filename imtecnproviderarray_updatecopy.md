# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ UpdateCopy | [](imtecnproviderarray_update.md "Update") [](imtecnproviderarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::UpdateCopy
Update a provider at the specified position of an array by copying the parameters of a passed provider object.
C++
MTAPIRES IMTECNProviderArray::UpdateCopy( const UINT  pos, // position const IMTECNProvider*  provider // provider object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.UpdateCopy( uint  pos, // position CIMTECNProvider provider // provider object )  
---  
Parameters
pos
[in] Position of a provider in the array, starting with 0.
provider
[in] [Provider object](imtecnprovider.md "IMTECNProvider").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method copies the parameters of the 'provider' object into a deal object at the specified position of an array.
Unlike the [IMTECNProviderArray::Update](imtecnproviderarray_update.md "Update") method, calling this method sets no additional conditions for the 'provider' object control but it is more resource-intensive since an additional object is created.