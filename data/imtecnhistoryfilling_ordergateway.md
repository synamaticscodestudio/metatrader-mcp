# OrderGateway (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ OrderGateway | [](imtecnhistoryfilling_ordermatching.md "OrderMatching") [](imtecnhistoryfilling_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::OrderGateway
Get the ticket of the filling order (used within the ECN).
C++
UINT64 IMTECNHistoryFilling::OrderGateway() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryFilling.OrderGateway()  
---  
Return Value
The ticket of the filling order.
IMTECNHistoryFilling::OrderGateway
Set the ticket of the filling order (used within the ECN).
C++
MTAPIRES IMTECNHistoryFilling::OrderGateway( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.OrderGateway( ulong  order // order ticket )  
---  
Parameters
order
[in] The ticket of the filling order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.