# OrderMatching (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ OrderMatching | [](imtecnhistoryfilling_order.md "Order") [](imtecnhistoryfilling_ordergateway.md "OrderGateway") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::OrderMatching
Get the ticket of the matching orders used to fill the current order.
C++
UINT64 IMTECNHistoryFilling::OrderMatching() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryFilling.OrderMatching()  
---  
Return Value
The ticket of the matching orders used to fill the current order.
IMTECNHistoryFilling::OrderMatching
Set the ticket of the matching orders used to fill the current order.
C++
MTAPIRES IMTECNHistoryFilling::OrderMatching( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.OrderMatching( ulong  order // order ticket )  
---  
Parameters
order
[in] The ticket of the matching orders used to fill the current order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.