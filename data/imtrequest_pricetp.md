# PriceTP (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PriceTP | [](imtrequest_pricesl.md "PriceSL") [](imtrequest_pricedeviation.md "PriceDeviation") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PriceTP
Gets the Take Profit level in a trade request.
C++
double IMTRequest::PriceTP() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.PriceTP()  
---  
Return Value
The Take Profit level in a trade request. The zero value means that the level is not set.
IMTRequest::PriceTP
Sets the Take Profit level in a trade request.
C++
MTAPIRES IMTRequest::PriceTP( const double price // Take Profit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.PriceTP( double price // Take Profit )  
---  
Parameters
price
[in] The Take Profit level in a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The zero value means that the level is not set.