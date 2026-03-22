# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ Clear | [](imtconsubscription_assign.md "Assign") [](imtconsubscription_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::Clear
Clear an object.
C++
MTAPIRES IMTConSubscription::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method clears all fields ​​and removes embedded objects.