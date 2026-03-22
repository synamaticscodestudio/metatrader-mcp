# SubscriptionCfgRequestByID (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgRequestByID | [](imtmanagerapi_subscriptioncfgrequest.md "SubscriptionCfgRequest") [](imtmanagerapi_selected.md "Selected Symbols") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgRequestByID
Request a subscription configuration from the server by its ID.
C++
MTAPIRES IMTManagerAPI::SubscriptionCfgRequestByID( const UINT64 id, // Configuration ID IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionCfgRequestByID( uint id, // Configuration ID CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
id
[in] Configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTManagerAPI::SubscriptionCfgCreate](imtmanagerapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.