# TradeRequest (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeRequest | [](imtserverapi_tradeunsubscribe.md "TradeUnsubscribe") [](imtserverapi_tradeprofit.md "TradeProfit") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeRequest
Add a trade request to the queue of requests.
MTAPIRES IMTServerAPI::TradeRequest( IMTRequest* request // An object of a trade request )  
---  
Parameters
request
[in] An object of a trade request that is being added. The request object must first be created using the [IMTServerAPI::TradeRequestCreate](imtserverapi_traderequestcreate.md "TradeRequestCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
To track the execution result, use trade events handlers in [IMTTradeSink](imttradesink.md "Interface of Trade Events"). To identify the request, use the [IMTRequest::ID](imtrequest_id.md "ID") property which is filled by the trade server in the request object when placing it to the queue. 