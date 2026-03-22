# TickLast (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ TickLast | [](imtconfirm_tickask.md "TickAsk") [](imtconfirm_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::TickLast
Get the Last price (price of the last conducted deal) sent in response to a trade request.
C++
double IMTConfirm::TickLast() const  
---  
.NET (Gateway/Manager API)
double CIMTConfirm.TickLast()  
---  
Return Value
The Last price sent in response to a trade request.
Note
If a trade request is a request for the price, then in response to it the price of the respective symbol is returned to the client.
IMTConfirm::TickLast
Set the Last price (price of the last conducted deal) price sent in response to a trade request.
C++
MTAPIRES IMTConfirm::TickLast( const double ticklast // Last price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.TickLast( double ticklast // Last price )  
---  
Parameters
ticklast
[in] The Last price sent in response to a trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If a trade request is a request for the price, then in response to it the price of the respective symbol is returned to the client.