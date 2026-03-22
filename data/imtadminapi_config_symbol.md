# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ Symbols | [](imtadminapi_firewallnext.md "FirewallNext") [](imtadminapi_symbolcreate.md "SymbolCreate") |
| --- | --- | --- |
| --- | --- |

Configuration of Symbols
Functions allow to manage symbols, as well subscribe and unsubscribe from events associated with their change.
The following functions for managing symbols are available:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [SymbolCreate](imtadminapi_symbolcreate.md "SymbolCreate") | Create an object of the symbol configuration. |
| [SymbolSessionCreate](imtadminapi_symbolsessioncreate.md "SymbolSessionCreate") | Create an object of configuration of a trading or quoting session of the symbol. |
| [SymbolSubscribe](imtadminapi_symbolsubscribe.md "SymbolSubscribe") | Subscribe to events associated with the configuration of symbols. |
| [SymbolUnsubscribe](imtadminapi_symbolunsubscribe.md "SymbolUnsubscribe") | Unsubscribe from events associated with the configuration of symbols. |
| [SymbolUpdate](imtadminapi_symbolupdate.md "SymbolUpdate") | Add or update a symbol configuration. |
| [SymbolUpdateBatch](imtadminapi_symbolupdatebatch.md "SymbolUpdateBatch") | Add or edit multiple symbol configurations. |
| [SymbolDelete](imtadminapi_symboldelete.md "SymbolDelete") | Delete a symbol configuration by the index or name. |
| [SymbolDeleteBatch](imtadminapi_symboldeletebatch.md "SymbolDeleteBatch") | Delete multiple symbol configurations. |
| [SymbolShift](imtadminapi_symbolshift.md "SymbolShift") | Change the position of a symbol configuration in the list. |
| [SymbolTotal](imtadminapi_symboltotal.md "SymbolTotal") | The total number of symbol configurations available in the platform. |
| [SymbolNext](imtadminapi_symbolnext.md "SymbolNext") | Get the symbol configuration by the index. |
| [SymbolGet](imtadminapi_symbolget.md "SymbolGet") | Get a symbol configuration or an individual configuration of a symbol for a group by the name of the symbol. |
| [SymbolExist](imtadminapi_symbolexist.md "SymbolExist") | Check the availability of a symbol for a specified [group](config_group.md "Groups") of clients. |
| [SymbolGroupAdd](imtadminapi_symbolgroupadd.md "SymbolGroupAdd") | Add a subgroup of symbols. |
| [SymbolGroupDelete](imtadminapi_symbolgroupdelete.md "SymbolGroupDelete") | Remove a subgroup of symbols by name. |
| [SymbolGroupShift](imtadminapi_symbolgroupshift.md "SymbolGroupShift") | Change the position of a subgroup of symbols in a list. |
| [SymbolGroupTotal](imtadminapi_symbolgrouptotal.md "SymbolGroupTotal") | Get the total number of symbol subgroups existing in the platform. |
| [SymbolGroupNext](imtadminapi_symbolgroupnext.md "SymbolGroupNext") | Get the name of a subgroup of symbols by index. |
| [SymbolGroupExist](imtadminapi_symbolgroupexist.md "SymbolGroupExist") | Check the presence of a subgroup of symbols on the trading server. |