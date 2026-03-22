# SubscriptionCfgSymbolCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgSymbolCreate | [](imtadminapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") [](imtadminapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgSymbolCreate
Create a subscription symbol configuration object.
C++
IMTConSubscriptionSymbol* IMTAdminAPI::SubscriptionCfgSymbolCreate()  
---  
.NET
CIMTConSubscriptionSymbol CIMTAdminAPI.SubscriptionCfgSymbolCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionSymbol::Release](imtconsubscriptionsymbol_release.md "Release") method of this object.