# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Order | [](imtecnhistoryfilling_clear.md "Clear") [](imtecnhistoryfilling_ordermatching.md "OrderMatching") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Order
Get the order ticket in the MetaTrader 5 platform.
C++
UINT64 IMTECNHistoryFilling::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryFilling.Order()  
---  
Return Value
Order ticket in the MetaTrader 5 platform.
IMTECNHistoryFilling::Order
Set the order ticket in the MetaTrader 5 platform.
C++
MTAPIRES IMTECNHistoryFilling::Order( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Order( ulong  order // order ticket )  
---  
Parameters
order
[in] The ticket of the filling order in the MetaTrader 5 platform.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.