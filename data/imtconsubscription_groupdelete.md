# GroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ GroupDelete | [](imtconsubscription_groupupdate.md "GroupUpdate") [](imtconsubscription_groupclear.md "GroupClear") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::GroupDelete
Delete a group for which the subscription is available.
C++
MTAPIRES IMTConSubscription::GroupDelete( const UINT pos // Group position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.GroupDelete( uint pos // Group position )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.