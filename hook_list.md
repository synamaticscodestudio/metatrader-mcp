# List of Hooks (MetaTrader5SDK)

|  | List of Hooks | [](event_list.md "List of Events") [](support.md "Technical Support") |
| --- | --- | --- |
| --- | --- |

List of Hooks
Server API  
---  
[HookManagerCommand](imtcustomsink_hookmanagercommand.md "HookManagerCommand") | A hook of an event of execution of a manager's custom command.  
[HookWebAPICommand](imtcustomsink_hookwebapicommand.md "HookWebAPICommand") | A hook of an event of execution of a web-client's command.  
[HookTradeRequestAdd](imttradesink_hooktraderequestadd.md "HookTradeRequestAdd") | A hook for adding a checked trade request in the requests queue.  
[HookTradeRequestRoute](imttradesink_hooktraderequestroute.md "HookTradeRequestRoute") | A hook of trade request routing in a requests queue.  
[HookTradeRequestProcess](imttradesink_hooktraderequestprocess.md "HookTradeRequestProcess") | A hook of trade request execution.  
[HookTradeRequestProcessCloseBy](imttradesink_hooktraderequestprocesscloseby.md "HookTradeRequestProcessCloseBy") | A hook of a Close By trade request execution.  
[HookTradeRollover](imttradesink_hooktraderollover.md "HookTradeRollover") | A hook of rollover charging.  
[HookTradeInterest](imttradesink_hooktradeinterest.md "HookTradeInterest") | A hook of calculation of annual interest.  
[HookTradeInterestCharge](imttradesink_hooktradeinterestcharge.md "HookTradeInterestCharge") | A hook of adding the calculated amount of the annual interest to a client's account.  
[HookTradeInterestChargeDeal](imttradesink_hooktradeinterestchargedeal.md "HookTradeInterestChargeDeal") | A hook of a balance deal for charging annual interest.  
[HookTradeCommissionOrder](imttradesink_hooktradecommissionorder.md "HookTradeCommissionOrder") | A hook for calculating commissions that are locked on an account when conducting a trade operation.  
[HookTradeCommissionCharge](imttradesink_hooktradecommissioncharge.md "HookTradeCommissionCharge") | Hook of final adding/withdrawal of commissions from an account at the end of a day/month.  
[HookTradeCommissionDeal](imttradesink_hooktradecommissiondeal.md "HookTradeCommissionDeal") | A hook of commissions charged instantly at executing a deal (in the IMTConCommission::COMM_CHARGE_INSTANT mode).  
[HookTradeExecution](imttradesink_hooktradeexecution.md "HookTradeExecution") | A hook of applying a trade execution.  
[HookUserAdd](imtusersink_hookuseradd.md "HookUserAdd") | A hook of an event of adding a new client record.  
[HookUserUpdate](imtusersink_hookuserupdate.md "HookUserUpdate") | A hook of an event of client record update.  
[HookUserDelete](imtusersink_hookuserdelete.md "HookUserDelete") | A hook of an event of client record deletion.  
[HookUserLogin](imtusersink_hookuserlogin.md "HookUserLogin") | A hook of a client's connection to the server.  
[HookTick](imtticksink_hooktick.md "HookTick") | A hook of an event of new quote arrival.  
[HookTickStat](imtticksink_hooktickstat.md "HookTickStat") | A hook of an event of update of the statistical information about a price.  
[HookMail](imtmailsink_hookmail.md "HookMail") | A hook of the event of email receiving.  
[HookNews](imtnewssink_hooknews.md "HookNews") | A hook of the event of news receiving.  
Gateway API  
[HookServerConnect](imtgatewaysink_hookserverconnect.md "HookServerConnect") | The hook for managing MetaTrader 5 platform components connections to Gateway API.  
[HookGatewayPositionsRequest](imtgatewaysink_hookgatewaypositionsrequest.md "HookGatewayPositionsRequest") | The hook for receiving states of trading accounts used by the gateway to operate in an external system.  
[HookGatewayPositionsCheck](imtgatewaysink_hookgatewaypositionscheck.md "HookGatewayPositionsCheck") | Hook for positions verification. This method is reserved for future use.  
[HookGatewayOrdersRequest](imtgatewaysink_hookgatewayordersrequest.md "HookGatewayOrdersRequest") | The hook for receiving the state of the client's current pending orders in an external trading system.  
[HookGatewayAccountRequest](imtgatewaysink_hookgatewayaccountrequest.md "HookGatewayAccountRequest") | The hook for synchronizing client's trading data with an external trading system.