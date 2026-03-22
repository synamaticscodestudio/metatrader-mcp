# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ AddCopy | [](imtsubscriptionhistoryarray_add.md "Add") [](imtsubscriptionhistoryarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::AddCopy
Add a copy of a subscription action object to the end of an array.
C++
MTAPIRES IMTSubscriptionHistoryArray::AddCopy( const IMTSubscriptionHistory* record // Action to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.AddCopy( CIMTSubscription record // Action to be added )  
---  
Parameters
record
[in] [Subscription action object](imtsubscriptionhistory.md "IMTSubscriptionHistory").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'record' object and places it at the end of the array.
Unlike [IMTSubscriptionHistoryArray::Add(IMTSubscriptionHistory* record)](imtsubscriptionhistoryarray_add.md "Add"), this method call does not set any additional conditions for the control of the 'record' object, but it is more resource-intensive since an additional object is created.
IMTSubscriptionHistoryArray::AddCopy
Add copies of subscription action objects to an array.
C++
MTAPIRES IMTSubscriptionHistoryArray::AddCopy( const IMTSubscriptionHistoryArray* array // Array of actions to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.AddCopy( CIMTSubscriptionHistoryArray  array // Array of actions to be added )  
---  
Parameters
array
[in] Object of an array of subscription actions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of order objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTSubscriptionHistoryArray::Add(IMTSubscriptionHistoryArray* array)](imtsubscriptionhistoryarray_add.md "Add"), this method call does not change the source 'array' object, but it is more resource-intensive since additional objects are created.