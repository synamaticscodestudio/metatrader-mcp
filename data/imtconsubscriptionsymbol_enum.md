# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscriptionSymbol ](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol")/ Enumerations | [](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") [](imtconsubscriptionsymbol_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConSubscriptionSymbol](imtconsubscriptionsymbol.md "IMTConSubscriptionSymbol") class contains the following enumerations:
  * [IMTConSubscriptionSymbol::EnLevel](imtconsubscriptionsymbol_enum.htm#enlevel)
  * [IMTConSubscriptionSymbol::EnTickHistory](imtconsubscriptionsymbol_enum.htm#entickhistory)

IMTConSubscriptionSymbol::EnLevel
Types of price data available by subscription are enumerated in IMTConSubscriptionSymbol::EnLevel.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| LEVEL_DELAYED | 0 | Data is provided with a delay specified in the symbol settings. Depth of Market and tick history are not available. |
| LEVEL_REALTIME_LEVEL_1 | 1 | Real-time Bid/Ask data. Depths of Market is not be available. |
| LEVEL_REALTIME_LEVEL_2 | 2 | Real-time Bid/Ask and Depth of Market data. |
| LEVEL_FIRST |  | Enumeration beginning. Corresponds to LEVEL_DELAYED. |
| LEVEL_LAST |  | End of enumeration. Corresponds to LEVEL_REALTIME_LEVEL_2. |

The enumeration is used in the [IMTConSubscriptionSymbol::Level](imtconsubscriptionsymbol_level.md "Level") method.
IMTConSubscriptionSymbol::EnTickHistory
IMTConSubscriptionSymbol::EnTickHistory provides an enumeration of periods (depth) for which tick data can be available by subscription.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TICK_HISTORY_NONE | 0 | Data not available. |
| TICK_HISTORY_LAST_DAY | 1 | Last day. |
| TICK_HISTORY_LAST_WEEK | 2 | Last week. |
| TICK_HISTORY_LAST_MONTH | 3 | Last month. |
| TICK_HISTORY_LAST_3MONTHS | 4 | Last three months. |
| TICK_HISTORY_LAST_6MONTHS | 5 | Last six months. |
| TICK_HISTORY_LAST_YEAR | 6 | Last year. |
| TICK_HISTORY_LAST_2YEARS | 7 | Last two years. |
| TICK_HISTORY_LAST_3YEARS | 8 | Last three years. |
| TICK_HISTORY_LAST_5YEARS | 9 | Last five years. |
| TICK_HISTORY_ALL | 10 | All available data. |
| TICK_HISTORY_FIRST |  | Enumeration beginning. Corresponds to TICK_HISTORY_NONE. |
| TICK_HISTORY_LAST |  | End of enumeration. Corresponds to TICK_HISTORY_ALL. |

The enumeration is used in the [IMTConSubscriptionSymbol::TickHistory](imtconsubscriptionsymbol_tickhistory.md "TickHistory") method.