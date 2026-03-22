# SubscriptionCfgNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNext | [](imtadminapi_subscriptioncfgtotal.md "SubscriptionCfgTotal") [](imtadminapi_subscriptioncfgget.md "SubscriptionCfgGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgNext
Get a subscription configuration by index.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgNext( const UINT pos, // Configuration position IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgNext( uint pos, // Configuration position CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTAdminAPI::SubscriptionCfgCreate](imtadminapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the subscription configuration with a specified index to the 'config' object.