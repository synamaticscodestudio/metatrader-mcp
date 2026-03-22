# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Order | [](imtecnhistorydeal_clear.md "Clear") [](imtecnhistorydeal_ordergateway.md "OrderGateway") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Order
Get the ticket of the original client order in the MetaTrader 5 platform.
C++
UINT64 IMTECNHistoryDeal::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryDeal.Order()  
---  
Return Value
The ticket of the original client order in the MetaTrader 5 platform.
IMTECNHistoryDeal::Order
Set the ticket of the original client order in the MetaTrader 5 platform.
C++
MTAPIRES IMTECNHistoryDeal::Order( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Order( ulong  order // order ticket )  
---  
Parameters
order
[in] The ticket of original client order in the MetaTrader 5 platform.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.