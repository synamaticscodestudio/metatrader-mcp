# Floating Margin (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases")/ Floating Margin | [](webapi_symbol_group_exist.md "Get Subgroup List") [](webapi_leverage_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Floating Margin
In this section, you can configure a list of rules for quick adjustments of client leverages/margin. You can create several profiles and quickly switch between them in the group settings. Thus, the platform enables the implementation of a dynamic leverage, often referred to as a floating leverage, which adjusts based on different conditions. For example, leverage and margin values may vary depending on the volume of positions on the client account, on the day of the week or other conditions. For further details, please see [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/leverages).
The following requests are provided for managing floating margin settings:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/leverage/add](webapi_leverage_add.md "Add") | Create or update the floating margin configuration on the server. |
| [/api/leverage/delete](webapi_leverage_delete.md "Delete") | Delete a floating margin configuration with the specified name. |
| [/api/leverage/shift](webapi_leverage_shift.md "Shift") | Change the position of the floating margin configuration in the list. |
| [/api/leverage/total](webapi_leverage_total.md "Get total") | Getting the number of floating margin configurations existing on the trading server. |
| [/api/leverage/next](webapi_leverage_next.md "Get by Index") | Get one or more floating margin configurations by index in the list. |
| [/api/leverage/get](webapi_leverage_get.md "Get by Name") | Get one or more floating margin configurations by name. |

The format in which the symbol configuration data is provided is described in the [Data Structure](webapi_leverage_data_structure.md "Data Structure") section.