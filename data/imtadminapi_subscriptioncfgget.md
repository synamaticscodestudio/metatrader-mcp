# SubscriptionCfgGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgGet | [](imtadminapi_subscriptioncfgnext.md "SubscriptionCfgNext") [](imtadminapi_subscriptioncfggetbyid.md "SubscriptionCfgGetByID") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgGet
Get a subscription configuration by name.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgGet( LPCWSTR name, // Configuration name IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgGet( string name, // Configuration name CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
name
[in] Configuration name. The [IMTConSubscription::Name](imtconsubscription_name.md "Name") value is used for the configuration name.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTAdminAPI::SubscriptionCfgCreate](imtadminapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.