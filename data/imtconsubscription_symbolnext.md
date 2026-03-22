# SymbolNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ SymbolNext | [](imtconsubscription_symboltotal.md "SymbolTotal") [](imtconsubscription_newsadd.md "NewsAdd") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::SymbolNext
Get a trading instrument available by subscription, by index.
C++
MTAPIRES IMTConSubscription::SymbolNext( const UINT pos, // Symbol position IMTConSubscriptionSymbol* symbol // Symbol object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.SymbolNext( uint pos, // Symbol position CIMTConSubscriptionSymbol symbol // Symbol object )  
---  
Parameters
pos
[in] Position of the symbol in the list, starting with 0.
symbol
[out] Symbol object [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol"). The 'symbol' object must be pre-created by the [IMTServerAPI::SubscriptionCfgSymbolCreate](imtserverapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate"), [IMTManagerAPI::SubscriptionCfgSymbolCreate](imtmanagerapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") or [IMTAdminAPI::SubscriptionCfgSymbolCreate](imtadminapi_subscriptioncfgsymbolcreate.md "SubscriptionCfgSymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.