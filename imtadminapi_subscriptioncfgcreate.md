# SubscriptionCfgCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgCreate | [](imtadminapi_config_subscription.md "Subscriptions") [](imtadminapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgCreate
Create a subscription configuration object.
C++
IMTConSubscription* IMTAdminAPI::SubscriptionCfgCreate()  
---  
.NET
CIMTConSubscription CIMTAdminAPI.SubscriptionCfgCreate()  
---  
Return Value
The function returns a pointer to the created object that implements the [IMTConSubscription](imtconsubscription.md "IMTConSubscription") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscription::Release](imtconsubscription_release.md "Release") method of this object.