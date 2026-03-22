# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Next | [](imtsubscriptionhistoryarray_total.md "Total") [](imtsubscriptionhistoryarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Next
Get a subscription action object by position.
C++
IMTSubscriptionHistory* IMTSubscriptionHistoryArray::Next( const UINT pos // Action position ) const  
---  
.NET (Gateway/Manager API)
CIMTSubscriptionHistory CIMTSubscriptionHistoryArray.Next( uint  pos // Action position )  
---  
Parameters
pos
[in] Position of a subscription action in an array, starting at 0.
Return Value
If successful, it returns a pointer to the action object at the specified array position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
The removal of the returned object (by calling [IMTSubscriptionHistory::Release](imtsubscriptionhistory_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including an attempt to delete an array object) will cause the plugin and the server to crash.