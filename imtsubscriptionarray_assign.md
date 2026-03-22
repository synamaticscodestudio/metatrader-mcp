# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionArray ](imtsubscriptionarray.md "IMTSubscriptionArray")/ Assign | [](imtsubscriptionarray_release.md "Release") [](imtsubscriptionarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTSubscriptionArray::Assign( const IMTSubscriptionArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Assign( CIMTSubscriptionArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.