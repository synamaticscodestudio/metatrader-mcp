# Price (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Price | [](imtecnhistorymatching_typetimeclient.md "TypeTimeClient") [](imtecnhistorymatching_priceclient.md "PriceClient") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Price
Get the price of the order created in the ECN for the filling of the client order.
C++
double IMTECNHistoryMatching::Price() const  
---  
.NET (Gateway/Manager API)
double CIMTECNHistoryMatching.Price()  
---  
Return Value
Order price in the ECN.
IMTECNHistoryMatching::Price
Set the price of the order created in the ECN for the filling of the client order.
C++
MTAPIRES IMTECNHistoryMatching::Price( const double price // order price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Price( double  price // order price )  
---  
Parameters
price
[in] Order price in the ECN.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.