# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ Update | [](imtrequestarray_detach.md "Detach") [](imtrequestarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::Update
Change a trade request at the specified position of an array.
C++
MTAPIRES IMTRequestArray::Update( const UINT pos, // Request position IMTRequest* request // Request object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.Update( uint pos, // Request position CIMTRequest request // Request object )  
---  
Parameters
pos
[in] Position of a trade request in an array, starting with 0.
request
[in] An object of a request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTRequestArray::Update method deletes the previous element (call of [IMTRequest::Release](imtrequest_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of IMTRequestArray::Release), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTRequestArray *array =api->RequestArrayCreate();  IMTRequest *request1=api->RequestCreate(); IMTRequest *request2=api->RequestCreate(); //--- array->Add(request1); array->Update(0,request2); // The first element (object request1) is replaced by request2 //--- After that the request1 element will be released using Release, and the request2 lifetime will be controlled by the array  
---