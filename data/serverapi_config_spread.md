# Spreads (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Spreads | [](imtserverapi_symbolgroupexist.md "SymbolGroupExist") [](imtserverapi_spreadcreate.md "SpreadCreate") |
| --- | --- | --- |
| --- | --- |

Configuration of Spreads
MetaTrader 5 Server API allows users to configure the charging of the margin in case client's trading positions are in a spread to one another. The spread is defined as the presence of the oppositely directed positions at related symbols. Reduced margin requirements provide more trading opportunities for traders.
Functions described in this section allow managing spreads, as well subscribe and unsubscribe from events associated with their change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [SpreadCreate](imtserverapi_spreadcreate.md "SpreadCreate") | Create an object of the configuration of a spread. |
| [SpreadLegCreate](imtserverapi_spreadlegcreate.md "SpreadLegCreate") | Create an object of the configuration of a spread leg. |
| [SpreadSubscribe](imtserverapi_spreadsubscribe.md "SpreadSubscribe") | Subscribe to events and hooks associated with the configuration of spreads. |
| [SpreadUnsubscribe](imtserverapi_spreadunsubscribe.md "SpreadUnsubscribe") | Unsubscribe from events and hooks associated with spread configuration. |
| [SpreadAdd](imtserverapi_spreadadd.md "SpreadAdd") | Add or update a spread configuration. |
| [SpreadDelete](imtserverapi_spreaddelete.md "SpreadDelete") | Deleting a spread configuration by the index. |
| [SpreadShift](imtserverapi_spreadshift.md "SpreadShift") | Change the position of a spread configuration in the list. |
| [SpreadTotal](imtserverapi_spreadtotal.md "SpreadTotal") | The total number of spread configurations available in the platform. |
| [SpreadNext](imtserverapi_spreadnext.md "SpreadNext") | Receiving a spread configuration by the index. |
| [SpreadGet](imtserverapi_spreadget.md "SpreadGet") | Receiving a spread configuration by the identifier. |