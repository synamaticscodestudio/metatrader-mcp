# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatchingArray ](imtecnmatchingarray.md "IMTECNMatchingArray")/ Update | [](imtecnmatchingarray_detach.md "Detach") [](imtecnmatchingarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray::Update
Update a matching order at the specified array position.
C++
MTAPIRES IMTECNMatchingArray::Update( const UINT pos, // position IMTECNMatching* order // order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Update( uint pos, // position CIMTECNMatching order // order object )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
order
[in] [Matching order object](imtecnmatching.md "IMTECNMatching").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The IMTECNMatchingArray::Update method deletes the previous element ([IMTECNHistoryDealArray::Release](imtecnmatching_release.md "Release") call) and replaces it with a new one. After that, the lifetime of the new element is controlled by an array object. Therefore, when you delete the array object (through IMTECNMatchingArray::Release call), the previously inserted object is also deleted.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to become invalid. Therefore, an attempt to access this pointer (including the case when you delete the array object) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNMatchingArray *array=api->ECNMatchingCreateArray();  IMTECNMatching *order1=api->ECNMatchingCreate(); IMTECNMatching *order2=api->ECNMatchingCreate(); //--- array->Add(order1); array->Update(0,order2); // the first element (the order1 object) is replaced with order2 //--- after that the order1 element will be released via Release, and order2 lifetime will be controlled by the array  
---