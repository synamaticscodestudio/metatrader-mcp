# Floating Margin (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ Floating Margin | [](imtadminapi_groupget.md "GroupGet") [](imtadminapi_leveragecreate.md "LeverageCreate") |
| --- | --- | --- |
| --- | --- |

Floating Margin
In this section, you can configure a list of rules for quick adjustments of client leverages/margin. You can create several profiles and quickly switch between them in the group settings. Thus, the platform enables the implementation of a dynamic leverage, often referred to as a floating leverage, which adjusts based on different conditions. For example, leverage and margin values may vary depending on the volume of positions on the client account, on the day of the week or other conditions. For further details, please see [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/ru/docs/mt5/platform/administration/leverages).
The functions described in this section enable the management of floating margin configurations:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LeverageCreate](imtadminapi_leveragecreate.md "LeverageCreate") | Create a floating margin configuration object. |
| [LeverageRuleCreate](imtadminapi_leveragerulecreate.md "LeverageRuleCreate") | Create an object for a floating margin configuration rule. |
| [LeverageTierCreate](imtadminapi_leveragetiercreate.md "LeverageTierCreate") | Create an object for a floating margin rule rule. |
| [LeverageSubscribe](imtadminapi_leveragesubscribe.md "LeverageSubscribe") | Subscribe to events and hooks related to a floating margin configuration. |
| [LeverageUnsubscribe](imtadminapi_leverageunsubscribe.md "LeverageUnsubscribe") | Unsubscribe from events and hooks related to a floating margin configuration. |
| [LeverageUpdate](imtadminapi_leverageupdate.md "LeverageUpdate") | Add or update a floating margin configuration. |
| [LeverageUpdateBatch](imtadminapi_leverageupdatebatch.md "LeverageUpdateBatch") | Add or update a batch of floating margin configurations. |
| [LeverageDelete](imtadminapi_leveragedelete.md "LeverageDelete") | Delete a floating margin configuration by name and by index. |
| [LeverageDeleteBatch](imtadminapi_leveragedeletebatch.md "LeverageDeleteBatch") | Delete a batch of floating margin configurations. |
| [LeverageShift](imtadminapi_leverageshift.md "LeverageShift") | Change the position of a floating margin configuration in the list. |
| [LeverageTotal](imtadminapi_leveragetotal.md "LeverageTotal") | Get the total number of floating margin configurations present in the platform. |
| [LeverageNext](imtadminapi_leveragenext.md "LeverageNext") | Get a floating margin configuration by index. |
| [LeverageGet](imtadminapi_leverageget.md "LeverageGet") | Get a floating margin configuration by name. |

To apply a floating margin configuration to a group, use the [IMTConGroup::MarginFloatingLeverage](imtcongroup_marginfloatingleverage.md "MarginFloatingLeverage") method.