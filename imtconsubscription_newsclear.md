# NewsClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ NewsClear | [](imtconsubscription_newsdelete.md "NewsDelete") [](imtconsubscription_newsshift.md "NewsShift") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::NewsClear
Clear the list of news categories available by subscription.
C++
MTAPIRES IMTConSubscription::NewsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.NewsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method deletes all news categories from the news list available by subscription.