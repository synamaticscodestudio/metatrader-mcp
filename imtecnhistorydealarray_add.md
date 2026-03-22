# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ Add | [](imtecnhistorydealarray_clear.md "Clear") [](imtecnhistorydealarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::Add
Add a deal object to the end of the array.
C++
MTAPIRES IMTECNHistoryDealArray::Add( IMTECNHistoryDeal* deal // deal to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Add( CIMTECNHistoryDeal deal // deal to be added )  
---  
Parameters
deal
[in] [Deal object](imtecnhistorydeal.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the deal object is passed to the array object. Thus, when deleting an array object (by a call of [IMTECNHistoryDealArray::Release](imtecnhistorydealarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTECNHistoryDealArray::Add
Add an object of the array of deals to the end of the array.
C++
MTAPIRES IMTECNHistoryDealArray::Add( IMTECNHistoryDealArray* array // array of deals to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDealArray.Add( CIMTECNHistoryDealArray array // array of deals to be added )  
---  
Parameters
array
[in] An object of the array of deals.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method places the pointers stored in the 'array' object, at the end of the current array, and clears the 'array' object.
After a successful method call, control of objects that earlier belonged to the 'array' object is passed to the current array object. This also clears the 'array' object (call of [IMTECNHistoryDealArray::Total](imtecnhistorydealarray_total.md "Total") returns 0). When you delete the current array object (by calling [IMTECNHistoryDealArray::Release](imtecnhistorydealarray_release.md "Release")), all previously inserted objects are deleted automatically.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash. Use the [IMTECNHistoryDealArray::Delete](imtecnhistorydealarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNHistoryDealArray *array=api->ECNHistoryDealCreateArray();  IMTECNHistoryDeal *deal =api->ECNHistoryDealCreate(); //--- array->Add(deal); // after that the lifetime is controlled by the array array->Delete(0); // delete the first element, after that a pointer in 'deal' becomes invalid ('Release' was called) //--- incorrect use example IMTECNHistoryDealArray *array=api->ECNHistoryDealCreateArray();  IMTECNHistoryDeal *deal =api->ECNHistoryDealCreate(); //--- array->Add(deal); array->Add(deal); // in this case the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---