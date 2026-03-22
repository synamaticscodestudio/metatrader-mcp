# NewsNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ NewsNext | [](imtconsubscription_newstotal.md "NewsTotal") [](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::NewsNext
Get a news category available by subscription, by index.
C++
MTAPIRES IMTConSubscription::NewsNext( const UINT pos, // News configuration position IMTConSubscriptionNews*  news // News configuration object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.NewsNext( uint pos, // News configuration position CIMTConSubscriptionNews news // News configuration object )  
---  
Parameters
pos
[in] Position of a news setting in the list, starting with 0.
news
[out] News setting position [IMTConSubscriptionNews](imtconsubscriptionnews.md "IMTConSubscriptionNews"). The 'news' object must be previously created by method [IMTServerAPI::SubscriptionCfgNewsCreate](imtserverapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate"), [IMTManagerAPI::SubscriptionCfgNewsCreate](imtmanagerapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate") or [IMTAdminAPI::SubscriptionCfgNewsCreate](imtadminapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.