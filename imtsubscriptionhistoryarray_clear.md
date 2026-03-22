# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Clear | [](imtsubscriptionhistoryarray_assign.md "Assign") [](imtsubscriptionhistoryarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Clear
Clear an object.
C++
MTAPIRES IMTSubscriptionHistoryArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method clears all fields ​​and removes embedded objects.