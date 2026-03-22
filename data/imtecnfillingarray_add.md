# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFillingArray ](imtecnfillingarray.md "IMTECNFillingArray")/ Add | [](imtecnfillingarray_clear.md "Clear") [](imtecnfillingarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNFillingArray::Add
Add a filling order object to the end of an array.
C++
MTAPIRES IMTECNFillingArray::Add( IMTECNFilling* order // order to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.Add( CIMTECNFilling order // order to be added )  
---  
Parameters
order
[in] [Filling order object](imtecnfilling.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the 'order' object lifetime is passed to the array object. Thus, when deleting an array object (by a call of [IMTECNFillingArray::Release](imtecnfillingarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTECNFillingArray::Add
Add an array of filling order objects to the end of an array.
C++
MTAPIRES IMTECNFillingArray::Add( IMTECNFillingArray* array // array of orders to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.Add( CIMTECNFillingArray array // array of orders to be added )  
---  
Parameters
array
[in] An object of the order array.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places the pointers stored in the 'array' object, at the end of the current array, and clears the 'array' object.
After a successful method call, control of objects that earlier belonged to the 'array' object is passed to the current array object. This also clears the 'array' object (call of [IMTECNFillingArray::Total](imtecnfillingarray_total.md "Total") returns 0). When you delete the current array object (by calling [IMTECNFillingArray::Release](imtecnfillingarray_release.md "Release")), all previously inserted objects are deleted automatically.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash. Use the [IMTECNFillingArray::Delete](imtecnfillingarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNFillingArray *array=api->ECNFillingCreateArray();  IMTECNFilling *order=api->ECNFillingCreate(); //--- array->Add(order); // after that the lifetime is controlled by the array array->Delete(0); // delete the first element, after that a pointer in 'order' becomes invalid ('Release' was called) //--- incorrect use example IMTECNFillingArray *array=api->ECNFillingCreateArray();  IMTECNFilling *order=api->ECNFillingCreate(); //--- array->Add(order); array->Add(order); // in this case the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---