# SubscriptionCfgCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Subscriptions ](imtreportapi_config_subscription.md "Subscriptions")/ SubscriptionCfgCreate | [](imtreportapi_config_subscription.md "Subscriptions") [](imtreportapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCfgCreate
Create a subscription configuration object.
IMTConSubscription* IMTReportAPI::SubscriptionCfgCreate()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTConSubscription](imtconsubscription.md "IMTConSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscription::Release](imtconsubscription_release.md "Release") method of this object.