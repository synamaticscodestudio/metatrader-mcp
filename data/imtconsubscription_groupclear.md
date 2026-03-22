# GroupClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ GroupClear | [](imtconsubscription_groupdelete.md "GroupDelete") [](imtconsubscription_groupshift.md "GroupShift") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::GroupClear
Clear the list of groups for which the subscription is available.
C++
MTAPIRES IMTConSubscription::GroupClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.GroupClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method deletes all groups from the list.