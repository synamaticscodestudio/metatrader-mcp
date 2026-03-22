# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Assign | [](imtsubscriptionhistoryarray_release.md "Release") [](imtsubscriptionhistoryarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTSubscriptionHistoryArray::Assign( const IMTSubscriptionHistoryArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatchingArray.Assign( CIMTSubscriptionHistoryArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.