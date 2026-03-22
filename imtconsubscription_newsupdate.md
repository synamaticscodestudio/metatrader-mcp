# NewsUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ NewsUpdate | [](imtconsubscription_newsadd.md "NewsAdd") [](imtconsubscription_newsdelete.md "NewsDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::NewsUpdate
Edit a news category in the news list available by subscription.
C++
MTAPIRES IMTConSubscription::NewsUpdate( const UINT pos, // News configuration position const IMTConSubscriptionNews*  news // News configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.NewsUpdate( uint pos, // News configuration position CIMTConSubscriptionSymbol news // News configuration object )  
---  
Parameters
pos
[in] Position of a news setting in the list, starting with 0.
news
[in] News configuration object [IMTConSubscriptionNews](imtconsubscriptionnews.md "IMTConSubscriptionNews").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.