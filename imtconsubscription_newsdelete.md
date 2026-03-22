# NewsDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ NewsDelete | [](imtconsubscription_newsupdate.md "NewsUpdate") [](imtconsubscription_newsclear.md "NewsClear") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::NewsDelete
Delete a news category from the news list available by subscription.
C++
MTAPIRES IMTConSubscription::NewsDelete( const UINT pos // News setting position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.SymbolDelete( uint pos // News setting position )  
---  
Parameters
pos
[in] Position of a news setting in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.