# SubscriptionCfgNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNext | [](imtserverapi_subscriptioncfgtotal.md "SubscriptionCfgTotal") [](imtserverapi_subscriptioncfgget.md "SubscriptionCfgGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgNext
Get a subscription configuration by index.
MTAPIRES IMTServerAPI::SubscriptionCfgNext( const UINT pos, // Configuration position IMTConSubscription* config // Subscription configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTServerAPI::SubscriptionCfgCreate](imtserverapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the subscription configuration with a specified index to the 'config' object.