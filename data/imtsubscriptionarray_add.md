# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Add | [](imtsubscriptionarray_clear.md "Clear") [](imtsubscriptionarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Add
Add a subscription object to the end of an array.
C++
MTAPIRES IMTSubscriptionArray::Add( IMTSubscription* record // Subscription to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.Add( CIMTSubscription record // Subscription to be added )  
---  
Parameters
record
[in] [Subscription object](imtsubscription.md "IMTSubscription").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the lifetime of the 'record' object is passed to the array object. Thus, when deleting an array object (by [IMTSubscriptionArray::Release](imtsubscriptionarray_release.md "Release") call), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTSubscriptionArray::Add
Add a subscription object to the end of an array.
C++
MTAPIRES IMTSubscriptionArray::Add( IMTSubscriptionArray* array // Array of subscriptions to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.Add( CIMTSubscriptionArray array // Array of subscriptions to be added )  
---  
Parameters
array
[in] An object of the array of subscriptions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers contained in the 'array' object, at the end of the current array and clears the 'array' object.
After a successful call of this method, control of objects which earlier belonged to the 'array' object is passed to the current array object. This clears the 'array' object (call of [IMTSubscriptionArray::Total](imtsubscriptionarray_total.md "Total") will return 0). When you delete the current array (by calling [IMTSubscriptionArray::Release](imtsubscriptionarray_release.md "Release")), all previously inserted objects are deleted.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the plugin and the server to crash. Use the [IMTSubscriptionArray::Delete](imtsubscriptionarray_delete.md "Delete") method to correctly delete an element.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTSubscriptionArray *array=api->SubscriptionCreateArray();  IMTSubscription *record=api->SubscriptionCreate(); //--- array->Add(record); // After that the lifetime is controlled by the array array->Delete(0); // Delete the first element, after that a pointer in 'record' becomes invalid ('Release' was called) //--- Incorrect use example IMTSubscriptionArray *array=api->SubscriptionCreateArray();  IMTSubscription *record=api->SubscriptionCreate(); //--- array->Add(record); array->Add(record); // In this case the array will contain two pointers to one and the same object! //--- An attempt to clear the array will lead to crash, because this will be an attempt to delete the object twice  
---