# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Add | [](imtecnproviderarray_clear.md "Clear") [](imtecnproviderarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Add
Add a provider object to the end of an array.
C++
MTAPIRES IMTECNProviderArray::Add( IMTECNProvider* provider // provider to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.Add( CIMTECNProvider provider // provider to be added )  
---  
Parameters
provider
[in] [Provider object](imtecnprovider.md "IMTECNProvider").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the 'provider' object lifetime is passed to the array object. Therefore, when you delete an array object ([IMTECNProviderArray::Release](imtecnproviderarray_release.md "Release") call), the earlier inserted object is automatically deleted.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTECNProviderArray::Add
Add an object of provider arrays to the end of an array.
C++
MTAPIRES IMTECNProviderArray::Add( IMTECNProviderArray* array // array of providers to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProviderArray.Add( CIMTECNProviderArray array // array of providers to be added )  
---  
Parameters
array
[in] Array of provider arrays.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places the pointers stored in the 'array' object, at the end of the current array, and clears the 'array' object.
After a successful method call, control of objects that earlier belonged to the 'array' object is passed to the current array object. This also clears the 'array' object (call of [IMTECNProviderArray::Total](imtecnproviderarray_total.md "Total") returns 0). When you delete the current array object (by calling [IMTECNProviderArray::Release](imtecnproviderarray_release.md "Release")), all previously inserted objects are deleted automatically.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash. Use the [IMTECNFillingArray::Delete](imtecnproviderarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNProvidergArray *array=api->ECNProviderCreateArray();  IMTECNProvider *provider=api->ECNProviderCreate(); //--- array->Add(provider); // after that the lifetime is controlled by the array array->Delete(0); // delete the first element, after that a pointer in 'provider' becomes invalid ('Release' was called) //--- incorrect use example IMTECNProviderArray *array=api->ECNProviderCreateArray();  IMTECNProvider *provider=api->ECNProviderCreate(); //--- array->Add(provider); array->Add(provider); // in this case the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---