# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface")/ Tick Data | [](imtadminapi_chartsplit.md "ChartSplit") [](imtadminapi_tickrequest.md "TickRequest") |
| --- | --- | --- |
| --- | --- |

Tick Data Functions
The MetaTrader 5 Manager API provides functions for working with tick data of the platform. They are used for adding quotes in the price stream, tracking incoming quotes and changing them if necessary.
Functions for working with price data:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [TickRequest](imtadminapi_tickrequest.md "TickRequest") | Get quotes for a symbol in the specified time range. |
| [TickRequestRaw](imtadminapi_tickrequestraw.md "TickRequestRaw") | Get the entire stream of quotes for a symbol (raw and processed prices in accordance with the configuration of the symbol) in the specified time range. |
| [TickAdd](imtadminapi_tickadd.md "TickAdd") | Add tick data for a symbol. |
| [TickReplace](imtadminapi_tickreplace.md "TickReplace") | Full replacement of tick data in the specified period with the passed data. |