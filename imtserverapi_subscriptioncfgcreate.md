# SubscriptionCfgCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgCreate | [](serverapi_config_subscription.md "Subscriptions") [](imtserverapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgCreate
Create a subscription configuration object.
IMTConSubscription* IMTServerAPI::SubscriptionCfgCreate()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTConSubscription](imtconsubscription.md "IMTConSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscription::Release](imtconsubscription_release.md "Release") method of this object.