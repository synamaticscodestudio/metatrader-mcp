# History Data (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ History Data | [](imtmanagerapi_positionsplit.md "PositionSplit") [](imtmanagerapi_chartrequest.md "ChartRequest") |
| --- | --- | --- |
| --- | --- |

History Data Functions
The MetaTrader 5 Manager API provides functions for working with historical price data of the platform that are available in the form of minute bars. They allow you to edit or delete minute bars.
Functions for working with historical data:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [ChartRequest](imtmanagerapi_chartrequest.md "ChartRequest") | Request minute bars for a symbol. |
| [ChartDelete](imtmanagerapi_chartdelete.md "ChartDelete") | Delete a bar by the symbol. |
| [ChartUpdate](imtmanagerapi_chartupdate.md "ChartUpdate") | Change historical data of a symbol. |
| [ChartReplace](imtmanagerapi_chartreplace.md "ChartReplace") | Full replacement of history data in the specified period with the passed data. |
| [ChartSplit](imtmanagerapi_chartsplit.md "ChartSplit") | Split the symbol bar history. |

Price data is stored on the history server in the form of one minute bars. Larger timeframes are formed on a client side from the minute bars according to the following principle: bars from the first to the last second of a period are used for calculation. For example, a H1 bar for 13:00 consists of minute bars within the range from 13:00:00 to 13:59:59.  
---