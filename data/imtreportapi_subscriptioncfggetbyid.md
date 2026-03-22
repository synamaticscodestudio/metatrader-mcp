# SubscriptionCfgGetByID (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Subscriptions ](imtreportapi_config_subscription.md "Subscriptions")/ SubscriptionCfgGetByID | [](imtreportapi_subscriptioncfgget.md "SubscriptionCfgGet") [](imtreportapi_config_fund.md "Funds and ETF") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::SubscriptionCfgGetByID
Get a subscription configuration by ID.
MTAPIRES IMTReportAPI::SubscriptionCfgGetByID( const UINT64 id, // Configuration ID IMTConSubscription* config // Subscription configuration object )  
---  
Parameters
id
[in] Configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
config
[out] Subscription configuration object. The 'config' object must first be created using the [IMTReportAPI::SubscriptionCfgCreate](imtreportapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.