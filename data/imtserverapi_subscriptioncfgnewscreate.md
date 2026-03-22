# SubscriptionCfgNewsCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNewsCreate | [](imtserverapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") [](imtserverapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgNewsCreate
Create a subscription configuration object.
IMTConSubscriptionNews* IMTServerAPI::SubscriptionCfgNewsCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionNews](imtconsubscriptionnews.md "IMTConSubscriptionNews") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionNews::Release](imtconsubscriptionnews_release.md "Release") method of this object.