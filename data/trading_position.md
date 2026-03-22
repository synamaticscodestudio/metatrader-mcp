# Positions (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade")/ Positions | [](imtdealsink_ondealperformcloseby.md "OnDealPerformCloseBy") [](imtposition.md "IMTPosition") |
| --- | --- | --- |
| --- | --- |

Positions
The MetaTrader 5 API allows managing a database of positions on a trade server. Using the API, you can modify and delete positions, as well as handle events of changes in the database.
An important feature of working with positions is that they are bound to a certain trade server. Accordingly, an application can manage only those positions that belong to the server to which this application is connected.
MetaTrader 5 API does not provide options for creating positions. That can lead to irreversible damage of the position database of a server.  
---  
The following position interfaces are available:
  * [IMTPosition](imtposition.md "IMTPosition") An interface that provides access to all parameters of trade positions.
  * [IMTPositionArray](imtpositionarray.md "IMTPositionArray") An interface for working with the arrays of positions.
  * [IMTPositionSink](imtpositionsink.md "IMTPositionSink") An interface for handling events associated with change of a database of trade positions.

To help you understand the purpose of interfaces intended for working with positions, the below figure shows their compliance with the elements in MetaTrader 5 Administrator:
The following elements are shown above:
  1. [The login of the user who has opened the position](imtposition_login.md "Login").
  2. [Position type](imtposition_action.md "Action").
  3. [Symbol, for which the position is opened](imtposition_symbol.md "Symbol").
  4. [The Stop Loss level](imtposition_pricesl.md "PriceSL").
  5. [Time of position opening](imtposition_timecreate.md "TimeCreate").
  6. [Position volume](imtposition_volume.md "Volume").
  7. [The weighted average price of a position](imtposition_priceopen.md "PriceOpen").
  8. [The Take Profit level](imtposition_pricetp.md "PriceTP").
  9. [The current profit/loss of a trade position](imtposition_profit.md "Profit").
  10. [Position swap](imtposition_storage.md "Storage").
  11. [A comment to a position](imtposition_comment.md "Comment").
  12. [The current price of a position](imtposition_pricecurrent.md "PriceCurrent").
  13. [The exchange rate of the margin currency to the deposit currency](imtposition_ratemargin.md "RateMargin").
  14. [The login of a dealer, who has processed the order that opened the position](imtposition_dealer.md "Dealer").
  15. [Activation flags](imtposition_activationflags.md "ActivationFlags").
