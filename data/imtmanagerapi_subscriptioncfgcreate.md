# SubscriptionCfgCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgCreate | [](imtmanagerapi_config_subscription.md "Subscriptions") [](imtmanagerapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgCreate
Create a subscription configuration object.
C++
IMTConSubscription* IMTManagerAPI::SubscriptionCfgCreate()  
---  
.NET
CIMTConSubscription CIMTManagerAPI.SubscriptionCfgCreate()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTConSubscription](imtconsubscription.md "IMTConSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscription::Release](imtconsubscription_release.md "Release") method of this object.