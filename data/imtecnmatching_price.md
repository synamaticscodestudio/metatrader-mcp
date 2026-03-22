# Price (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Price | [](imtecnmatching_typetime.md "TypeTime") [](imtecnmatching_priceclient.md "PriceClient") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Price
Get the price of the order created in the ECN for the filling of the client order.
C++
double IMTECNMatching::Price() const  
---  
.NET (Gateway/Manager API)
double CIMTECNMatching.Price()  
---  
Return Value
Order price in the ECN.
IMTECNMatching::Price
Set the price of the order created in the ECN for the filling of the client order.
C++
MTAPIRES IMTECNMatching::Price( const double price // order price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Price( double  price // order price )  
---  
Parameters
price
[in] Order price in the ECN.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.