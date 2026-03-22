# HookTradeRequestAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeRequestAdd | [](imttradesink_ontradesplit.md "OnTradeSplit") [](imttradesink_hooktraderequestroute.md "HookTradeRequestRoute") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeRequestAdd
A hook for adding a checked [trade request](imtrequest.md "IMTRequest") in the requests queue.
virtual MTAPIRES IMTTradeSink::HookTradeRequestAdd( IMTRequest* request, // A pointer to the request object const IMTConGroup* group, // A pointer to the group configuration object const IMTConSymbol* symbol, // A pointer to the symbol configuration object const IMTPosition* position, // A pointer to the position object const IMTOrder* order, // A pointer to the order object IMTOrder* order_new // A pointer to the object of the modified order )  
---  
Parameters
request
[in][out] A pointer to the object of [a trade request](imtrequest.md "IMTRequest").
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the request is being processed.
symbol
[in] A pointer to the object of the [configuration of a symbol](config_symbol.md "Symbols"), which request is being processed.
position
[in] A pointer to the object of a [trade position](imtposition.md "IMTPosition"), which corresponds to the client and symbol, for which a request is being processed.
order
[in] A pointer to the object of a [trade order](imtorder.md "IMTOrder"), which corresponds to the request being processed. It is filled only if a [trade request](imtrequest_enum.htm#entradeactions) relates to changing an already existing order (modifying, removing or activating):
  * TA_MODIFY
  * TA_REMOVE
  * TA_ACTIVATE
  * TA_ACTIVATE_STOPLIMIT
  * TA_STOPOUT_ORDER
  * TA_EXPIRATION
  * TA_DEALER_ORD_MODIFY
  * TA_DEALER_ORD_REMOVE
  * TA_DEALER_ORD_ACTIVATE
  * TA_DEALER_ORD_SLIMIT

order_new
[in/out] A pointer to the object of a [trade order](imtorder.md "IMTOrder") to be created as a result of the execution of a trade request. It is filled only for requests related to generating a new trade order rather than modifying an existing one (the full list of request types is provided below). The order placed in order_new is ready for adding to the trading database. It has all necessary fields filled except for a ticket ([IMTOrder::Order](imtorder_order.md "Order")). Creating a new order (in the database) and assigning a ticket to it occur only after the API confirms the operation (by returning MT_RET_OK from the hook). This saves resources that would have been spent on adding the orders that are to be rejected and removed from the hook to the database.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the request will be rejected with a response code returned from the hook.
Note
Depending on the type of a received request, the hook allows modifying the request as well as rejecting or accepting it without changes. The type also affects the order_new parameter value. The following trade request types (described in [IMTRequest::EnTradeActions](imtrequest_enum.htm#entradeactions)) can be changed using this hook. The order_new parameter is filled for them:
  * TA_REQUEST
  * TA_INSTANT
  * TA_MARKET
  * TA_EXCHANGE
  * TA_PENDING
  * TA_DEALER_POS_EXECUTE
  * TA_DEALER_POS_EXECUTE
  * TA_ACTIVATE_SL
  * TA_ACTIVATE_TP
  * TA_STOPOUT_POSITION

For other trade request types, the new_order parameter is always NULL. Such requests can be either allowed or rejected (for example, IMTRequest::TA_PRICE price request).
For requests not related to creating or modifying orders, the both order and order_new parameters are NULL. These are the following requests:
  * TA_PRICE
  * TA_SLTP
  * TA_TRANSFER
  * TA_DEALER_POS_MODIFY
  * TA_DEALER_BALANCE
