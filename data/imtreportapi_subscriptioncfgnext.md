# SubscriptionCfgNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Subscriptions ](imtreportapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNext | [](imtreportapi_subscriptioncfgtotal.md "SubscriptionCfgTotal") [](imtreportapi_subscriptioncfgget.md "SubscriptionCfgGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCfgNext
Get a subscription configuration by index.
MTAPIRES IMTReportAPI::SubscriptionCfgNext( const UINT pos, // Configuration position IMTConSubscription* config // Subscription configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] Subscription configuration object. The 'config' object must first be created using the [IMTReportAPI::SubscriptionCfgCreate](imtreportapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the subscription configuration with a specified index to the 'config' object.