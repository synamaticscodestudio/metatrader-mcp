# SubscriptionCfgGetByID (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgGetByID | [](imtadminapi_subscriptioncfgget.md "SubscriptionCfgGet") [](imtadminapi_clients.md "Clients") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgGetByID
Get a subscription configuration by ID.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgGetByID( const UINT64 id, // Configuration ID IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgGetByID( uint id, // Configuration ID CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
id
[in] Configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTAdminAPI::SubscriptionCfgCreate](imtadminapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.