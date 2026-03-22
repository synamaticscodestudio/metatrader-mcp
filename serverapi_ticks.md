# Tick Data (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Tick Data | [](imtserverapi_chartsplit.md "ChartSplit") [](imtserverapi_ticksubscribe.md "TickSubscribe") |
| --- | --- | --- |
| --- | --- |

Tick Data
The MetaTrader 5 Server API provides functions for working with tick data of the platform. They are used for adding quotes in the price stream, tracking incoming quotes and changing them if necessary.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [TickSubscribe](imtserverapi_ticksubscribe.md "TickSubscribe") | Subscribe to events and hooks associated with changes in the database of price data. |
| [TickUnsubscribe](imtserverapi_tickunsubscribe.md "TickUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the database of price data. |
| [TickAdd](imtserverapi_tickadd.md "TickAdd") | Add a quote into the price stream. |
| [TickAddBatch](imtserverapi_tickaddbatch.md "TickAddBatch") | Add multiple quotes into the price stream. |
| [TickAddStat](imtserverapi_tickaddstat.md "TickAddStat") | Add statistical information about the price. |
| [TickLast](imtserverapi_ticklast.md "TickLast") | Get the las quote for the specified symbol. |
| [TickStat](imtserverapi_tickstat.md "TickStat") | Get statistical information about quotes for the specified symbol. |
| [TickGet](imtserverapi_tickget.md "TickGet") | Get quotes for a symbol in the specified time range. |
| [TickHistoryGetRaw](imtserverapi_tickhistorygetraw.md "TickHistoryGetRaw") | Get the entire stream of quotes for a symbol (raw and processed prices in accordance with the configuration of the symbol) in the specified time range. |
| [TickHistoryGet](imtserverapi_tickhistoryget.md "TickHistoryGet") | Get the history of quotes processed in accordance with the symbol configuration in the specified time range. |