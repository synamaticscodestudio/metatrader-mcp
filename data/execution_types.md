# Types of Execution (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ General Principles ](general_concept.md "General Principles")/ Types of Execution | [](order_types.md "Types of Orders") [](order_state.md "State of Orders") |
| --- | --- | --- |
| --- | --- |

Types of Execution
Four types of [order](order_types.md "Types of Orders") execution are available in the MetaTrader 5 Platform:
  * Instant Execution  In this mode a market order is executed at the price offered to the broker. When sending a request for execution, the current prices are automatically inserted into an order. If the broker accepts the prices, the order is executed. If not, the so-called "Requote" occurs: the broker returns prices, at which the order can be executed.
  * Request Execution In this mode a market order is executed at the price previously received from the broker. Prices for a certain market order are requested from the broker before the order is sent. After the prices have been received, order execution at the given price can be either confirmed or rejected.
  * Market Execution In this execution mode, a broker makes a decision about the order execution price without additional approval from a trader. Sending an order in such a mode means advance consent to its execution at this price.
  * Exchange Execution In this mode, trade operations are sent to an external trading system (exchange). Trade operations are executed at the prices of current market offers.

The execution mode is determined for each symbol separately using the [IMTConSymbol::ExecMode](imtconsymbol_execmode.md "ExecMode") method.  
---