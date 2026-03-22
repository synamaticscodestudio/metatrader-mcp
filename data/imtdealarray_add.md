# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Add | [](imtdealarray_clear.md "Clear") [](imtdealarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Add
Add an object of a deal at the end of an array.
C++
MTAPIRES IMTDealArray::Add( IMTDeal* deal // A deal to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.Add( CIMTDeal deal // A deal to be added )  
---  
Parameters
deal
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the deal object is passed to the array object. Thus, when deleting an array object (call of [IMTDealArray::Release](imtdealarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTDealArray::Add
Add an object of the array of deals at the end of an array.
C++
MTAPIRES IMTDealArray::Add( IMTDealArray* array // An array of deals that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.Add( CIMTDealArray array // An array of deals that is being added )  
---  
Parameters
array
[in] An object of the array of deals.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTDealArray::Total](imtdealarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTDealArray::Release](imtdealarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTDealArray::Delete](imtdealarray_delete.md "Delete") method to delete the element correctly..
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTDealArray *array=api->DealCreateArray();  IMTDeal *deal =api->DealCreate(); //--- array->Add(deal); // After that the lifetime is controlled by an array array->Delete(0); // Delete the first element, and the pointer in deal becomes invalid (Release was called) //--- An example of incorrect use IMTDealArray *array=api->DealCreateArray();  IMTDeal *deal =api->DealCreate(); //--- array->Add(deal); array->Add(deal); // In this case the array will contain two pointers to one and the same object! //--- Releasing the object will cause crash, because it will try to delete an object twice  
---