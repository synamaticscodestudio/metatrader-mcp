# TradeRequestCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeRequestCreate | [](serverapi_trading_request.md "Trade Requests") [](imtserverapi_traderequestcreatearray.md "TradeRequestCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeRequestCreate
Create an object of a trade request.
IMTRequest* IMTServerAPI::TradeRequestCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTRequest](imtrequest.md "IMTRequest") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTRequest::Release](imtrequest_release.md "Release") method of this object.