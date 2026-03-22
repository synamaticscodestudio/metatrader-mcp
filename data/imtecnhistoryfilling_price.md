# Price (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Price | [](imtecnhistoryfilling_volumecurrentext.md "VolumeCurrentExt") [](imtecnhistoryfilling_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Price
Get the price of the order created in the ECN for the filling of the client order.
C++
double IMTECNHistoryFilling::Price() const  
---  
.NET (Gateway/Manager API)
double CIMTECNHistoryFilling.Price()  
---  
Return Value
Order price in the ECN.
IMTECNHistoryFilling::Price
Set the price of the order created in the ECN for the filling of the client order.
C++
MTAPIRES IMTECNHistoryFilling::Price( const double price // order price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Price( double  price // order price )  
---  
Parameters
price
[in] Order price in the ECN.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.