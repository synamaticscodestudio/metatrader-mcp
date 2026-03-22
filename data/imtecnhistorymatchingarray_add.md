# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ Add | [](imtecnhistorymatchingarray_clear.md "Clear") [](imtecnhistorymatchingarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::Add
Add a matching order object to the end of the array.
C++
MTAPIRES IMTECNHistoryMatchingArray::Add( IMTECNHistoryMatching* order // order to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Add( CIMTECNHistoryMatching order // order to be added )  
---  
Parameters
order
[in] [Matching order object](imtecnhistorymatching.md "IMTECNMatching").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the 'order' object lifetime is passed to the array object. Thus, when deleting an array object (by [IMTECNHistoryMatchingArray::Release](imtecnhistorymatchingarray_release.md "Release") call), the earlier inserted objects will be automatically deleted.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTECNMatchingArray::Add
Add an object of an array of matching orders to the end of an array.
C++
MTAPIRES IMTECNHistoryMatchingArray::Add( IMTECNHistoryMatchingArray* array // array of orders to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.Add( CIMTECNHistoryMatchingArray array // array of orders to be added )  
---  
Parameters
array
[in] An object of the order array.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places the pointers stored in the 'array' object, at the end of the current array, and clears the 'array' object.
After a successful method call, control of objects that earlier belonged to the 'array' object is passed to the current array object. This also clears the 'array' object (call of [IMTECNHistoryMatchingArray::Total](imtecnhistorymatchingarray_total.md "Total") returns 0). When you delete the current array object (by calling [IMTECNHistoryMatchingArray::Release](imtecnhistorymatchingarray_release.md "Release")), all previously inserted objects are deleted automatically.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash. Use the [IMTECNHistoryMatchingArray::Delete](imtecnhistorymatchingarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNHistoryMatchingArray *array=api->ECNHistoryMatchingCreateArray();  IMTECNHistoryMatching *order=api->ECNHistoryMatchingCreate(); //--- array->Add(order); // after that the lifetime is controlled by the array array->Delete(0); // delete the first element, after that a pointer in 'order' becomes invalid ('Release' was called) //--- incorrect use example IMTECNHistoryMatchingArray *array=api->ECNHistoryMatchingCreateArray();  IMTECNHistoryMatching *order=api->ECNHistoryMatchingCreate(); //--- array->Add(order); array->Add(order); // in this case the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---