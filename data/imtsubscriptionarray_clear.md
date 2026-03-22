# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Clear | [](imtsubscriptionarray_assign.md "Assign") [](imtsubscriptionarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Clear
Clear an object.
C++
MTAPIRES IMTSubscriptionArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
This method clears all fields ​​and removes embedded objects.