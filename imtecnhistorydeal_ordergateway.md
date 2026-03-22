# OrderGateway (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ OrderGateway | [](imtecnhistorydeal_order.md "Order") [](imtecnhistorydeal_dealgateway.md "DealGateway") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::OrderGateway
Get the internal ticket of the filling order (which is used within the ECN for internal purposes).
C++
UINT64 IMTECNHistoryDeal::OrderGateway() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryDeal.OrderGateway()  
---  
Return Value
The internal ticket of the filling order.
IMTECNHistoryDeal::OrderGateway
Set the internal ticket of the filling order (which is used within the ECN for internal purposes).
C++
MTAPIRES IMTECNHistoryDeal::OrderGateway( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.OrderGateway( ulong  order // order ticket )  
---  
Parameters
order
[in] The internal ticket of the filling order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.