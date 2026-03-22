# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Order | [](imtecnmatching_clear.md "Clear") [](imtecnmatching_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Order
Get the ticket of the matching order.
C++
UINT64 IMTECNMatching::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNMatching.Order()  
---  
Return Value
The ticket of the matching order.
IMTECNMatching::Order
Set the ticket of the matching order.
C++
MTAPIRES IMTECNMatching::Order( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Order( ulong  order // order ticket )  
---  
Parameters
order
[in] The ticket of the matching order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.