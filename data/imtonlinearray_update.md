# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnlineArray ](imtonlinearray.md "IMTOnlineArray")/ Update | [](imtonlinearray_detach.md "Detach") [](imtonlinearray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTOnlineArray::Update
Change a connection record at the specified position of an array.
C++
MTAPIRES IMTOnlineArray::Update( const UINT pos, // Position IMTUser* user // Connection record object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnlineArray.Update( uint pos, // Position CIMTUser user // Connection record object )  
---  
Parameters
pos
[in] Position of a connection record in an array, starting with 0.
online
[in] Connection record object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTOnlineArray::Update method deletes the previous element (call of [IMTOnline::Release](imtonline_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of IMTOnlineArray::Release), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause the crash of the plugin and the server.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTOnlineArray *array =api->OnlineCreateArray(); IMTOnline *online1=api->OnlineCreate(); IMTOnline *online2=api->OnlineCreate(); //--- array->Add(online1); array->Update(0,online2); // The first element (object online1) is replace by online2 //--- After that the online1 element will be released through Release, and the lifetime of online2 will be controlled by the array  
---