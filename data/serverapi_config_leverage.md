# Floating Margin (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Floating Margin | [](imtserverapi_subscriptioncfggetbyid.md "SubscriptionCfgGetByID") [](imtserverapi_leveragecreate.md "LeverageCreate") |
| --- | --- | --- |
| --- | --- |

Floating Margin
In this section, you can configure a list of rules for quick adjustments of client leverages/margin. You can create several profiles and quickly switch between them in the group settings. Thus, the platform enables the implementation of a dynamic leverage, often referred to as a floating leverage, which adjusts based on different conditions. For example, leverage and margin values may vary depending on the volume of positions on the client account, on the day of the week or other conditions. For further details, please see [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/ru/docs/mt5/platform/administration/leverages).
The functions described in this section enable the management of floating margin configurations:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LeverageCreate](imtserverapi_leveragecreate.md "LeverageCreate") | Create a floating margin configuration object. |
| [LeverageRuleCreate](imtserverapi_leveragerulecreate.md "LeverageRuleCreate") | Create an object for a floating margin configuration rule. |
| [LeverageTierCreate](imtserverapi_leveragetiercreate.md "LeverageTierCreate") | Create an object for a floating margin rule rule. |
| [LeverageSubscribe](imtserverapi_leveragesubscribe.md "LeverageSubscribe") | Subscribe to events and hooks related to a floating margin configuration. |
| [LeverageUnsubscribe](imtserverapi_leverageunsubscribe.md "LeverageUnsubscribe") | Unsubscribe from events and hooks related to a floating margin configuration. |
| [LeverageAdd](imtserverapi_leverageadd.md "LeverageAdd") | Add or update a floating margin configuration. |
| [LeverageDelete](imtserverapi_leveragedelete.md "LeverageDelete") | Delete a floating margin configuration by name and by index. |
| [LeverageShift](imtserverapi_leverageshift.md "LeverageShift") | Change the position of a floating margin configuration in the list. |
| [LeverageTotal](imtserverapi_leveragetotal.md "LeverageTotal") | Get the total number of floating margin configurations present in the platform. |
| [LeverageNext](imtserverapi_leveragenext.md "LeverageNext") | Get a floating margin configuration by index. |
| [LeverageGet](imtserverapi_leverageget.md "LeverageGet") | Get a floating margin configuration by name. |

To apply a floating margin configuration to a group, use the [IMTConGroup::MarginFloatingLeverage](imtcongroup_marginfloatingleverage.md "MarginFloatingLeverage") method.