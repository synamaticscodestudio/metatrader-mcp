# PriceClient (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ PriceClient | [](imtecnhistorymatching_price.md "Price") [](imtecnhistorymatching_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::PriceClient
Get the price specified in the original client order.
C++
double IMTECNHistoryMatching::PriceClient() const  
---  
.NET (Gateway/Manager API)
double CIMTECNHistoryMatching.PriceClient()  
---  
Return Value
Price in the client order.
IMTECNHistoryMatching::PriceClient
Set the price specified in the original client order.
C++
MTAPIRES IMTECNHistoryMatching::PriceClient( const double price // order price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.PriceClient( double  price // order price )  
---  
Parameters
price
[in] Price in the client order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.