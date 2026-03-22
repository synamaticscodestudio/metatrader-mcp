# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ UpdateCopy | [](imtsubscriptionarray_update.md "Update") [](imtsubscriptionarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::UpdateCopy
Change a subscription at the specified position of an array by copying the parameters of a passed subscription object.
C++
MTAPIRES IMTSubscriptionArray::UpdateCopy( const UINT  pos, // Position const IMTSubscription* record // Subscription object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.UpdateCopy( uint  pos, // Position CIMTSubscription record // Subscription object )  
---  
Parameters
pos
[in] Position of a subscription in an array, starting at 0.
record
[in] [Subscription object](imtsubscription.md "IMTSubscription").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method copies the 'record' object parameters to the subscription object at the specified position in the array.
Unlike the [IMTSubscriptionArray::Update](imtsubscriptionarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the 'record' object, but it is more resource-intensive since an additional object is created.