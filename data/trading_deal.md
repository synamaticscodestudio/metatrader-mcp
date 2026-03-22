# Deals (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade")/ Deals | [](imthistorysink_onhistorysync.md "OnHistorySync") [](imtdeal.md "IMTDeal") |
| --- | --- | --- |
| --- | --- |

Deals
The MetaTrader 5 API allows managing a database of deals on a trade server. Using the Manager API, you can modify and delete deals, as well as handle events of changes in the database of deals.
An important feature of working with deals is that they are bound to a certain trade server. Accordingly, an application can manage only those deals that belong to the server to which this application is connected.
The following deal interfaces are available:
  * [IMTDeal](imtdeal.md "IMTDeal") An interface that provides access to all the main parameters of deals.
  * [IMTDealArray](imtdealarray.md "IMTDealArray") An interface for working with the arrays of deals.
  * [IMTDealSink](imtdealsink.md "IMTDealSink") An interface for handling events associated with changes in the database of deals.

To help you understand the purpose of the interfaces intended for working with deals, the below figure shows their compliance with the elements in MetaTrader 5 Administrator:</t4>
The following elements are shown above:
  1. [The login of a client who has executed a deal](imtdeal_login.md "Login").
  2. [The ticket of a deal](imtdeal_deal.md "Deal").
  3. [Type of action](imtdeal_action.md "Action") and [direction](imtdeal_entry.md "Entry") of a deal.
  4. [The symbol, for which a deal is executed](imtdeal_symbol.md "Symbol").
  5. [The reason for deal execution](imtdeal_reason.md "Reason").
  6. [The ticket of the order, as a result of which a deal was executed](imtdeal_order.md "Order").
  7. [Time of a deal](imtdeal_time.md "Time").
  8. [Volume of a deal](imtdeal_volume.md "Volume").
  9. [Price of a deal](imtdeal_price.md "Price").
  10. [The identifier (magic number) of the Expert Advisor that has performed the trade in the client terminal.](imtdeal_expertid.md "ExpertID")
  11. [Commission from a deal](imtdeal_commission.md "Commission").
  12. [Swap size](imtdeal_storage.md "Storage").
  13. [The amount of profit/loss of a deal](imtdeal_profit.md "Profit").
  14. [The price of the position that was closed by this deal](imtdeal_priceposition.md "PricePosition");
  15. [The profit/loss from a deal in the symbol profit currency](imtdeal_profitraw.md "ProfitRaw");
  16. [Comment to a deal](imtdeal_comment.md "Comment").
  17. [The ID of a deal in an external trading system](imtdeal_externalid.md "ExternalID").
  18. [The login of a dealer, who has processed a deal](imtdeal_dealer.md "Dealer").
  19. [Profit ratio](imtdeal_rateprofit.md "RateProfit").
  20. [Margin ratio](imtdeal_ratemargin.md "RateMargin").
