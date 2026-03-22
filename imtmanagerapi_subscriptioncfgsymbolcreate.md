# SubscriptionCfgSymbolCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgSymbolCreate | [](imtmanagerapi_subscriptioncfgcreate.md "SubscriptionCfgCreate") [](imtmanagerapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgSymbolCreate
Create a subscription configuration object.
C++
IMTConSubscriptionSymbol* IMTManagerAPI::SubscriptionCfgSymbolCreate()  
---  
.NET
CIMTConSubscriptionSymbol CIMTManagerAPI.SubscriptionCfgSymbolCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConSubscriptionSymbol::Release](imtconsubscriptionsymbol_release.md "Release") method of this object.