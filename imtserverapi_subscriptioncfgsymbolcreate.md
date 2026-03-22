# SubscriptionCfgSymbolCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgSymbolCreate | [](imtserverapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") [](imtserverapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgSymbolCreate
Create a subscription configuration object.
IMTConSubscriptionSymbol* IMTServerAPI::SubscriptionCfgSymbolCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionSymbol::Release](imtconsubscriptionsymbol_release.md "Release") method of this object.