# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ AddCopy | [](imtecnproviderarray_add.md "Add") [](imtecnproviderarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::AddCopy
Add a copy of a provider object to the end of an array.
C++
MTAPIRES IMTECNProviderArray::AddCopy( const IMTECNProvider* provider // provider to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.AddCopy( CIMTECNProvider provider // provider to be added )  
---  
Parameters
provider
[in] [Provider object](imtecnprovider.md "IMTECNProvider").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of the 'provider' object and places it at the end of the array.
Unlike [IMTECNProviderArray::Add(IMTECNProvider* provider)](imtecnproviderarray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'provider' object, but it is more resource-intensive since it creates an additional object.
IMTECNProviderArray::AddCopy
Add copies of deal objects into an array.
C++
MTAPIRES IMTECNProviderArray::AddCopy( const IMTECNProviderArray* array // array of providers to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.AddCopy( CIMTECNProviderArray  array // array of providers to be added )  
---  
Parameters
array
[in] Array of provider arrays.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of order objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTECNProviderArray::Add(IMTECNProviderArray* array)](imtecnproviderarray_add.md "Add"), this method call does not change the source 'array' object, but it is more resource-intensive since additional objects are created.