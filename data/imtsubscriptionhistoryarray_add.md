# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Add | [](imtsubscriptionhistoryarray_clear.md "Clear") [](imtsubscriptionhistoryarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Add
Add a subscription action object to the end of an array.
C++
MTAPIRES IMTSubscriptionHistoryArray::Add( IMTSubscriptionHistory* record // Action to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.Add( CIMTSubscriptionHistory record // Action to be added )  
---  
Parameters
record
[in] [Subscription action object](imtsubscriptionhistory.md "IMTSubscriptionHistory").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the lifetime of the 'record' object is passed to the array object. Thus, when deleting an array object (by [IMTSubscriptionHistoryArray::Release](imtsubscriptionhistoryarray_release.md "Release") call), an earlier inserted object will be automatically deleted.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTSubscriptionHistoryArray::Add
Add an object of an array of subscription actions to the end of an array.
C++
MTAPIRES IMTSubscriptionHistoryArray::Add( IMTSubscriptionHistoryArray* array // Array of actions to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.Add( CIMTSubscriptionHistoryArray array // Array of actions to be added )  
---  
Parameters
array
[in] Object of an array of actions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers contained in the 'array' object, at the end of the current array and clears the 'array' object.
After a successful call of this method, control of objects which earlier belonged to the 'array' object is passed to the current array object. This clears the 'array' object (call of [IMTSubscriptionHistoryArray::Total](imtsubscriptionhistoryarray_total.md "Total") will return 0). When you delete the current array (by calling [IMTSubscriptionHistoryArray::Release](imtsubscriptionhistoryarray_release.md "Release")), all previously inserted objects are also deleted.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash. Use the [IMTSubscriptionHistoryArray::Delete](imtsubscriptionhistoryarray_delete.md "Delete") method to correctly delete an element.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTSubscriptionHistoryArray *array=api->SubscriptionHistoryCreateArray();  IMTSubscriptionHistory *record=api->SubscriptionHistoryCreate(); //--- array->Add(record); // After that the lifetime is controlled by the array array->Delete(0); // Delete the first element, after that a pointer in 'record' becomes invalid ('Release' was called) //--- Incorrect use example IMTSubscriptionHistoryArray *array=api->SubscriptionHistoryCreateArray();  IMTSubscriptionHistory *record=api->SubscriptionHistoryCreate(); //--- array->Add(record); array->Add(record); // In this case the array will contain two pointers to one and the same object! //--- An attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---