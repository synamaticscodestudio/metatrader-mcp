# Digits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Digits | [](imtecnfilling_price.md "Price") [](imtecnfilling_deviation.md "Deviation") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Digits
Get the number of decimal places in the price of the symbol, for which an order is placed on the ECN side.
C++
UINT IMTECNFilling::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNFilling.Digits()  
---  
Return Value
The number of decimal places in the symbol price
IMTECNFilling::Digits
Set the number of decimal places in the price of the symbol, for which an order is placed on the ECN side.
C++
MTAPIRES IMTECNFilling::Digits( const UINT digits // number of decimal places in the price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Digits( uint  digits // number of decimal places in the price )  
---  
Parameters
digits
[in] The number of decimal places in the symbol price.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.