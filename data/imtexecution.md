# IMTExecution (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests")/ IMTExecution | [](imtconfirm_externalretcode.md "ExternalRetcode") [](imtexecution_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTExecution
IMTExecution is an interface, through which an external system can manage the MetaTrader 5 trading platform. Using its methods, a trading platform receives the results of the execution of trading orders in the external system.
The IMTExecution class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtexecution_release.md "Release") | Delete the current object. |
| [Assign](imtexecution_assign.md "Assign") | Assigns a passed object to the current one. |
| [Clear](imtexecution_clear.md "Clear") | Clear an object. |
| [Print](imtexecution_print.md "Print") | Get a string description of a trade execution. |
| [ID](imtexecution_id.md "ID") | Get and set the ID of a trade execution. |
| [ExternalID](imtexecution_externalid.md "ExternalID") | Get and set the ID of a trade execution in an external trading system. |
| [ExternalAccount](imtexecution_externalaccount.md "ExternalAccount") | Get and set the account number in an external trading system. |
| [Action](imtexecution_action.md "Action") | Get and set the type of a trade execution. |
| [Datetime](imtexecution_datetime.md "Datetime") | Get and set the time of the trade execution in an external trading system. |
| [DatetimeMsc](imtexecution_datetimemsc.md "DatetimeMsc") | Get and set the time of the trade execution in an external trading system, in the amount of milliseconds. |
| [Login](imtexecution_login.md "Login") | Get and set a client login in the MetaTrader 5 platform. |
| [Group](imtexecution_group.md "Group") | Get and set the group in the MetaTrader 5 platform, for the clients of which that execution can be applied. |
| [Flags](imtexecution_flags.md "Flags") | Get and set additional flags of a trade execution. |
| [Symbol](imtexecution_symbol.md "Symbol") | Get the name of the symbol, for which trade execution is performed. |
| [SymbolNew](imtexecution_symbolnew.md "SymbolNew") | Get and set the name of a new symbol where position is relocated. |
| [Digits](imtexecution_digits.md "Digits") | Get and set the number of decimal places in the price of a symbol, for which trade execution is performed. |
| [Comment](imtexecution_comment.md "Comment") | Get and set a comment to a trade execution. |
| [Order](imtexecution_order.md "Order") | Get and set the number of the order in the MetaTrader 5 platform. |
| [OrderExternalID](imtexecution_orderexternalid.md "OrderExternalID") | Get and set the number of the order in an external trading system. |
| [OrderType](imtexecution_ordertype.md "OrderType") | Get and set order type. |
| [OrderVolume](imtexecution_ordervolume.md "OrderVolume") | Get and set the order volume in lots. |
| [OrderVolumeExt](imtexecution_ordervolumeext.md "OrderVolumeExt") | Get and set the order volume in lots with an extended accuracy. |
| [OrderPrice](imtexecution_orderprice.md "OrderPrice") | Get and set the order price. |
| [OrderActivationFlags](imtexecution_orderactivationflags.md "OrderActivationFlags") | Get and set additional conditions of order activation. |
| [OrderPriceTrigger](imtexecution_orderpricetrigger.md "OrderPriceTrigger") | Get and set the number of activation of a stop-limit order placed in an external trading system. |
| [OrderTypeTime](imtexecution_ordertypetime.md "OrderTypeTime") | Get and set the expiration type of the order placed in an external trading system. |
| [OrderTimeExpiration](imtexecution_ordertimeexpiration.md "OrderTimeExpiration") | Get and set the expiration time of the order placed in an external trading system. |
| [OrderTypeFill](imtexecution_ordertypefill.md "OrderTypeFill") | Get and set the filling type of the order placed in an external trading system. |
| [OrderPriceSL](imtexecution_orderpricesl.md "OrderPriceSL") | Get and set the Stop Loss level specified for the order in an external trading system. |
| [OrderPriceTP](imtexecution_orderpricetp.md "OrderPriceTP") | Get and set the Take Profit level specified for the order in an external trading system. |
| [OrderActivationMode](imtexecution_orderactivationmode.md "OrderActivationMode") | Get and set the activation type of the order placed in an external trading system. |
| [DealExternalID](imtexecution_dealexternalid.md "DealExternalID") | Get and set the ID of the deal in an external trading system. |
| [DealAction](imtexecution_dealaction.md "DealAction") | Get and set the deal type (direction). |
| [DealVolume](imtexecution_dealvolume.md "DealVolume") | Get and set the deal volume in lots. |
| [DealVolumeExt](imtexecution_dealvolumeext.md "DealVolumeExt") | Get and set the deal volume in lots with an extended accuracy. |
| [DealVolumeRemaind](imtexecution_dealvolumeremaind.md "DealVolumeRemaind") | Get and set the remaining volume in the order. |
| [DealVolumeRemaindExt](imtexecution_dealvolumeremaindext.md "DealVolumeRemaindExt") | Get and set the remaining order volume with an extended accuracy. |
| [DealPrice](imtexecution_dealprice.md "DealPrice") | Get and set the price of a deal. |
| [DealReason](imtexecution_dealreason.md "DealReason") | Get and set the reason for a deal. |
| [DealStorage](imtexecution_dealstorage.md "DealStorage") | Get and set the swap size of a deal conducted as a result of trade execution. |
| [DealCommission](imtexecution_dealcommission.md "DealCommission") | Get and set the commission charged when conducting deals via a gateway in an external trading system. |
| [Position](imtexecution_position.md "Position") | Get and set a position ticket (unique number) in a MetaTrader 5 platform. |
| [PositionBy](imtexecution_positionby.md "PositionBy") | Get and set the ticket (unique number) of an opposite trade position in a MetaTrader 5 platform. |
| [PositionExternalID](imtexecution_positionexternalid.md "PositionExternalID") | Get and set the ticket (a unique number) of a position in an external trading system. |
| [PositionByExternalID](imtexecution_positionbyexternalid.md "PositionByExternalID") | Get and set the ticket (unique number) of an opposite trade position in an external trading system. |
| [PositionPriceSL](imtexecution_positionpricesl.md "PositionPriceSL") | Get and set the Stop Loss level specified for a position in an external trading system. |
| [PositionPriceTP](imtexecution_positionpricetp.md "PositionPriceTP") | Get and set the Take Profit level specified for a position in an external trading system. |
| [EOSSessionStart](imtexecution_eossessionstart.md "EOSSessionStart") | Get and set the time of the session beginning. |
| [EOSSessionEnd](imtexecution_eossessionend.md "EOSSessionEnd") | Get and set the time of the session end. |
| [EOSPriceSettlement](imtexecution_eospricesettlement.md "EOSPriceSettlement") | Get and set the settlement (clearing) price of the session. |
| [EOSProrfitRateBuy](imtexecution_eosprorfitratebuy.md "EOSProrfitRateBuy") | Get a new rate for recalculating profit/loss for buy deals. |
| [EOSProrfitRateSell](imtexecution_eosprorfitratesell.md "EOSProrfitRateSell") | Get a new rate for recalculating profit/loss for sell deals. |
| [EOSProrfitRate](imtexecution_eosprorfitrate.md "EOSProrfitRate") | Set a new rate for recalculating profit/loss for the deals performed during the session. |
| [EOSTickValue](imtexecution_eostickvalue.md "EOSTickValue") | Set a new tick price for recalculating profit/loss for the deals performed during the session. |
| [EOSRolloverValueLong](imtexecution_eosrollovervaluelong.md "EOSRolloverValueLong") | Get the rollover size accrued by a long position. |
| [EOSRolloverValueShort](imtexecution_eosrollovervalueshort.md "EOSRolloverValueShort") | Get the rollover size accrued by a short position. |
| [EOSRolloverValue](imtexecution_eosrollovervalue.md "EOSRolloverValue") | Set the rollover size for a position. |
| [ApiDataSet](imtexecution_apidataset.md "ApiDataSet") | Set a custom parameter for the trade execution. |
| [ApiDataGet](imtexecution_apidataget.md "ApiDataGet") | Get the value of a custom parameter of the trade execution. |
| [APIDataUpdate](imtexecution_apidataupdate.md "APIDataUpdate") | Add or update the custom parameter of the trade execution. |
| [APIDataNext](imtexecution_apidatanext.md "APIDataNext") | Gets the custom parameter of the trade execution by a position. |
| [APIDataRawSet](imtexecution_apidatarawset.md "APIDataRawSet") | Set custom parameters for a trade execution as raw data (memory fragment). |
| [APIDataRawGet](imtexecution_apidatarawget.md "APIDataRawGet") | Get custom parameters for a trade execution as raw data (memory fragment). |
| [APIDataRawMax](imtexecution_apidatarawmax.md "APIDataRawMax") | Get the maximum possible size of custom parameters of a trade execution. |
| [ApiDataClear](imtexecution_apidataclear.md "ApiDataClear") | Clear all custom parameters of trade executions set by an application. |
| [ApiDataClearAll](imtexecution_apidataclearall.md "ApiDataClearAll") | Clear all user settings of trade executions. |
| [PriceGateway](imtexecution_pricegateway.md "PriceGateway") | Get and set the actual price of a deal conducted via a gateway in an external trading system with no consideration to the gateway price transformation settings. |
| [VolumeGatewayExt](imtexecution_volumegatewayext.md "VolumeGatewayExt") | Get and set the volume at which the deal is actually routed to an external trading system through the gateway. |
| [ActionGateway](imtexecution_actiongateway.md "ActionGateway") | Get and set the direction with which the deal is actually routed to an external trading system through the gateway. |
| [GatewayID](imtexecution_gatewayid.md "GatewayID") | Get and set the gateway ID from which the trade execution has been received. |
| [ExternalRetcode](imtexecution_externalretcode.md "ExternalRetcode") | Get and set the code of response from an external trading system. |

Possible types of trade executions are enumerated in [IMTExecution::EnTradeExecutions](imtexecution_enum.htm#entradeexecutions). The type of trade execution is chosen according to the type of operation executed in an external system.
For more information about the formation of trade executions read [Trade Operations in the Gateway API](gatewayapi_trade_processing.md "Trade Operations in Gateway API").  
---  
Execution Processing Peculiarities
The MetaTrader 5 server correctly handles order opening from an external system even if that system has rejected the order earlier. For example, an order is sent to an exchange through a gateway, the exchange rejects the order. On the MetaTrader 5 side, the order is placed to the trade history marked as "Canceled". But later the exchange notifies that the order is placed. In this case, on the MetaTrader 5 side the order will be restored from the trade history with the same ticket.
The verification procedure for the orders received from an external system:
  * Checking if this order is available among open ones. If it is, then operation continues as normal.
  * If the order is found in the trading history (checking if the symbol, volume and direction match), it will be deleted from it. Then an attempt is made to open an order with the ticket matching the deleted order in accordance with the passed trade execution. The following entry is added to the journal: unknown open order #543 in execution, but found in history and will be reopened [added order #543, buy limit 1.00 BR-10.15 at 49.94 [based on order '40190126459']].
  * If the order is not found in the trading history, a new order with a new ticket is opened.
