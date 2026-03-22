# Trade Requests (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade")/ Trade Requests | [](imtserverapi_positionsplit.md "PositionSplit") [](imtserverapi_traderequestcreate.md "TradeRequestCreate") |
| --- | --- | --- |
| --- | --- |

Trade Requests
Trade request functions provide access to conducting trading operations on the server through the plugin. They also allow subscribing to events associated with changes in the queue of requests.
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [TradeRequestCreate](imtserverapi_traderequestcreate.md "TradeRequestCreate") | Creates an object of a trade request. |
| [TradeRequestCreateArray](imtserverapi_traderequestcreatearray.md "TradeRequestCreateArray") | Creates an object of the array of trade requests. |
| [TradeConfirmCreate](imtserverapi_tradeconfirmcreate.md "TradeConfirmCreate") | Creates an object of a trade request confirmation. |
| [TradeExecutionCreate](imtserverapi_tradeexecutioncreate.md "TradeExecutionCreate") | Creates an object of a trade request. |
| [TradeSubscribe](imtserverapi_tradesubscribe.md "TradeSubscribe") | Subscribes to events and hooks associated with trade requests. |
| [TradeUnsubscribe](imtserverapi_tradeunsubscribe.md "TradeUnsubscribe") | Unsubscribes from events and hooks associated with trade requests. |
| [TradeRequest](imtserverapi_traderequest.md "TradeRequest") | Adds a trade request to the queue of requests. |
| [TradeProfit](imtserverapi_tradeprofit.md "TradeProfit") | Calculates profit for the specified trading conditions. |
| [TradeProfitExt](imtserverapi_tradeprofitext.md "TradeProfitExt") | Calculates profit for the specified trading conditions using extended volume accuracy. |
| [TradeRateBuy](imtserverapi_traderatebuy.md "TradeRateBuy") | Calculates the conversion rate for a Buy trade. |
| [TradeRateSell](imtserverapi_traderatesell.md "TradeRateSell") | Calculates the conversion rate for a Sell trade. |
| [TradeMarginCheck](imtserverapi_trademargincheck.md "TradeMarginCheck") | Checks the availability of the margin required for the execution of this order. |
| [TradeMarginCheckExt](imtserverapi_trademargincheckext.md "TradeMarginCheckExt") | Checks the availability of the margin required for the execution of this order with the indication of increased accuracy volume. |
| [TradeBalanceCheck](imtserverapi_tradebalancecheck.md "TradeBalanceCheck") | Check and correction of a client's balance and credit assets. |
| [TradeSubscribeEOD](imtserverapi_tradesubscribeeod.md "TradeSubscribeEOD") | Subscribes to events associated with operations performed at the end of a trading day/month. |
| [TradeUnsubscribeEOD](imtserverapi_tradeunsubscribeeod.md "TradeUnsubscribeEOD") | Unsubscribes from events associated with operations performed at the end of a trading day/month. |
| [TradeAccountSet](imtserverapi_tradeaccountset.md "TradeAccountSet") | Synchronizes an account's trade state with an external system. |