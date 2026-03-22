# Digits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Digits | [](imtecnhistorymatching_priceclient.md "PriceClient") [](imtecnhistorymatching_digitsclient.md "DigitsClient") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Digits
Get the number of decimal places in the price of the symbol, for which an order is placed on the ECN side.
C++
UINT IMTECNHistoryMatching::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.Digits()  
---  
Return Value
The number of decimal places in the symbol price
IMTECNHistoryMatching::Digits
Set the number of decimal places in the price of the symbol, for which an order is placed on the ECN side.
C++
MTAPIRES IMTECNHistoryMatching::Digits( const UINT digits // number of decimal places in the price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Digits( uint  digits // number of decimal places in the price )  
---  
Parameters
digits
[in] The number of decimal places in the symbol price.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.