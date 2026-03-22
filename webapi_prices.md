# Prices (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)")/ Prices | [](webapi_news_body_request.md "Get News With Body") [](webapi_tick_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Prices
Using the MetaTrader 5 Web API, you can receive price data from a trade server. The following requests are available in the Web API:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/tick/last](webapi_tick_last.md "Get Quotes") | Get the current prices of a symbol. |
| [/api/tick/last_group](webapi_tick_last_group.md "Get Quotes by Group") | Get the current prices of a symbol taking into account conversion for this group. |
| [/api/tick/stat](webapi_tick_stat.md "Get Statistics") | Get the current statistics of a symbol. |
| [/api/tick/history](webapi_tick_history_get.md "Get Tick History") | Get the history of ticks. |
| [/api/chart/get](webapi_chart_get.md "Get M1 History") | Get the history of bars (1-minute data). |
| [/api/book/get](webapi_book_get.md "Get Market Depth") | Get the Market Depth of a symbol. |

The format, in which the data about prices are passed, are described in the ["Data Structure"](webapi_tick_data_structure.md "Data Structure") section.