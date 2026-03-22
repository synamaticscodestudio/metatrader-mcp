# SubscriptionCfgGetByID (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgGetByID | [](imtserverapi_subscriptioncfgget.md "SubscriptionCfgGet") [](serverapi_config_leverage.md "Floating Margin") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgGetByID
Get a subscription configuration by ID.
MTAPIRES IMTServerAPI::SubscriptionCfgGetByID( const UINT64 id, // Configuration ID IMTConSubscription* config // Subscription configuration object )  
---  
Parameters
id
[in] Configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTServerAPI::SubscriptionCfgCreate](imtserverapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.