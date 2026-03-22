# SubscriptionCfgNewsCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgNewsCreate | [](imtmanagerapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") [](imtmanagerapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgNewsCreate
Create a subscription configuration object.
C++
IMTConSubscriptionNews* IMTManagerAPI::SubscriptionCfgNewsCreate()  
---  
.NET
CIMTConSubscriptionNews CIMTManagerAPI.SubscriptionCfgNewsCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionNews](imtconsubscriptionnews.md "IMTConSubscriptionNews") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionNews::Release](imtconsubscriptionnews_release.md "Release") method of this object.