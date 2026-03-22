# Commission (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Commission | [](imtecnhistorydeal_digitsgateway.md "DigitsGateway") [](imtecnhistorydeal_provider.md "Provider") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Commission
Get the commission charged by an external system for the deal.
C++
UINT IMTECNHistoryDeal::Commission() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryDeal.Commission()  
---  
Return Value
Commission charged by the external system for the deal.
Note
The commission is charged by the gateway through which the deal is executed.
IMTECNHistoryDeal::Commission
Set the commission charged by an external system for the deal.
C++
MTAPIRES IMTECNHistoryDeal::Commission( const UINT commission // commission )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Commission( uint  commission // commission )  
---  
Parameters
commission
[in] Commission charged by the external system for the deal.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.