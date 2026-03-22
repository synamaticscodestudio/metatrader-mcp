# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ AddCopy | [](imtsubscriptionarray_add.md "Add") [](imtsubscriptionarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::AddCopy
Add a copy of a subscription object at the end of an array.
C++
MTAPIRES IMTSubscriptionArray::AddCopy( const IMTSubscription* record // Subscription to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.AddCopy( CIMTSubscription record // Subscription to be added )  
---  
Parameters
record
[in] [Subscription object](imtsubscription.md "IMTSubscription").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'record' object and places it at the end of the array.
Unlike [IMTSubscriptionArray::Add(IMTSubscription* record)](imtsubscriptionarray_add.md "Add"), this method call does not set any additional conditions for the control of the 'record' object, but it is more resource-intensive since an additional object is created.
IMTSubscriptionArray::AddCopy
Add copies of subscription objects into an array.
C++
MTAPIRES IMTSubscriptionArray::AddCopy( const IMTSubscriptionArray* array // Array of subscriptions to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.AddCopy( CIMTSubscriptionArray  array // Array of subscriptions to be added )  
---  
Parameters
array
[in] An object of the array of subscriptions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of order objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTSubscriptionArray::Add(IMTSubscriptionArray* array)](imtsubscriptionarray_add.md "Add"), this method call does not change the source 'array' object, but it is more resource-intensive since additional objects are created.