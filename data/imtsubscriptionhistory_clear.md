# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Clear | [](imtsubscriptionhistory_assign.md "Assign") [](imtsubscriptionhistory_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory::Clear
Clear an object.
C++
MTAPIRES IMTSubscriptionHistory::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistory.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method clears all fields ​​and removes embedded objects.