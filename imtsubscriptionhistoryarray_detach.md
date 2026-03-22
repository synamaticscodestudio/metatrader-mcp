# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Detach | [](imtsubscriptionhistoryarray_delete.md "Delete") [](imtsubscriptionhistoryarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Detach
Detach a subscription action object from an array.
C++
IMTSubscriptionHistory* IMTSubscriptionHistoryArray::Detach( const UINT pos // Action position ) const  
---  
.NET (Gateway/Manager API)
CIMTSubscriptionHistory CIMTSubscriptionHistoryArray.Detach( uint pos // Action position )  
---  
Parameters
pos
[in] Position of a subscription action in an array, starting at 0.
Return Value
Returns a pointer to the detached subscription object.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, while the deleted object is not freed.