# TradeExecutionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeExecutionCreate | [](imtserverapi_tradeconfirmcreate.md "TradeConfirmCreate") [](imtserverapi_tradesubscribe.md "TradeSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeExecutionCreate
Create an object of a trade request.
IMTExecution* IMTServerAPI::TradeExecutionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTExecution](imtexecution.md "IMTExecution") interface. In case of failure, it returns NULL.
Note
It returns a pointer to the created object that implements the [IMTExecution::Release](imtexecution_release.md "Release") method of this project.