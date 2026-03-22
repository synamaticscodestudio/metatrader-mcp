# History Data (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ History Data | [](imtserverapi_dealerrequestgetall.md "DealerRequestGetAll") [](imtserverapi_chartsubscribe.md "ChartSubscribe") |
| --- | --- | --- |
| --- | --- |

History Data
The MetaTrader 5 Server API provides functions for working with historical price data of the platform that are available in the form of minute bars. They allow you to edit or delete minute bars.
Functions for working with historical data:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [ChartSubscribe](imtserverapi_chartsubscribe.md "ChartSubscribe") | Subscribe to events and hooks associated with changes in the database of one-minute data. |
| [ChartUnsubscribe](imtserverapi_chartunsubscribe.md "ChartUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the database of one-minute data. |
| [ChartGet](imtserverapi_chartget.md "ChartGet") | Request minute bars for a symbol. |
| [ChartDelete](imtserverapi_chartdelete.md "ChartDelete") | Delete a bar by the symbol. |
| [ChartUpdate](imtserverapi_chartupdate.md "ChartUpdate") | Change historical data of a symbol. |
| [ChartSplit](imtserverapi_chartsplit.md "ChartSplit") | Split of the symbol's bar history. |

Price data is stored on the history server in the form of one minute bars. Larger timeframes are formed on a client side from the minute bars according to the following principle: bars from the first to the last second of a period are used for calculation. For example, a H1 bar for 13:00 consists of minute bars within the range from 13:00:00 to 13:59:59.  
---