# SubscriptionCfgGetByID (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgGetByID | [](imtmanagerapi_subscriptioncfgget.md "SubscriptionCfgGet") [](imtmanagerapi_subscriptioncfgrequest.md "SubscriptionCfgRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgGetByID
Get a subscription configuration by ID.
C++
MTAPIRES IMTManagerAPI::SubscriptionCfgGetByID( LPCWSTR name, // Configuration name IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionCfgGetByID( string name, // Configuration name CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
id
[in] Configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
config
[out] Subscription configuration object. The 'config' object must be previously created using the [IMTManagerAPI::SubscriptionCfgCreate](imtmanagerapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method only works if the [IMTManagerAPI::PUMP_MODE_SUBSCRIPTIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.