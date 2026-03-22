# Orders (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade")/ Orders | [](group_position.md "Position Accounting System") [](imtorder.md "IMTOrder") |
| --- | --- | --- |
| --- | --- |

Orders
The MetaTrader 5 API allows managing a database of orders on a trade server. Using the API, you can modify and delete orders, as well as handle events of database modifications.
An important feature of working with orders is that they are bound to a certain trade server. Accordingly, an application can manage only those orders that belong to the server to which this application is connected.
The following order interfaces are available:
  * [IMTOrder](imtorder.md "IMTOrder") An interface that provides access to all the main parameters of orders.
  * [IMTOrderArray](imtorderarray.md "IMTOrderArray") An interface for working with the arrays of orders.
  * [IMTOrderSink](imtordersink.md "IMTOrderSink") An interface for handling events associated with change of a database of open (active) orders.
  * [IMTHistorySink](imthistorysink.md "IMTHistorySink") An interface for handling events associated with change of a database of closed orders (history of orders).

To help you understand the purpose of interfaces intended for working with orders, the below figure shows their compliance with the elements in MetaTrader 5 Administrator:</t4>
The following elements are shown above:
  1. [The login of the client who has placed the order](imtorder_login.md "Login").
  2. [Ticket of the order](imtorder_order.md "Order").
  3. [Type of the order](imtorder_type.md "Type").
  4. [The symbol of an order](imtorder_symbol.md "Symbol").
  5. [The price, at which the order is placed](imtorder_priceorder.md "PriceOrder").
  6. [The Stop Loss level](imtorder_pricesl.md "PriceSL").
  7. [Comment to an order](imtorder_comment.md "Comment").
  8. [Expiration type](imtorder_typetime.md "TypeTime").
  9. [Activation flags](imtorder_activationflags.md "ActivationFlags").
  10. [Time of order placing](imtorder_timesetup.md "TimeSetup").
  11. [Initial volume of the order](imtorder_volumeinitial.md "VolumeInitial").
  12. [Type of filling](imtorder_typefill.md "TypeFill").
  13. [Order triggering price](imtorder_pricetrigger.md "PriceTrigger").
  14. [The Take Profit level](imtorder_pricetp.md "PriceTP").
  15. [Margin conversion rate](imtorder_ratemargin.md "RateMargin").
  16. [Expiry time](imtorder_timeexpiration.md "TimeExpiration").
  17. [Reason for placing the order](imtorder_reason.md "Reason").
  18. [Order execution time](imtorder_timedone.md "TimeDone").
  19. [The current price of the symbol, for which an order has been placed](imtorder_pricecurrent.md "PriceCurrent").
  20. [The ID of the order in an external trading system](imtorder_externalid.md "ExternalID").
  21. [The identifier (magic number) of the Expert Advisor that has placed an order in the client terminal](imtorder_expertid.md "ExpertID").
  22. [Order state](imtorder_state.md "State").
  23. [Unfilled volume of the order](imtorder_volumecurrent.md "VolumeCurrent").
  24. [The login of a dealer, who has processed the order](imtorder_dealer.md "Dealer").
