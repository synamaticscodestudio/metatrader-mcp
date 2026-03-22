# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionNews ](imtconsubscriptionnews.md "IMTConSubscriptionNews")/ Clear | [](imtconsubscriptionnews_assign.md "Assign") [](imtconsubscriptionnews_category.md "Category") |
| --- | --- | --- |
| --- | --- |

IMTConSubscriptionNews::Clear
Clear an object.
C++
MTAPIRES IMTConSubscriptionNews::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscriptionNews.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method clears all fields ​​and removes embedded objects.