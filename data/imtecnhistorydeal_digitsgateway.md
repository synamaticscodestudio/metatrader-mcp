# DigitsGateway (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ DigitsGateway | [](imtecnhistorydeal_digits.md "Digits") [](imtecnhistorydeal_commission.md "Commission") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::DigitsGateway
Get the number of decimal places in the price of the symbol, for which the deal was executed, on the external system side.
C++
UINT IMTECNHistoryDeal::DigitsGateway() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryDeal.DigitsGateway()  
---  
Return Value
The number of decimal places in the symbol price
IMTECNHistoryDeal::DigitsGateway
Set the number of decimal places in the price of the symbol, for which the deal was executed, on the external system side.
C++
MTAPIRES IMTECNHistoryDeal::DigitsGateway( const UINT digits // number of decimal places in the price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.DigitsGateway( uint  digits // number of decimal places in the price )  
---  
Parameters
digits
[in] The number of decimal places in the symbol price.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.