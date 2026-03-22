# SubscriptionCfgNewsCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNewsCreate | [](imtadminapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") [](imtadminapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgNewsCreate
Create a subscription news configuration object.
C++
IMTConSubscriptionNews* IMTAdminAPI::SubscriptionCfgNewsCreate()  
---  
.NET
CIMTConSubscriptionNews CIMTAdminAPI.SubscriptionCfgNewsCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionNews](imtconsubscriptionnews.md "IMTConSubscriptionNews") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionNews::Release](imtconsubscriptionnews_release.md "Release") method of this object.