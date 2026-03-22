# SubscriptionCfgSymbolCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Subscriptions ](imtreportapi_config_subscription.md "Subscriptions")/ SubscriptionCfgSymbolCreate | [](imtreportapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") [](imtreportapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCfgSymbolCreate
Create a subscription configuration object.
IMTConSubscriptionSymbol* IMTReportAPI::SubscriptionCfgSymbolCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionSymbol::Release](imtconsubscriptionsymbol_release.md "Release") method of this object.