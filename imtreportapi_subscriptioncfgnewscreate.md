# SubscriptionCfgNewsCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Subscriptions ](imtreportapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNewsCreate | [](imtreportapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") [](imtreportapi_subscriptioncfgtotal.md "SubscriptionCfgTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCfgNewsCreate
Create a subscription configuration object.
IMTConSubscriptionNews* IMTReportAPI::SubscriptionCfgNewsCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionNews](imtconsubscriptionnews.md "IMTConSubscriptionNews") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionNews::Release](imtconsubscriptionnews_release.md "Release") method of this object.