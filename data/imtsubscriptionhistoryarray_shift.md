# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistoryArray ](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray")/ Shift | [](imtsubscriptionhistoryarray_updatecopy.md "UpdateCopy") [](imtsubscriptionhistoryarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray::Shift
Change the position of a subscription action in an array.
C++
MTAPIRES IMTSubscriptionHistoryArray::Shift( const UINT pos, // Action position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscriptionHistoryArray.Shift( uint pos, // Action position int shift // Shift )  
---  
Parameters
pos
[in] Position of a subscription action in an array, starting at 0.
shift
[in] The shift of the action relative to its current position. A negative value means shift towards the array beginning, while a positive value means shift towards its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.