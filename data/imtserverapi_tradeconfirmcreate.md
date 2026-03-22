# TradeConfirmCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeConfirmCreate | [](imtserverapi_traderequestcreatearray.md "TradeRequestCreateArray") [](imtserverapi_tradeexecutioncreate.md "TradeExecutionCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeConfirmCreate
Create an object of a trade request confirmation.
IMTConfirm* IMTServerAPI::TradeConfirmCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConfirm](imtconfirm.md "IMTConfirm") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConfirm::Release](imtconfirm_release.md "Release") method of this object.