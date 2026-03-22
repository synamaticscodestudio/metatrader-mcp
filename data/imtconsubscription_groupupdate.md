# GroupUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ GroupUpdate | [](imtconsubscription_groupadd.md "GroupAdd") [](imtconsubscription_groupdelete.md "GroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::GroupUpdate
Change a group for which the subscription is available.
C++
MTAPIRES IMTConSubscription::GroupUpdate( const UINT pos, // Group position LPCWSTR path // Group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.GroupUpdate( uint pos, // Group position string path // Group )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
path
[in] New path to group or subgroup. For example, real\stocks or real\\*.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.