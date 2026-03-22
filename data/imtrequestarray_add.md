# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ Add | [](imtrequestarray_clear.md "Clear") [](imtrequestarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::Add
Add an object of a trade request at the end of an array.
C++
MTAPIRES IMTRequestArray::Add( IMTRequest* request // Added request )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.Add( CIMTRequest request // Added request )  
---  
Parameters
request
[in] An object of a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the request object is passed to the array object. Thus, when deleting an array object (call of [IMTRequestArray::Release](imtrequestarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTRequestArray::Add
Adds an object of the array of trade requests at the end of an array.
C++
MTAPIRES IMTRequestArray::Add( IMTRequestArray* array // The array of requests that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.Add( CIMTRequestArray array // The array of requests that is being added )  
---  
Parameters
array
[in] An object of the array of requests.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTRequestArray::Total](imtrequestarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTRequestArray::Release](imtrequestarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTRequestArray::Delete](imtrequestarray_delete.md "Delete") method to delete the element correctly..
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTRequestArray *array =api->RequestCreateArray();  IMTRequest *request=api->RequestCreate(); //--- array->Add(request); // After that the lifetime is controlled by the array array->Delete(0); // Delete the first element, and the pointer in request becomes invalid (Release was called) //--- An example of incorrect use IMTRequestArray *array =api->RequestCreateArray();  IMTRequest *request=api->RequestCreate(); //--- array->Add(request); array->Add(request); // In this case the array contains two pointers to the same object! //--- Releasing the object will cause crash, because it will try to delete an object twice  
---