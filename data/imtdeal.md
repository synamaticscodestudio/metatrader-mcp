# IMTDeal (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals")/ IMTDeal | [](trading_deal.md "Deals") [](imtdeal_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTDeal
The IMTDeal class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdeal_release.md "Release") | Delete the current object. |
| [Assign](imtdeal_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdeal_clear.md "Clear") | Clear an object. |
| [Print](imtdeal_print.md "Print") | Get the string description of a deal. |
| [Deal](imtdeal_deal.md "Deal") | Get the ticket of a deal. |
| [DealSet](imtdeal_dealset.md "DealSet") | Set the ticket of a deal. |
| [ExternalID](imtdeal_externalid.md "ExternalID") | Get and set the deal ID in external trading systems. |
| [Login](imtdeal_login.md "Login") | Get and set the login of the client, to whom the deal belongs. |
| [Dealer](imtdeal_dealer.md "Dealer") | Get and set the login of a dealer, who has processed a deal. |
| [Order](imtdeal_order.md "Order") | Get and set the ticket of the order, as a result of which a deal was executed. |
| [Action](imtdeal_action.md "Action") | Get and set the type of action performed with a deal. |
| [Entry](imtdeal_entry.md "Entry") | Get and set the deal direction. |
| [Digits](imtdeal_digits.md "Digits") | Get and set the number of decimal places in the price of a deal. |
| [DigitsCurrency](imtdeal_digitscurrency.md "DigitsCurrency") | Get and set the number of decimal places the deposit currency of a client who has executed the deal. |
| [ContractSize](imtdeal_contractsize.md "ContractSize") | Get and set the contract size of the symbol, for which a deal is executed. |
| [Time](imtdeal_time.md "Time") | Get and set the time of a deal. |
| [TimeMsc](imtdeal_timemsc.md "TimeMsc") | Get and set the time of a deal execution in milliseconds. |
| [Symbol](imtdeal_symbol.md "Symbol") | Get and set the symbol, for which a deal is executed. |
| [Price](imtdeal_price.md "Price") | Get and set the price of a deal. |
| [PriceSL](imtdeal_pricesl.md "PriceSL") | Get and set the Stop Loss level of a deal. |
| [PriceTP](imtdeal_pricetp.md "PriceTP") | Get and set the Take Profit level of a deal. |
| [Volume](imtdeal_volume.md "Volume") | Get and set the deal volume. |
| [VolumeExt](imtdeal_volumeext.md "VolumeExt") | Get and set the deal volume with an extended accuracy. |
| [VolumeClosed](imtdeal_volumeclosed.md "VolumeClosed") | Get and set the position volume that was closed by the deal. |
| [VolumeClosedExt](imtdeal_volumeclosedext.md "VolumeClosedExt") | Get and set the extended accuracy volume of a position that was closed by this deal. |
| [Profit](imtdeal_profit.md "Profit") | Get and set the value of the profit from the deal execution. |
| [Value](imtdeal_value.md "Value") | Get and set the deal value in client deposit currency. |
| [Storage](imtdeal_storage.md "Storage") | Get and set the swap size for a deal. |
| [Commission](imtdeal_commission.md "Commission") | Get and set the amount of commission charged for a deal. |
| [Fee](imtdeal_fee.md "Fee") | Get and set the fee amount per deal. |
| [RateProfit](imtdeal_rateprofit.md "RateProfit") | Get and set the exchange rate of the profit currency of a deal to the deposit currency of a client group. |
| [RateMargin](imtdeal_ratemargin.md "RateMargin") | Get and set the exchange rate of the margin currency of a deal to the client's deposit currency. |
| [ExpertID](imtdeal_expertid.md "ExpertID") | Get and set the ID of the Expert Advisor that has executed a deal. |
| [PartyID](imtdeal_partyid.md "PartyID") | Get and set the account number in the external system. |
| [PositionID](imtdeal_positionid.md "PositionID") | Get and set the position ID (ticket) for a deal. |
| [Comment](imtdeal_comment.md "Comment") | Get and set a comment to a deal. |
| [ApiDataSet](imtdeal_apidataset.md "ApiDataSet") | Set a custom parameter for a deal. |
| [APIDataUpdate](imtdeal_apidataupdate.md "APIDataUpdate") | Change the custom parameter of a deal. |
| [APIDataNext](imtdeal_apidatanext.md "APIDataNext") | Get the custom parameter of a deal by a position. |
| [ApiDataGet](imtdeal_apidataget.md "ApiDataGet") | Get the value of a custom parameter of a deal. |
| [ApiDataClear](imtdeal_apidataclear.md "ApiDataClear") | Clear all custom parameters of deals set by an application. |
| [ApiDataClearAll](imtdeal_apidataclearall.md "ApiDataClearAll") | Clear all custom parameters of deals. |
| [ProfitRaw](imtdeal_profitraw.md "ProfitRaw") | Get and set the value of profit/loss resulting from the deal execution. The profit/loss is expressed in the profit currency of the symbol, for which a deal is executed. |
| [PricePosition](imtdeal_priceposition.md "PricePosition") | Get and set the price of the position closed by the deal. |
| [TickValue](imtdeal_tickvalue.md "TickValue") | Get and set the tick price for a deal. |
| [TickSize](imtdeal_ticksize.md "TickSize") | Get and set the tick size for a deal. |
| [Flags](imtdeal_flags.md "Flags") | Get and set the common flags of a deal. |
| [Reason](imtdeal_reason.md "Reason") | Get the reason for placing an order. |
| [ReasonSet](imtdeal_reasonset.md "ReasonSet") | Set the reason for a deal. |
| [Gateway](imtdeal_gateway.md "Gateway") | Get the ID of a trade gateway, using which the deal was executed. |
| [PriceGatewaySet](imtdeal_pricegatewayset.md "PriceGatewaySet") | Set the ID of a trade gateway, using which the deal was executed. |
| [PriceGateway](imtdeal_pricegateway.md "PriceGateway") | Get the actual price of a deal executed via a gateway in an external trading system, not taking into account the gateway price transformation settings. |
| [PriceGatewaySet](imtdeal_pricegatewayset.md "PriceGatewaySet") | Set the actual price of a deal executed via a gateway in an external trading system. |
| [VolumeGatewayExt](imtdeal_volumegatewayext.md "VolumeGatewayExt") | Get and set the volume at which the deal is actually routed to an external trading system through the gateway. |
| [ActionGateway](imtdeal_actiongateway.md "ActionGateway") | Get and set the direction with which the deal is actually routed to an external trading system through the gateway. |
| [MarketBid](imtdeal_marketbid.md "MarketBid") | Get the market Bid price as at the time of deal execution by the server. |
| [MarketAsk](imtdeal_marketask.md "MarketAsk") | Get the market Ask price as at the time of deal execution by the server. |
| [MarketLast](imtdeal_marketlast.md "MarketLast") | Get the market Last price as at the time of deal execution by the server. |
| [ModificationFlags](imtdeal_modificationflags.md "ModificationFlags") | Get deal modification flags. |

The IMTDeal class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnDealAction](imtdeal_enum.htm#endealaction) | Deal type. |
| [EnDealEntry](imtdeal_enum.htm#endealentry) | Deal direction. |
| [EnDealReason](imtdeal_enum.htm#endealreason) | Reason for deal execution. |
| [EnTradeModifyFlags](imtdeal_enum.htm#endealreason) | Deal modification flags. |