# TickBid (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ TickBid | [](imtconfirm_price.md "Price") [](imtconfirm_tickask.md "TickAsk") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::TickBid
Get the Bid price sent in response to a trade request.
C++
double IMTConfirm::TickBid() const  
---  
.NET (Gateway/Manager API)
double CIMTConfirm.TickBid()  
---  
Return Value
The Bid price sent in response to a trade request.
Note
If a trade request is a request for the price, then in response to it the price of the respective symbol is returned to the client.
IMTConfirm::TickBid
Set the Bid price sent in response to a trade request.
C++
MTAPIRES IMTConfirm::TickBid( const double tickbid // Bid price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.TickBid( double tickbid // Bid price )  
---  
Parameters
tickbid
[in] The Bid price sent in response to a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If a trade request is a request for the price, then in response to it the price of the respective symbol is returned to the client.