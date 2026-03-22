# PriceGateway (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ PriceGateway | [](imtecnhistorydeal_price.md "Price") [](imtecnhistorydeal_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::PriceGateway
Get the price at which the deal was actually executed on the external system side.
C++
double IMTECNHistoryDeal::PriceGateway() const  
---  
.NET (Gateway/Manager API)
double CIMTECNHistoryDeal.PriceGateway()  
---  
Return Value
The price at which the deal was actually executed on the external system side.
IMTECNHistoryFilling::PriceGateway
Set the price at which the deal was actually executed on the external system side.
C++
MTAPIRES IMTECNHistoryDeal::PriceGateway( const double price // deal price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.PriceGateway( double  price // deal price )  
---  
Parameters
price
[in] The price at which the deal was actually executed on the external system side.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.