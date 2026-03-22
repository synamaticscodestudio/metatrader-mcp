# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ Add | [](imtclientarray_clear.md "Clear") [](imtclientarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::Add
Add a client object at the end of an array.
C++
MTAPIRES IMTClientArray::Add( IMTClient* client // Client to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.Add( CIMTClient client // Client to be added )  
---  
Parameters
client
[in] [Client object](imtclient.md "IMTClient").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the lifetime of the 'client' object is passed to the array object. Thus, when deleting an array object (by a call of [IMTClientArray::Release](imtclientarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTClientArray::Add
Add a client array object at the end of an array.
C++
MTAPIRES IMTClientArray::Add( IMTClientArray* array // Array of clients to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.Add( CIMTClientArray array // Array of clients to be added )  
---  
Parameters
array
[in] An object of the clients array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the 'array' object, at the end of the current array and clears the 'array' object.
After a successful call of this method, control of objects that earlier belonged to the 'array' object is passed to the current array object. The 'array' object is cleared ([IMTClientArray::Total](imtclientarray_total.md "Total") call will return 0). When deleting the current array object (call of [IMTClientArray::Release](imtclientarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause plugin and server crash. Use [IMTClientArray::Delete](imtclientarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTClientArray *array =api->ClientCreateArray();  IMTClient *client=api->ClientCreate(); //--- array->Add(client); // after that the lifetime is controlled by the array array->Delete(0); // delete the first element, after that a pointer in 'client' becomes invalid ('Release' was called) //--- Incorrect use example IMTClientArray *array =api->ClientCreateArray();  IMTClient *client=api->ClientCreate(); //--- array->Add(client); array->Add(client); // in this case the array will contain two pointers to one and the same object! //--- an attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---