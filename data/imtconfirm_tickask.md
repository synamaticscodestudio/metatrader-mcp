# TickAsk (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ TickAsk | [](imtconfirm_tickbid.md "TickBid") [](imtconfirm_ticklast.md "TickLast") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::TickAsk
Get the Ask price sent in response to a trade request.
double IMTConfirm::TickAsk() const  
---  
Return Value
The Ask price sent in response to a trade request.
Note
If a trade request is a request for the price, then in response to it the price of the respective symbol is returned to the client.
IMTConfirm::TickAsk
Set the Ask price sent in response to a trade request.
MTAPIRES IMTConfirm::TickAsk( const double tickask // Ask price )  
---  
Parameters
tickask
[in] The Ask price sent in response to a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If a trade request is a request for the price, then in response to it the price of the respective symbol is returned to the client.