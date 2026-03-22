# PriceOrder (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PriceOrder | [](imtrequest_partyid.md "PartyID") [](imtrequest_pricetrigger.md "PriceTrigger") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PriceOrder
Get the price of an order in a trade request.
C++
double IMTRequest::PriceOrder() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.PriceOrder()  
---  
Return Value
The price of an order in a trade request.
IMTRequest::PriceOrder
Set the price of an order in a trade request.
C++
MTAPIRES IMTRequest::PriceOrder( const double price // Order price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.PriceOrder( double price // Order price )  
---  
Parameters
price
[in] The price of an order in a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.