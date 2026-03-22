# SubscriptionCfgGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgGet | [](imtserverapi_subscriptioncfgnext.md "SubscriptionCfgNext") [](imtserverapi_subscriptioncfggetbyid.md "SubscriptionCfgGetByID") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgGet
Get a subscription configuration by name.
MTAPIRES IMTServerAPI::SubscriptionCfgGet( LPCWSTR name, // Configuration name IMTConSubscription* config // Subscription configuration object )  
---  
Parameters
name
[in] Configuration name. The [IMTConSubscription::Name](imtconsubscription_name.md "Name") value is used for the configuration name.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTServerAPI::SubscriptionCfgCreate](imtserverapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.