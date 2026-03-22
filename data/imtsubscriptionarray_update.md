# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Update | [](imtsubscriptionarray_detach.md "Detach") [](imtsubscriptionarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Update
Change a subscription at the specified position of an array.
C++
MTAPIRES IMTSubscriptionArray::Update( const UINT pos, // Position IMTSubscription* record // Subscription object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.Update( uint pos, // Position CIMTSubscription record // Subscription object )  
---  
Parameters
pos
[in] Position of a subscription in an array, starting at 0.
record
[in] [Subscription object](imtsubscription.md "IMTSubscription").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The IMTSubscriptionArray::Update method deletes the previous element ([IMTSubscription::Release](imtsubscription_release.md "Release") call) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (by the IMTSubscriptionArray::Release call), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, an attempt to access this pointer (including an attempt to delete an array object) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTSubscriptionArray *array=api->SubscriptionCreateArray();  IMTSubscription *record1=api->SubscriptionCreate(); IMTSubscription *record2=api->SubscriptionCreate(); //--- array->Add(record1); array->Update(0,record2); // The first element (the 'record1' object) is replaced with record2 //--- After that the 'record1' element will be released via Release, and the 'record2' lifetime will be controlled by the array  
---