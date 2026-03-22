# SubscriptionCfgGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Subscriptions ](imtreportapi_config_subscription.md "Subscriptions")/ SubscriptionCfgGet | [](imtreportapi_subscriptioncfgnext.md "SubscriptionCfgNext") [](imtreportapi_subscriptioncfggetbyid.md "SubscriptionCfgGetByID") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCfgGet
Get a subscription configuration by name.
MTAPIRES IMTReportAPI::SubscriptionCfgGet( LPCWSTR name, // Configuration name IMTConSubscription* config // Subscription configuration object )  
---  
Parameters
name
[in] Configuration name. The [IMTConSubscription::Name](imtconsubscription_name.md "Name") value is used for the configuration name.
config
[out] Subscription configuration object. The 'config' object must first be created using the [IMTReportAPI::SubscriptionCfgCreate](imtreportapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.