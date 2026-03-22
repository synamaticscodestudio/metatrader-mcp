# GroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ GroupAdd | [](imtconsubscription_countrynext.md "CountryNext") [](imtconsubscription_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::GroupAdd
Add a group for which the subscription will be available.
C++
MTAPIRES IMTConSubscription::GroupAdd( LPCWSTR path // Group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.GroupAdd( string path // Group )  
---  
Parameters
path
[in] Path to group or subgroup. For example, real\stocks or real\\*.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.