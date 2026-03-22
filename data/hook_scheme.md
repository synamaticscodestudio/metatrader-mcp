# Request Processing on the Server (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Request Processing on the Server | [](serverapi_hooks.md "Hooks") [](serverapi_best_practice.md "Recommendations for Developers") |
| --- | --- | --- |
| --- | --- |

Trade Request Processing by the Server and Call of Hooks
This section provides a description of the full path of a trade request from order placing by a client/dealer till its final processing on the server.
  1. A client or a dealer places an order through the client or manager terminal.
  2. The server receives the trade request and validates its digital signature.
  3. The server adds the request into the initial request queue.
  4. A separate stream performs a primary verification of requests. The following is checked at this stage:

  *     1. the overall validity of the request;
    2. the symbol specified in the request:
       * if symbol trading is allowed for the client group;
       * if the request time is in the trading session time;
       * if the request time falls on holiday;
       * if the request time is in the server operation time;
       * if the symbol trading time has not expired;
       * if the request has not timed out due to the absence of symbol quotes;
       * if the specified fill type is allowed for the symbols;
    3. if the account, from which the request has been received, is enabled;
    4. if trading is allowed for that account;
    5. if the account is not in the read-only mode;
    6. if there is a connection to the history server;
    7. Prices for the symbol are checked, current prices are received;
    8. Request parameters are checked:
       * volume;
       * normalization of prices;
       * verification of stop levels;
       * limit on the number of orders;
       * limit on the total volume of orders and positions;
    9. Check for sufficient margin.

  1. After all checks and verifications, but prior to adding the order, the [HookTradeRequestAdd](imttradesink_hooktraderequestadd.md "HookTradeRequestAdd") hook is called.
  2. If a request is successfully verified, the hook (hooks) returns the [MT_RET_OK](retcodes_successful.md "Successful completion") code, and the request is a request to place an order, a new order in the ["Started"](imtorder_enum.htm#enorderstate) state is created.
  3. After adding an order, the [OnTradeRequestAdd](imttradesink_ontraderequestadd.md "OnTradeRequestAdd") event is called.
  4. If any errors were detected during previous stages, the request is removed from the queue, and a transaction about the request deletion with a corresponding error code is sent.
  5. Verified requests are added to the routing queue, in which they are also handled in a separate thread.

  *     1. Before processing in accordance with the routing rules, the [HookTradeRequestRoute](imttradesink_hooktraderequestroute.md "HookTradeRequestRoute") hook is called:
       * If [MT_RET_REQUEST_DONE](retcodes_trade_request.md "Trade Requests") is returned from the hook, the request will be confirmed without using routing rules;
       * If [MT_RET_OK](retcodes_successful.md "Successful completion") is returned from the hook, the request will be processed in accordance with the routing rule;
       * If a different response code is returned, the request will be rejected with the appropriate return code.
    2. A request is analyzed in accordance with the routing rules from top to bottom.

  1. Depending on the routing rules, the request is forwarded to a dealer/gateway or it can be automatically confirmed and added to a separate server execution queue.
  2. A separate queue of requests is available for dealers. A dealer blocks an enqueued request, which the dealer is going to process. After that this request will not be visible to other dealers. The dealer then either confirms the request or rejects it using [IMTManagerAPI::DealerAnswer](imtmanagerapi_dealeranswer.md "DealerAnswer") and passing the appropriate [response code](retcodes_trade_request.md "Trade Requests") among other things in it. The following response codes highlight confirmation:

  1.      1. MT_RET_REQUEST_DONE — request fulfilled.
     2. MT_RET_REQUEST_DONE_PARTIAL — request partially fulfilled.
     3. MT_RET_REQUEST_REQUOTE — request requoted.
     4. MT_RET_REQUEST_REQUOTE_RETURN — request requoted and returned to the queue with new prices.

  1. If a gateway processes a request on the trading platform side, it responds to the request using [IMTGatewayAPI::DealerAnswerAsync](imtgatewayapi_dealeranswerasync.md "DealerAnswerAsync") with the [MT_RET_REQUEST_DONE](retcodes_trade_request.md "Trade Requests") code. In this case, the request is added to the execution queue (13). If the gateway processes a request at the external system, it responds the request using [IMTGatewayAPI::DealerAnswerAsync](imtgatewayapi_dealeranswerasync.md "DealerAnswerAsync") with the [MT_RET_REQUEST_PLACED](retcodes_trade_request.md "Trade Requests") code. The request (order) is set to Placed, while the platform asynchronously waits for a [trade execution](imtexecution.md "IMTExecution") (17) at the gateway.
  2. If confirmed, the request is added to the execution queue. A separate stream executes verified requests.
  3. After an additional verification of all incoming parameters of a request, immediately before execution, the [HookTradeRequestProcess](imttradesink_hooktraderequestprocess.md "HookTradeRequestProcess") hook is called.
     1. If [MT_RET_OK](retcodes_successful.md "Successful completion") is returned from the hook, the request will be executed;
     2. If a different response code is returned, the request will be rejected with the appropriate return code.
  4. If request execution implies creation of a deal, the [OnDealPerform](imtdealsink_ondealperform.md "OnDealPerform") event is triggered.
  5. After a successful execution of a request, the [OnTradeRequestProcess](imttradesink_ontraderequestprocess.md "OnTradeRequestProcess") event is called.
  6. After receiving a response from the gateway that the order is to be processed in the external system ([IMTGatewayAPI::DealerAnswerAsync](imtgatewayapi_dealeranswerasync.md "DealerAnswerAsync") with the [MT_RET_REQUEST_PLACED](retcodes_trade_request.md "Trade Requests") code), the platform asynchronously waits for a trade execution at the gateway.
  7. As soon as the gateway generates and sends the trade execution to the platform using [IMTGatewayAPI::DealerExecuteAsync](imtgatewayapi_dealerexecuteasync.md "DealerExecuteAsync"), the [HookTradeExecution](imttradesink_hooktradeexecution.md "HookTradeExecution") hook is called. The hook is called before the execution is applied.
  8. If the [MT_RET_OK](retcodes_successful.md "Successful completion") code is returned from the hook, the trade execution is applied and the [OnTradeExecution](imttradesink_ontradeexecution.md "OnTradeExecution") handler is called. Otherwise, the request will be rejected with a response code returned from the hook.

The [IMTRequestSink::OnRequestDelete](imtrequestsink_onrequestdelete.md "OnRequestDelete") handler is called for all requests. It can be called at any stage of request lifetime, starting with the moment when the request is added to the server queue ([IMTRequestSink::OnRequestAdd](imtrequestsink_onrequestadd.md "OnRequestAdd")). The request deletion moment depends on how it has been handled: whether it has been executed, rejected, canceled by timeout, etc.  
---  
Processing Ticks and Orders
This section described the procedure of how new ticks are applied to client groups, as well as how pending order and position stop levels (Stop Loss, Take Profit and Stop Out) are checked and how they trigger.
  1. The server received the XXXYYY symbol tick.
  2. The current price ([IMTPosition::PriceCurrent](imtposition_pricecurrent.md "PriceCurrent")) and profit ([IMTPosition::Profit](imtposition_profit.md "Profit")) of positions for the XXXYYY symbol are updated.
  3. Hitting of Stop Loss levels of open positions for the XXXYYY symbol is checked.
  4. If Stop Loss has been hit and the position activation status ([IMTPosition::ActivationMode](imtposition_activationmode.md "ActivationMode")) is equal to ACTIVATION_NONE, an order to close a position with [IMTOrder::Reason::ORDER_REASON_SL](imtorder_reason.md "Reason") is created and the request to activate Stop Loss is added to the server queue ([IMTRequest::Action::TA_ACTIVATE_SL](imtrequest_enum.htm#entradeactions)).
  5. The position activation status changes to ACTIVATION_SL.
  6. Hitting of Take Profit levels of open positions for the XXXYYY symbol is checked.
  7. If Take Profit has been hit and the position activation status ([IMTPosition::ActivationMode](imtposition_activationmode.md "ActivationMode")) is equal to ACTIVATION_NONE, an order to close a position with [IMTOrder::Reason::ORDER_REASON_TP](imtorder_reason.md "Reason") is created and the request to activate Take Profit is added to the server queue ([IMTRequest::Action::TA_ACTIVATE_TP](imtrequest_enum.htm#entradeactions)).
  8. The position activation status changes to ACTIVATION_TP.
  9. Prices of pending orders for the XXXYYY symbol are updated ([IMTOrder::PriceCurrent](imtorder_pricecurrent.md "PriceCurrent")).
  10. If the order price level has been hit, its activation status ([IMTOrder::ActivationMode](imtorder_activationmode.md "ActivationMode")) is equal to ACTIVATION_NONE and the user has enough margin to execute the order, a request to activate a pending order is added to the trade server queue ([IMTRequest::Action::TA_ACTIVATE](imtrequest_enum.htm#entradeactions) or [IMTRequest::Action::TA_ACTIVATE_STOPLIMIT](imtrequest_enum.htm#entradeactions)).
  11. The order activation status is changed to ACTIVATION_PENDING or ACTIVATION_STOPLIMIT.
  12. For the [trading accounts ](imtuser.md "IMTUser"), on which profit of positions was recalculated (as per point 2) or the margin of orders for the XXXYYY symbol has changed, margin is checked.
  13. If the account falls under the Stop Out condition and the account activation state ([IMTAccount::SOActivation](imtaccount_soactivation.md "SOActivation")) is equal to ACTIVATION_NONE, the following actions are performed:

  *     * A pending order is searched, for which the largest margin amount is required (it must have non-zero margin, while symbol trading must be allowed). If such an order is found, a request to cancel such an order is added to the trade server queue ([IMTRequest::Action::TA_STOPOUT_ORDER](imtrequest_enum.htm#entradeactions)). The order activation state ([IMTOrder::ActivationMode](imtorder_activationmode.md "ActivationMode")) changes to ACTIVATION_STOPOUT.
    * If the appropriate order is not found, the server searches for a position with a largest loss (while checking if symbol trading is allowed and taking into account the [FIFO rule](imtcongroup_enum.htm#entradeflags)). If such a position is found, a request to close the position is added to the trade server queue ([IMTRequest::Action::TA_STOPOUT_POSITION](imtrequest_enum.htm#entradeactions)). Position activation state ([IMTPosition::ActivationMode](imtposition_activationmode.md "ActivationMode")) changes to ACTIVATION_STOPOUT.
    * Account activation state ([IMTAccount::SOActivation](imtaccount_soactivation.md "SOActivation")) is set to ACTIVATION_STOP_OUT.

Processing of pending order activation requests, position closure by Stop Loss, Take Profit and Stop Out requests is performed similarly to processing of regular trading requests sent by traders, following the [scheme described above](hook_scheme.md "Request Processing on the Server"). The request goes through the same processing steps, with the call of corresponding events and hooks.
Removing unprocessed orders on launch
At each launch, the trade server checks open orders and performs the following:
  * Removes Started orders ([IMTOrder::ORDER_STATE_STARTED](imtorder_enum.htm#enorderstate)) — orders that have not yet been passed for processing to an external system (if the work goes via the gateway), confirmed or processed. Otherwise, they would freeze in this state, since there are no further requests for their processing.
  * Resets order activation attributes ([IMTOrder::EnOrderActivation](imtorder_enum.htm#enorderactivation)).
  * Checks the status of orders processed inside the platform (without sending to external systems via the gateway). If the market order ([IMTOrder::OP_BUY](imtorder_enum.htm#enordertype) or [IMTOrder::OP_SELL](imtorder_enum.htm#enordertype)) in Started or Partially Filled status ([IMTOrder::ORDER_STATE_STARTED](imtorder_enum.htm#enorderstate) or [IMTOrder::ORDER_STATE_PARTIAL](imtorder_enum.htm#enorderstate)) is detected, it is removed. The following entry is added to the server journal: "unfilled order XXX (account XXX) canceled".  In the absence of such a check, market orders could freeze. For example: 

  * A trader creates a request by placing an order
  * A dealer partially confirms an order and its status changes to ORDER_STATE_PARTIAL
  * The platform is reset
  * The order would freeze in this state, since there are no further requests for its processing

The [IMTOrder::ExternalID](imtorder_externalid.md "ExternalID") field defines whether an order is passed to an external system or processed in the platform. If it is filled, the ordered is displayed in the external system. The server does not remove such orders. Thus, the [IMTExecution::OrderExternalID](imtexecution_orderexternalid.md "OrderExternalID") field in the server's trade requests should be filled, so that the server does not remove orders from your gateway.  
---