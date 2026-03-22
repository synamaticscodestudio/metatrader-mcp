# SubscriptionCfgRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgRequest | [](imtmanagerapi_subscriptioncfggetbyid.md "SubscriptionCfgGetByID") [](imtmanagerapi_subscriptioncfgrequestbyid.md "SubscriptionCfgRequestByID") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgRequest
Request a subscription configuration from the server by its name.
C++
MTAPIRES IMTManagerAPI::SubscriptionCfgRequest( LPCWSTR name, // Configuration name IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionCfgRequest( string name, // Configuration name CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
name
[in] Configuration name. The [IMTConSubscription::Name](imtconsubscription_name.md "Name") value is used for the configuration name.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTManagerAPI::SubscriptionCfgCreate](imtmanagerapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.