# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ Clear | [](imtsubscription_assign.md "Assign") [](imtsubscription_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::Clear
Clear an object.
C++
MTAPIRES IMTSubscription::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method clears all fields ​​and removes embedded objects.