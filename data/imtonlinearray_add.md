# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Add | [](imtonlinearray_clear.md "Clear") [](imtonlinearray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Add
Add connection record object at the end of an array.
C++
MTAPIRES IMTOnlineArray::Add( IMTOnline* online // Added connection record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.Add( CIMTOnline online // Added connection record )  
---  
Parameters
online
[in] Connection record object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the user object is passed to the array object. Thus, when deleting an array object (call of [IMTOnlineArray::Release](imtonlinearray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTOnlineArray::Add
Add connection record array object at the end of an array.
C++
MTAPIRES IMTOnlineArray::Add( IMTOnlineArray* array // Added connection record array )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.Add( CIMTOnlineArray array // Added connection record array )  
---  
Parameters
array
[in] Connection record array object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTOnineArray::Total](imtonlinearray_total.md "Total") returns 0). When deleting the current array object (call of [IMTUserArray::Release](imtonlinearray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTUserArray::Delete](imtonlinearray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTOnlineArray *array=api->OnlineCreateArray(); IMTOnline *online=api->OnlineCreate(); //--- array->Add(online); // After that the lifetime is controlled by the array array->Delete(0); // Deleting the first element, then the pointer in 'user' becomes invalid (Release was called) //--- Example of incorrect use IMTOnlineArray *array=api->OnlineCreateArray(); IMTOnline *online=api->OnlineCreate(); //--- array->Add(online); array->Add(online); // In this case the array will have two pointers to one and the same object! //--- Array clearing will cause crash, because two attempts will be made to delete the same object  
---