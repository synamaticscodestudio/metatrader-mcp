# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Delete | [](imtsubscriptionarray_addcopy.md "AddCopy") [](imtsubscriptionarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Delete
Delete a subscription object by position.
C++
MTAPIRES IMTSubscriptionArray::Delete( const UINT pos // Subscription position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.Delete( uint pos // Subscription position )  
---  
Parameters
pos
[in] Position of a subscription in an array, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by [IMTSubscription::Release](imtsubscription_release.md "Release") call.