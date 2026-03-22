# NewsAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ NewsAdd | [](imtconsubscription_symbolnext.md "SymbolNext") [](imtconsubscription_newsupdate.md "NewsUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::NewsAdd
Add a news category to the news list available by subscription.
C++
MTAPIRES IMTConSubscription::NewsAdd( IMTConSubscriptionNews* news // News setting object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.NewsAdd( CIMTConSubscriptionNews news // News setting object )  
---  
Parameters
news
[in] News setting object [IMTConAutoCondition](imtconautocondition.md "IMTConAutoCondition").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.