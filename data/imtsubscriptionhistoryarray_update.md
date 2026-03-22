# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Update | [](imtsubscriptionhistoryarray_detach.md "Detach") [](imtsubscriptionhistoryarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Update
Change a subscription action at the specified position of an array.
C++
MTAPIRES IMTSubscriptionHistoryArray::Update( const UINT pos, // Position IMTSubscriptionHistory* record // Action object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.Update( uint pos, // Position CIMTSubscriptionHistory record // Action object )  
---  
Parameters
pos
[in] Position of a subscription action in an array, starting at 0.
record
[in] [Subscription action object](imtsubscriptionhistory.md "IMTSubscriptionHistory").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The IMTSubscriptionHistoryArray::Update method deletes the previously existing element (by calling [IMTSubscriptionHistory::Release](imtsubscriptionhistory_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (by <IMTSubscriptionHistoryArray::Release call), an earlier inserted object will be automatically deleted.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, an attempt to access this pointer (including an attempt to delete an array object) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTSubscriptionHistoryArray *array=api->SubscriptionHistoryCreateArray();  IMTSubscriptionHistory *record1=api->SubscriptionHistoryCreate(); IMTSubscriptionHistory *record2=api->SubscriptionHistoryCreate(); //--- array->Add(record1); array->Update(0,record2); // The first element (the 'record1' object) is replaced with record2 //--- After that the 'record1' element will be released via Release, and the 'record2' lifetime will be controlled by the array  
---