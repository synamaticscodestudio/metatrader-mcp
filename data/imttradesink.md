# Interface of Trade Events (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Interface of Trade Events | [](imtcustomsink_hookplugincommand.md "HookPluginCommand") [](imttradesink_ontraderequestadd.md "OnTradeRequestAdd") |
| --- | --- | --- |
| --- | --- |

Interface of Trade Events IMTTradeSink
The IMTTradeSink class contains the following methods:
| Method | Description |
| --- | --- |
| --- | --- |
| [OnTradeRequestAdd](imttradesink_ontraderequestadd.md "OnTradeRequestAdd") | A handler of the event of adding a checked trade request in the requests queue. |
| [OnTradeRequestUpdate](imttradesink_ontraderequestupdate.md "OnTradeRequestUpdate") | A handler of the event of a changed state of a trade request. |
| [OnTradeRequestDelete](imttradesink_ontraderequestdelete.md "OnTradeRequestDelete") | A handler of the event of a trade request deletion. |
| [OnTradeRequestProcess](imttradesink_ontraderequestprocess.md "OnTradeRequestProcess") | A handler of the event of a successful execution of a trade request. |
| [OnTradeRequestProcessCloseBy](imttradesink_ontraderequestprocesscloseby.md "OnTradeRequestProcessCloseBy") | A handler of the event of a successful execution of a Close By trade request. |
| [OnTradeRequestRefuse](imttradesink_ontraderequestrefuse.md "OnTradeRequestRefuse") | A handler of the event of refusal to execute a trade request before it is added to the queue. |
| [OnTradeExecution](imttradesink_ontradeexecution.md "OnTradeExecution") | A handler of the event of receiving a trade execution from a gateway. |
| [OnTradeSplit](imttradesink_ontradesplit.md "OnTradeSplit") | A handler of the [trading position split](imtserverapi_positionsplit.md "PositionSplit") event. |
| [HookTradeRequestAdd](imttradesink_hooktraderequestadd.md "HookTradeRequestAdd") | A hook for adding a checked trade request in the requests queue. |
| [HookTradeRequestRoute](imttradesink_hooktraderequestroute.md "HookTradeRequestRoute") | A hook of trade request routing in a requests queue. |
| [HookTradeRequestProcess](imttradesink_hooktraderequestprocess.md "HookTradeRequestProcess") | A hook of trade request execution. |
| [HookTradeRequestProcessCloseBy](imttradesink_hooktraderequestprocesscloseby.md "HookTradeRequestProcessCloseBy") | A hook of a Close By trade request execution. |
| [HookTradeRequestRuleFilter](imttradesink_hooktraderequestrulefilter.md "HookTradeRequestRuleFilter") | A hooks of checking of whether a trade request meets a routing rule. |
| [HookTradeRequestRuleApply](imttradesink_hooktraderequestrulesapply.md "HookTradeRequestRuleApply") | A hook of the application of a routing rule to a trade request. |
| [HookTradeRollover](imttradesink_hooktraderollover.md "HookTradeRollover") | A hook of rollover charging. |
| [HookTradeInterest](imttradesink_hooktradeinterest.md "HookTradeInterest") | A hook of calculation of annual interest. |
| [HookTradeInterestCharge](imttradesink_hooktradeinterestcharge.md "HookTradeInterestCharge") | A hook of adding the calculated amount of the annual interest to a client's account. |
| [HookTradeInterestChargeDeal](imttradesink_hooktradeinterestchargedeal.md "HookTradeInterestChargeDeal") | A hook of a balance deal for charging annual interest. |
| [HookTradeCommissionOrder](imttradesink_hooktradecommissionorder.md "HookTradeCommissionOrder") | A hook of the calculation of commission, which is blocked on an account during the placing of an order. |
| [HookTradeCommissionDeal](imttradesink_hooktradecommissiondeal.md "HookTradeCommissionDeal") | A hook of the calculation of commission, which is charged during the execution of a deal. It is called before the calculation and charging/blocking commission on the account, allowing to use an individual commission calculation algorithm. |
| [HookTradeCommissionCharge](imttradesink_hooktradecommissioncharge.md "HookTradeCommissionCharge") | A hook for the final adding/withdrawal of commissions from an account at the end of a day/month. |
| [HookTradeExecution](imttradesink_hooktradeexecution.md "HookTradeExecution") | A hook of applying a trade execution. |
| [HookTradeSplit](imttradesink_hooktradesplit.md "HookTradeSplit") | A hook for the [trading position split](imtserverapi_positionsplit.md "PositionSplit"). |

To be able to receive trade events, the plugin must be subscribed to these events using the [IMTServerAPI::TradeSubscribe](imtserverapi_tradesubscribe.md "TradeSubscribe") method.  
---