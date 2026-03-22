# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionNews ](imtconsubscriptionnews.md "IMTConSubscriptionNews")/ Assign | [](imtconsubscriptionnews_release.md "Release") [](imtconsubscriptionnews_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionNews::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSubscriptionNews::Assign( const IMTConSubscriptionNews* news // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscriptionNews.Assign( CIMTConSubscriptionNews news // Source object )  
---  
Parameters
news
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.