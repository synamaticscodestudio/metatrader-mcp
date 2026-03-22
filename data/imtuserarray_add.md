# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserArray ](imtuserarray.md "IMTUserArray")/ Add | [](imtuserarray_clear.md "Clear") [](imtuserarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTUserArray::Add
Adds a client record object at the end of an array.
C++
MTAPIRES IMTUserArray::Add( IMTUser* user // The client record to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.Add( CIMTUser user // The client record to be added )  
---  
Parameters
user
[in] An object of the client record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the user object is passed to the array object. Thus, when deleting an array object (call of [IMTUserArray::Release](imtuserarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTUserArray::Add
Adds an object client records array at the end of an array.
C++
MTAPIRES IMTUserArray::Add( IMTUserArray* array // An array of client records to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUserArray.Add( CIMTUserArray  array // An array of client records to be added )  
---  
Parameters
array
[in] An object of arrays of client records.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTUserArray::Total](imtuserarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTUserArray::Release](imtuserarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTUserArray::Delete](imtuserarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTUserArray *array=api->UserCreateArray();  IMTUser *user=api->UserCreate(); //--- array->Add(user); // After that the lifetime is controlled by an array array->Delete(0); // Delete the first element, and the pointer in order becomes invalid (Release was called) //--- An example of incorrect use IMTUserArray *array=api->UserCreateArray();  IMTUser *usero=api->UserCreate(); //--- array->Add(user); array->Add(user); // In this case the array contains two pointers to the same object! //--- Releasing the object will cause crash, because it will try to delete an object twice  
---