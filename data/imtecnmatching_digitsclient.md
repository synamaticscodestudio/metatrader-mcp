# DigitsClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ DigitsClient | [](imtecnmatching_digits.md "Digits") [](imtecnmatching_volumeinitialext.md "VolumeInitialExt") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::DigitsClient
Get the number of decimal places in the price of the symbol, for which an order is placed on the client side.
C++
UINT IMTECNMatching::DigitsClient() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNMatching.DigitsClient()  
---  
Return Value
The number of decimal places in the symbol price
IMTECNMatching::DigitsClient
Set the number of decimal places in the price of the symbol, for which an order is placed on the client side.
C++
MTAPIRES IMTECNMatching::DigitsClient( const UINT digits // number of decimal places in the price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.DigitsClient( uint  digits // number of decimal places in the price )  
---  
Parameters
digits
[in] The number of decimal places in the symbol price.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.