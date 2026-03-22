# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Update | [](imtecnproviderarray_detach.md "Detach") [](imtecnproviderarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Update
Update a provider at the specified position of an array.
C++
MTAPIRES IMTECNProviderArray::Update( const UINT pos, // position IMTECNProvider* provider // provider object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.Update( uint pos, // position CIMTECNProvider provider // provider object )  
---  
Parameters
pos
[in] Position of a provider in the array, starting with 0.
provider
[in] [Provider object](imtecnprovider.md "IMTECNProvider").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The IMTECNProviderArray::Update method deletes the previous element ([IMTECNProvider::Release](imtecnprovider_release.md "Release") call) and replaces it with a new one. After that, the lifetime of the new element is controlled by an array object. Therefore, when you delete an array object (IMTECNProviderArray::Release call), the earlier inserted object is automatically deleted.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to become invalid. Therefore, an attempt to access this pointer (including the case when you delete the array object) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNProviderArray *array=api->ECNProviderCreateArray();  IMTECNProvider *provider1=api->ECNProviderCreate(); IMTECNProvider *provider2=api->ECNProviderCreate(); //--- array->Add(provider1); array->Update(0,provider2); // the first element (the provider1 object) is replaced with provider2 //--- after that the provider1 element will be released via Release, and provider2 lifetime will be controlled by the array  
---