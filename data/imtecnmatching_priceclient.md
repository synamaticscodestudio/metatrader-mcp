# PriceClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ PriceClient | [](imtecnmatching_price.md "Price") [](imtecnmatching_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::PriceClient
Get the price specified in the original client order.
C++
double IMTECNMatching::PriceClient() const  
---  
.NET (Gateway/Manager API)
double CIMTECNMatching.PriceClient()  
---  
Return Value
Price in the client order.
IMTECNMatching::PriceClient
Set the price specified in the original client order.
C++
MTAPIRES IMTECNMatching::PriceClient( const double price // order price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.PriceClient( double  price // order price )  
---  
Parameters
price
[in] Price in the client order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.