# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFillingArray ](imtecnhistoryfillingarray.md "IMTECNFillingArray")/ Update | [](imtecnhistoryfillingarray_detach.md "Detach") [](imtecnhistoryfillingarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFillingArray::Update
Change the position of a filling order at the specified position of the array.
C++
MTAPIRES IMTECNHistoryFillingArray::Update( const UINT pos, // position IMTECNFilling* order // order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFillingArray.Update( uint pos, // position CIMTECNFilling order // order object )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
order
[in] [Filling order object](imtecnhistoryfilling.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The IMTECNHistoryFillingArray::Update method deletes the previous element ([IMTECNHistoryFilling::Release](imtecnhistoryfilling_release.md "Release") call) and replaces it with a new one. After that, the lifetime of the new element is controlled by an array object. Thus, when deleting an array object (by IMTECNFillingArray::Release call), the earlier inserted objects will be automatically deleted.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to become invalid. Therefore, an attempt to access this pointer (including the case when you delete the array object) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNHistoryFillingArray *array=api->ECNHistoryFillingCreateArray();  IMTECNHistoryFilling *order1=api->ECNHistoryFillingCreate(); IMTECNHistoryFilling *order2=api->ECNHistoryFillingCreate(); //--- array->Add(order1); array->Update(0,order2); // the first element (the order1 object) is replaced with order2 //--- after that the order1 element will be released via Release, and order2 lifetime will be controlled by the array  
---