# Digits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Digits | [](imtecnhistorydeal_pricegateway.md "PriceGateway") [](imtecnhistorydeal_digitsgateway.md "DigitsGateway") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Digits
Get the number of decimal places in the price of the symbol, for which the deal was executed, on the trading platform side.
C++
UINT IMTECNHistoryDeal::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryDeal.Digits()  
---  
Return Value
The number of decimal places in the symbol price
IMTECNHistoryDeal::Digits
Set the number of decimal places in the price of the symbol, for which the deal was executed, on the trading platform side.
C++
MTAPIRES IMTECNHistoryDeal::Digits( const UINT digits // number of decimal places in the price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Digits( uint  digits // number of decimal places in the price )  
---  
Parameters
digits
[in] The number of decimal places in the symbol price.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.