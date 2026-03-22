# Floating Margin (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions")/ Floating Margin | [](imtmanagerapi_symbolexist.md "SymbolExist") [](imtmanagerapi_leveragecreate.md "LeverageCreate") |
| --- | --- | --- |
| --- | --- |

Floating Margin
In this section, you can configure a list of rules for quick adjustments of client leverages/margin. You can create several profiles and quickly switch between them in the group settings. Thus, the platform enables the implementation of a dynamic leverage, often referred to as a floating leverage, which adjusts based on different conditions. For example, leverage and margin values may vary depending on the volume of positions on the client account, on the day of the week or other conditions. For further details, please see [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/ru/docs/mt5/platform/administration/leverages).
The functions described in this section enable the management of floating margin configurations:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LeverageCreate](imtmanagerapi_leveragecreate.md "LeverageCreate") | Create a floating margin configuration object. |
| [LeverageCreateArray](imtmanagerapi_leveragecreatearray.md "LeverageCreateArray") | Create an object for a floating margin configuration array. |
| [LeverageRuleCreate](imtmanagerapi_leveragerulecreate.md "LeverageRuleCreate") | Create an object for a floating margin configuration rule. |
| [LeverageTierCreate](imtmanagerapi_leveragetiercreate.md "LeverageTierCreate") | Create an object for a floating margin rule rule. |
| [LeverageSubscribe](imtmanagerapi_leveragesubscribe.md "LeverageSubscribe") | Subscribe to events and hooks related to a floating margin configuration. |
| [LeverageUnsubscribe](imtmanagerapi_leverageunsubscribe.md "LeverageUnsubscribe") | Unsubscribe from events and hooks related to a floating margin configuration. |
| [LeverageTotal](imtmanagerapi_leveragetotal.md "LeverageTotal") | Get the total number of floating margin configurations present in the platform. |
| [LeverageNext](imtmanagerapi_leveragenext.md "LeverageNext") | Get a floating margin configuration by index. |
| [LeverageGet](imtmanagerapi_leverageget.md "LeverageGet") | Get a subscription configuration by name. |
| [LeverageRequest](imtmanagerapi_leveragerequest.md "LeverageRequest") | Request a floating margin configuration from the server by name. |
| [LeverageRequestArray](imtmanagerapi_leveragerequestarray.md "LeverageRequestArray") | Request an array of floating margin configurations from the server by groups. |

To apply a floating margin configuration to a group, use the [IMTConGroup::MarginFloatingLeverage](imtcongroup_marginfloatingleverage.md "MarginFloatingLeverage") method.