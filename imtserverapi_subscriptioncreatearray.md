# SubscriptionCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionCreateArray | [](imtserverapi_subscriptioncreate.md "SubscriptionCreate") [](imtserverapi_subscriptionsubscribe.md "SubscriptionSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCreateArray
Create an object of the subscriptions array.
IMTSubscriptionArray* IMTServerAPI::SubscriptionCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTSubscriptionArray](imtsubscriptionarray.md "IMTSubscriptionArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTSubscriptionArray::Release](imtsubscriptionarray_release.md "Release") method of this object.