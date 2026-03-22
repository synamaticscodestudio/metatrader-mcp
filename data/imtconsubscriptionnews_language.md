# Language (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionNews ](imtconsubscriptionnews.md "IMTConSubscriptionNews")/ Language | [](imtconsubscriptionnews_category.md "Category") [](imtconsubscriptionsink.md "IMTConSubscriptionSink") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionNews::Language
Get the language of news available by subscription.
C++
UINT IMTConSubscriptionNews::Language() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSubscriptionNews.Language()  
---  
Return Value
News language.
IMTConSubscriptionNews::Language
Set the language of news available by subscription.
C++
MTAPIRES IMTConSubscriptionNews::Language( const UINT language // News language )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscriptionNews.Language( uint language // News language )  
---  
Parameters
language
[in] The language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.