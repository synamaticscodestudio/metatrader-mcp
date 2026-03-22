# Tick Data Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ Tick Data | [](imtmanagerapi_chartsplit.md "ChartSplit") [](imtmanagerapi_ticksubscribe.md "TickSubscribe") |
| --- | --- | --- |
| --- | --- |

Tick Data Functions
The MetaTrader 5 Manager API provides functions for working with tick prices of the platform. They are used for adding quotes in the price stream and tracking incoming quotes.
Functions for working with price data:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [TickSubscribe](imtmanagerapi_ticksubscribe.md "TickSubscribe") | Subscribe to the events associated with changes in the database of price data. |
| [TickUnsubscribe](imtmanagerapi_tickunsubscribe.md "TickUnsubscribe") | Unsubscribe from the events associated with changes in the database of price data. |
| [TickAdd](imtmanagerapi_tickadd.md "TickAdd") | Add a quote into the price stream. |
| [TickAddBatch](imtmanagerapi_tickaddbatch.md "TickAddBatch") | Add multiple quotes into the price stream. |
| [TickAddStat](imtmanagerapi_tickaddstat.md "TickAddStat") | Add statistical information about the price. |
| [TickLast](imtmanagerapi_ticklast.md "TickLast") | Get the last quote of a symbol taking into account spread difference settings for the current manager's group or another specified group. |
| [TickLastRaw](imtmanagerapi_ticklastraw.md "TickLastRaw") | Get the last raw quote of a symbol. |
| [TickStat](imtmanagerapi_tickstat.md "TickStat") | Get statistical information about quotes for the specified symbol. |
| [TickHistoryRequest](imtmanagerapi_tickhistoryrequest.md "TickHistoryRequest") | Get quotes for a symbol in the specified time range. |
| [TickHistoryRequestRaw](imtmanagerapi_tickhistoryrequestraw.md "TickHistoryRequestRaw") | Get the entire stream of quotes for a symbol (raw and processed prices in accordance with the configuration of the symbol) in the specified time range. |
| [TickHistoryAdd](imtmanagerapi_tickhistoryadd.md "TickHistoryAdd") | Add tick data for a symbol. |
| [TickHistoryReplace](imtmanagerapi_tickhistoryreplace.md "TickHistoryReplace") | Full replacement of tick data in the specified period with the passed data. |