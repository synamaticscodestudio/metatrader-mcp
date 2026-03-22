# DealGateway (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ DealGateway | [](imtecnhistorydeal_ordergateway.md "OrderGateway") [](imtecnhistorydeal_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::DealGateway
Get the internal ticket of the deal (used within the ECN for internal purposes).
C++
UINT64 IMTECNHistoryDeal::DealGateway() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryDeal.DealGateway()  
---  
Return Value
The internal ticket of the deal.
IMTECNHistoryDeal::DealGateway
Set the internal ticket of the deal (used within the ECN for internal purposes).
C++
MTAPIRES IMTECNHistoryDeal::DealGateway( const UINT64 deal // deal ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.DealGateway( ulong  deal // deal ticket )  
---  
Parameters
deal
[in] The internal ticket of the deal.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.