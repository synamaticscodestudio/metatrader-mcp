# CountryNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ CountryNext | [](imtconsubscription_countrytotal.md "CountryTotal") [](imtconsubscription_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::CountryNext
Get a country, for which the subscription is available, by index.
C++
LPCWSTR IMTConSubscription::CountryNext( const UINT pos // Country position ) const  
---  
.NET (Gateway/Manager API)
string CIMTConSubscription.CountryNext( uint pos, // Country position )  
---  
Parameters
pos
[in] The position of a country in the list.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.