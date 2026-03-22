# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ Add | [](imtorderarray_clear.md "Clear") [](imtorderarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::Add
Add an object of a trade order at the end of an array.
C++
MTAPIRES IMTOrderArray::Add( IMTOrder* order // An order that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.Add( CIMTOrder order // An order that is being added )  
---  
Parameters
order
[in] An object of a trading order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the order object is passed to the array object. Thus, when deleting an array object (call of [IMTOrderArray::Release](imtorderarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTOrderArray::Add
Add an object of the array of orders at the end of an array.
C++
MTAPIRES IMTOrderArray::Add( IMTOrderArray* array // An array of orders that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.Add( CIMTOrderArray array // An array of orders that is being added )  
---  
Parameters
array
[in] An object of the array of trade orders.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTOrderArray::Total](imtorderarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTOrderArray::Release](imtorderarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTOrderArray::Delete](imtorderarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTOrderArray *array=api->OrderCreateArray();  IMTOrder *order=api->OrderCreate(); //--- array->Add(order); // After that the lifetime is controlled by an array array->Delete(0); // Delete the first element, and the pointer in order becomes invalid (Release was called) //--- An example of incorrect use IMTOrderArray *array=api->OrderCreateArray();  IMTOrder *order=api->OrderCreate(); //--- array->Add(order); array->Add(order); // In this case the array contains two pointers to the same object! //--- Releasing the object will cause crash, because it will try to delete an object twice  
---