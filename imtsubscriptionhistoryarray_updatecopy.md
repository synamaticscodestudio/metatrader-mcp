# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ UpdateCopy | [](imtsubscriptionhistoryarray_update.md "Update") [](imtsubscriptionhistoryarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::UpdateCopy
Change a subscription action at the specified position of an array by copying the parameters of a passed action object.
C++
MTAPIRES IMTSubscriptionHistoryArray::UpdateCopy( const UINT  pos, // Position const IMTSubscriptionHistory* record // Action object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.UpdateCopy( uint  pos, // Position CIMTSubscriptionHistory record // Action object )  
---  
Parameters
pos
[in] Position of a subscription action in an array, starting at 0.
record
[in] [Subscription action object](imtsubscriptionhistory.md "IMTSubscriptionHistory").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method copies the 'record' object parameters to the subscription object at the specified position in the array.
Unlike the [IMTSubscriptionHistoryArray::Update](imtsubscriptionhistoryarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the 'record' object, but it is more resource-intensive since an additional object is created.