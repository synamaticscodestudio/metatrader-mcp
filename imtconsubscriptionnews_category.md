# Category (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionNews ](imtconsubscriptionnews.md "IMTConSubscriptionNews")/ Category | [](imtconsubscriptionnews_clear.md "Clear") [](imtconsubscriptionnews_language.md "Language") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionNews::Category
Get news categories available by subscription.
C++
LPCWSTR IMTConSubscriptionNews::Category() const  
---  
.NET (Gateway/Manager API)
string CIMTConSubscriptionNews.Category()  
---  
Return Value
If successful, it returns a pointer to a string with the news category. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSubscriptionNews](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") object.
To continue using the string after the object removal (call of the [IMTConSubscriptionNews::Release](imtconsubscriptionsymbol_release.md "Release") method of this object), create its copy.
IMTConSubscriptionNews::Category
Set news categories available by subscription.
C++
MTAPIRES IMTConSubscriptionNews::Category( LPCWSTR category // Categories )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscriptionNews.Category( string category // Categories )  
---  
Parameters
category
[in] News category.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
Categories are used for filtering news into [groups](config_group.md "Groups"), and for easy viewing of news in terminals.
The category name length is not limited.