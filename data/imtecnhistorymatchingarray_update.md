# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ Update | [](imtecnhistorymatchingarray_detach.md "Detach") [](imtecnhistorymatchingarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::Update
Update a matching order at the specified array position.
C++
MTAPIRES IMTECNHistoryMatchingArray::Update( const UINT pos, // position IMTECNHistoryMatching* order // order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.Update( uint pos, // position CIMTECNHistoryMatching order // order object )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
order
[in] [Matching order object](imtecnhistorymatching.md "IMTECNMatching").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The IMTECNHistoryMatchingArray::Update deletes the previous element ([IMTECNMatching::Release](imtecnmatching_release.md "Release") call) and replaces it with a new one. After that, the lifetime of the new element is controlled by an array object. Thus, when deleting an array object (by IMTECNHistoryMatchingArray::Release call), the earlier inserted objects will be automatically deleted.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to become invalid. Therefore, an attempt to access this pointer (including the case when you delete the array object) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNHistoryMatchingArray *array=api->ECNHistoryMatchingCreateArray();  IMTECNHistoryMatching *order1=api->ECNHistoryMatchingCreate(); IMTECNHistoryMatching *order2=api->ECNHistoryMatchingCreate(); //--- array->Add(order1); array->Update(0,order2); // the first element (the order1 object) is replaced with order2 //--- after that the order1 element will be released via Release, and order2 lifetime will be controlled by the array  
---