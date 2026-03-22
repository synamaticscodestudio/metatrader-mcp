# Detach (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Detach | [](imtsubscriptionarray_delete.md "Delete") [](imtsubscriptionarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Detach
Detach a subscription object from an array.
C++
IMTSubscription* IMTSubscriptionArray::Detach( const UINT pos // Subscription position ) const  
---  
.NET (Gateway/Manager API)
CIMTSubscription CIMTSubscriptionArray.Detach( uint pos // Subscription position )  
---  
Parameters
pos
[in] Position of a subscription in an array, starting at 0.
Return Value
Returns a pointer to the detached subscription object.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, while the deleted object is not freed.