# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Delete | [](imtsubscriptionhistoryarray_addcopy.md "AddCopy") [](imtsubscriptionhistoryarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Delete
Delete a subscription action object by position.
C++
MTAPIRES IMTSubscriptionHistoryArray::Delete( const UINT pos // Action position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.Delete( uint pos // Action position )  
---  
Parameters
pos
[in] Position of a subscription action in an array, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by [IMTSubscriptionHistory::Release](imtsubscriptionhistory_release.md "Release") call.