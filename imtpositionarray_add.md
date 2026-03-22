# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ Add | [](imtpositionarray_clear.md "Clear") [](imtpositionarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::Add
Add an object of a trade position at the end of an array.
C++
MTAPIRES IMTPositionArray::Add( IMTPosition* position // The position that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.Add( CIMTPosition position // The position that is being added )  
---  
Parameters
position
[in] An object of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the position object is passed to the array object. Thus, when deleting an array object (call of [IMTPositionArray::Release](imtpositionarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTPositionArray::Add
Add an object of the array of trade positions at the end of an array.
C++
MTAPIRES IMTPositionArray::Add( IMTPositionArray* array // The array of positions that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.Add( CIMTPositionArray array // The array of positions that is being added )  
---  
Parameters
array
[in] An object of the array of positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTPositionArray::Total](imtpositionarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTPositionArray::Release](imtpositionarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTPositionArray::Delete](imtpositionarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTPositionArray *array =api->PositionCreateArray();  IMTPosition *position=api->PositionCreate(); //--- array->Add(position);// After that the lifetime is controlled by the array array->Delete(0); // Delete the first element, and the pointer in position becomes invalid (Release was called) //--- An example of incorrect use IMTPositionArray *array =api->PositionCreateArray();  IMTPosition *position=api->PositionCreate(); //--- array->Add(position); array->Add(position); // In this case the array contains two pointers to the same object! //--- Releasing the object will cause crash, because it will try to delete an object twice  
---