# PriceSL (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PriceSL | [](imtrequest_pricetrigger.md "PriceTrigger") [](imtrequest_pricetp.md "PriceTP") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PriceSL
Get the Stop Loss level in a trade request.
C++
double IMTRequest::PriceSL() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.PriceSL()  
---  
Return Value
The Stop Loss level in a trade request. The zero value means that the level is not set.
IMTRequest::PriceSL
Set the Stop Loss level in a trade request.
C++
MTAPIRES IMTRequest::PriceSL( const double price // Stop Loss )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.PriceSL( double price // Stop Loss )  
---  
Parameters
price
[in] The Stop Loss level in a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The zero value means that the level is not set.