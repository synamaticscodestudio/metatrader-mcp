# SubscriptionCfgNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNext | [](imtmanagerapi_subscriptioncfgtotal.md "SubscriptionCfgTotal") [](imtmanagerapi_subscriptioncfgget.md "SubscriptionCfgGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgNext
Get a subscription configuration by index.
C++
MTAPIRES IMTManagerAPI::SubscriptionCfgNext( const UINT pos, // Configuration position IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionCfgNext( uint pos, // Configuration position CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTManagerAPI::SubscriptionCfgCreate](imtmanagerapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the subscription configuration with a specified index to the 'config' object.