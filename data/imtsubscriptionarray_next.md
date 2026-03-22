# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Next | [](imtsubscriptionarray_total.md "Total") [](imtsubscriptionarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Next
Get a subscription object by position.
C++
IMTSubscription* IMTSubscriptionArray::Next( const UINT pos // Subscription position ) const  
---  
.NET (Gateway/Manager API)
CIMTSubscription CIMTSubscriptionArray.Next( uint  pos // Subscription position )  
---  
Parameters
pos
[in] Position of a subscription in an array, starting at 0.
Return Value
If successful, it returns a pointer to the subscription object at the specified array position. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
The removal of the returned object (by calling [IMTSubscription::Release](imtsubscription_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including an attempt to delete an array object) will cause the plugin and the server to crash.