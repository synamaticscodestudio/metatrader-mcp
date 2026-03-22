# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Trade Requests ](webapi_trade.md "Trade Requests")/ Data Structure | [](webapi_trade.md "Trade Requests") [](webapi_trade_balance.md "Deposit/Withdrawal") |
| --- | --- | --- |
| --- | --- |

Data Structure
Data on trade requests is passed in JSON format in the [/api/dealer/send_request](webapi_dealer_send.md "Send Request") and [/api/dealer/get_request_result](webapi_dealer_updates.md "Get Request Result") requests.
| Method | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | Request ID |
| Login | Integer | Client login in the request. |
| ExternalAccount | String | Client account in an external trading system. |
| Group | String | The group of the client who has sent the request. |
| Symbol | String | The symbol in the request. |
| Digits | Integer | The number of decimal places in the price of the trade request. |
| Action | Integer | The type of action to which the trade request belongs. Passed as a value of the [EnTradeActions](imtrequest_enum.htm#entradeactions) enumeration. |
| TimeExpiration | Integer | Expiration time in the trade request. The date is specified in seconds elapsed since 01.01.1970. |
| Type | Integer | Order type on the request. Passed as a value of the [EnOrderType](imtorder_enum.htm#enordertype) enumeration. For balance operation ([TA_DEALER_BALANCE](imtrequest_enum.htm#entradeactions)), [EnDealAction](imtdeal_enum.htm#endealaction) value are used: |

  * DEAL_BALANCE — balance operation
  * DEAL_CREDIT — credit operation
  * DEAL_CHARGE — additional charges
  * DEAL_CORRECTION — corrective operations
  * DEAL_BONUS — adding bonus
  * DEAL_COMMISSION — charging commission

  
TypeFill | Integer | Order filling type in the request. Passed as a value of the [EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.  
TypeTime | Integer | Order expiration type in the request. Passed as a value of the [EnOrderTime](imtorder_enum.htm#enordertime) enumeration.  
Flags | Integer | Additional trade request flags. Passed as a value of the [EnTradeActionFlags](imtrequest_enum.htm#entradeactionflags) enumeration.  
Volume | Integer | Operation volume in the request. One unit corresponds to [1/10000 lot](features.htm#volume).  
VolumeExt | Integer | Operation volume in the request with increased accuracy. One unit corresponds to [1/100000000 lot](features.htm#volume).  
Order | Integer | Order ticket in the trade request.  
OrderExternalID | Integer | Order ID in external trading systems.  
PriceOrder | Float | Order price in the trade request.  
PriceTrigger | Float | Price at which a limit order is placed upon triggering of a stop limit order.  
PriceSL | Float | The Stop Loss level in the trade request.  
PriceTP | Float | The Take Profit level in the trade request.  
PriceDeviation | Integer | Maximum allowed deviation of the execution price from the price requested in an order.  
PriceDeviationTop | Integer | Acceptable price deviation in the increase direction.  
PriceDeviationBottom | Integer | Acceptable price deviation in the decrease direction.  
SpreadDiff | Integer | The difference between the symbol spread for the group to which the trader belongs and the current symbol spread (price markup for the group). It is used to notify the exchange about the platform-side price markup value.  
SpreadDiffBalance | Integer | Spread difference balance in a trade request. It is used to notify the exchange about the platform-side price markup value.  
Comment | String | Trade request comment.  
ResultRetcode | String | Current state of the trade request.  
ResultDealer | Integer | The login of the dealer who processes the request.  
ResultDeal | Integer | The number of the deal formed as a result of request execution.  
ResultOrder | Integer | The number of the order formed as a result of request execution.  
ResultVolume | Integer | The deal volume confirmed by the dealer for this request. One unit corresponds to 1/10000 lot.  
ResultVolumeExt | Integer | The deal volume confirmed by the dealer for this request, with increased accuracy. One unit corresponds to 1/100000000 lot.  
ResultPrice | Float | The price used by the dealer to confirm the request.  
ResultDealerBid | Integer | The Bid price confirmed by the dealer for this request.  
ResultDealerAsk | Integer | The Ask price confirmed by the dealer for this request.  
ResultDealerLast | Integer | The Last price confirmed by the dealer for this request.  
ResultMarketBid | Integer | The market Bid price at the time of request processing by the server.  
ResultMarketAsk | Integer | The market Ask price at the time of request processing by the server.  
ResultMarketLast | Integer | The market Last price at the time of request processing by the server.  
ResultComment | String | A comment added by the dealer after confirming the request.  
IDClient | Integer | The request identifier on the side of the client who sent the request.  
IP | String | The IP address from which the request was sent. When sending requests via Web API, the specified IP value is ignored. The server replaces it with the actual address the request was sent from. Setting the property only makes sense for requests sent via Server API, since they are all sent from a plugin that is physically located on the server.  
SourceLogin | Integer | The login of the dealer, on whose behalf the request is performed.  
Position | Integer | Position ticket (unique number) in the MetaTrader 5 platform.  
PositionBy | Integer | The ticket (unique number) of the position used for a close by operation, in the MetaTrader 5 platform.  
PositionExternalID | Integer | Position ticket (unique number) in the external trading system.  
PositionByExternalID | Integer | The ticket (unique number) of the position used for a close by operation, in the external system.  
ApiData | Array | [Array of user data](webapi_trade_data_structure.htm#apidata).  
Trading confirmations
Trade confirmations are used to pass request execution information in [/api/dealer/get_request_result](webapi_dealer_updates.md "Get Request Result").
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | The ID of a trade request. |
| Retcode | Integer | Confirmation return code. |
| Volume | Integer | The volume in which the trade request was confirmed. |
| VolumeExt | Integer | The volume in which the trade request was confirmed, with increased accuracy. |
| Price | Float | Request confirmation price. |
| TickBid | Float | Bid price in the response to a trade request. |
| TickAsk | Float | Ask price in the response to a trade request. |
| TickLast | Float | Last price in the response to a trade request. |
| Comment | String | Comment to trade request confirmation. |
| Flags | Integer | Request confirmation options. Passed using the [EnConfirmFlags](imtconfirm_enum.htm#enconfirmflags) enumeration. |
| DealID | Float | The ticket of the deal conducted as a result of confirmation of the trade request. |
| OrderID | Float | The ticket of the confirmed order. |
| PositionExternalID | Float | Ticket (unique number) of a position in an external trading system. |
| PriceGateway | Float | The actual price of a deal conducted via a gateway in an external trading system, not taking into account the gateway price transformation settings. |
| ExternalRetcode | Integer | External trading system response code. |

User data
| Parameter | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| AppID | Integer | The identifier of the application that recorded the data. |
| ID | Integer | Data identifier. |
| ValueInt | Integer | The user parameter value of the int type. |
| ValueUint | Integer | The user parameter value of the uint type. |
| ValueDouble | Float | The user parameter value of the double type. |