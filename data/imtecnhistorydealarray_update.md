# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ Update | [](imtecnhistorydealarray_detach.md "Detach") [](imtecnhistorydealarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::Update
Change a deal at the specified position of an array.
C++
MTAPIRES IMTECNHistoryDealArray::Update( const UINT pos, // position IMTECNHistoryDeal* deal // deal object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDealArray.Update( uint pos, // position CIMTECNHistoryDealArray deal // deal object )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
deal
[in] [Deal object](imtecnhistorydeal.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The IMTECNHistoryDealArray::Update method deletes the previous element ([IMTECNHistoryDealArray::Release](imtecnmatching_release.md "Release") call) and replaces it with a new one. After that, the lifetime of the new element is controlled by an array object. Thus, when deleting an array object (by IMTECNHistoryDealArray::Release call), the earlier inserted objects will be automatically deleted.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to become invalid. Therefore, an attempt to access this pointer (including the case when you delete the array object) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- example IMTECNHistoryDealArray *array=api->ECNHistoryDealCreateArray();  IMTECNHistoryDeal *deal1=api->ECNHistoryDealCreate(); IMTECNHistoryDeal *deal2=api->ECNHistoryDealCreate(); //--- array->Add(order1); array->Update(0,order2); // the first element (the deal1 object) is replaced with deal2 //--- after that the deal1 element will be released via Release, and deal2 lifetime will be controlled by the array  
---