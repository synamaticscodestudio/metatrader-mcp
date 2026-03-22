# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Order | [](imtecnhistorymatching_clear.md "Clear") [](imtecnhistorymatching_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Order
Get the ticket of the matching order.
C++
UINT64 IMTECNHistoryMatching::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryMatching.Order()  
---  
Return Value
The ticket of the matching order.
IMTECNHistoryMatching::Order
Set the ticket of the matching order.
C++
MTAPIRES IMTECNHistoryMatching::Order( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Order( ulong  order // order ticket )  
---  
Parameters
order
[in] The ticket of the matching order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.