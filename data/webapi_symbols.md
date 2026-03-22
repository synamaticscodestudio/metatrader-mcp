# Symbols (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases")/ Symbols | [](webapi_group_get.md "Get by Name or Mask") [](webapi_symbol_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Symbols
The Web API provides the following requests for receiving settings of symbols on the server:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/symbol/add](webapi_symbol_add.md "Add") | Create or change a symbol on the server. |
| [/api/symbol/add_batch](webapi_symbol_add_batch.md "Add Multiple") | Create or change multiple symbols on the server. |
| [/api/symbol/delete](webapi_symbol_delete.md "Delete") | Delete a symbol from the server. |
| [/api/symbol/delete_batch](webapi_symbol_delete_batch.md "Delete Multiple") | Delete multiple symbols from the server. |
| [/api/symbol/shift](webapi_symbol_shift.md "Shift") | Change the position of a symbol configuration in the list. |
| [/api/symbol/total](webapi_symbol_total.md "Get Total") | Get the number of symbols on a trade server. |
| [/api/symbol/list](webapi_symbol_list.md "Get List") | Get the list of symbols available on the trade server. |
| [/api/symbol/next](webapi_symbol_next.md "Get by Index") | Get the configuration of one or more symbols by index in the list. |
| [/api/symbol/get](webapi_symbol_get.md "Get by Name or Mask") | Get the symbol configurations by the name or mask. |
| [/api/symbol/get_group](webapi_symbol_get_group.md "Get by Group") | Get an individual configuration of a symbol for a group by the name of the symbol. |
| [/api/symbol_group/add](webapi_symbol_group_add.md "Add Subgroup") | Add a subgroup of symbols. |
| [/api/symbol_group/delete](webapi_symbol_group_delete.md "Delete Subgroup") | Delete a subgroup of symbols by name or index. |
| [/api/symbol_group/shift](webapi_symbol_group_shift.md "Shift Subgroup") | Change the position of a subgroup of symbols in a list. |
| [/api/symbol_group/total](webapi_symbol_group_total.md "Get Subgroup Total") | Get the total number of symbol subgroups existing in the platform. |
| [/api/symbol_group/next](webapi_symbol_group_next.md "Get Subgroup by Index") | Get the name of a subgroup of symbols by index. |
| [/api/symbol_group/list](webapi_symbol_group_exist.md "Get Subgroup List") | Get a list of symbol subgroups available on the trading server. |

The format, in which the data about symbol configuration are passed, are described in the ["Data Structure"](webapi_symbol_data_structure.md "Data Structure") section.