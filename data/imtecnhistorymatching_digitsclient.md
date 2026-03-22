# DigitsClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ DigitsClient | [](imtecnhistorymatching_digits.md "Digits") [](imtecnhistorymatching_volumeinitialext.md "VolumeInitialExt") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::DigitsClient
Get the number of decimal places in the price of the symbol, for which an order is placed on the client side.
C++
UINT IMTECNHistoryMatching::DigitsClient() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryMatching.DigitsClient()  
---  
Return Value
The number of decimal places in the symbol price
IMTECNHistoryMatching::DigitsClient
Set the number of decimal places in the price of the symbol, for which an order is placed on the client side.
C++
MTAPIRES IMTECNHistoryMatching::DigitsClient( const UINT digits // number of decimal places in the price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.DigitsClient( uint  digits // number of decimal places in the price )  
---  
Parameters
digits
[in] The number of decimal places in the symbol price.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.