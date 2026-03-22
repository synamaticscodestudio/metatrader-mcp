# Subscriptions (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases")/ Subscriptions | [](webapi_plugin_module_get.md "Get Module by Name") [](webapi_subscription_cfg_data_format.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Subscriptions
With the "Subscriptions" service, you can offer additional paid services to traders directly through the client terminals. For example, you can sell subscriptions for high-quality market data from well-known providers, offer personal manager services to assist traders in understanding the basics of trading, deliver one-time services such as position transferring or currency conversion, and much more. For more details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions).
The following requests are provided for operations with subscription settings in the trading platform:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [/api/subscription/config/add](webapi_subscription_cfg_add.md "Add") | Add and update a subscription configuration in the trading platform. |
| [/api/subscription/config/delete](webapi_subscription_cfg_delete.md "Delete") | Delete a subscription configuration from the trading platform. |
| [/api/subscription/config/shift](webapi_subscription_cfg_shift.md "Shift") | Change the position of a subscription configuration in the list. |
| [/api/subscription/config/total](webapi_subscription_cfg_total.md "Get Total") | Get the number of subscription configurations available in the platform. |
| [/api/subscription/config/next](webapi_subscription_cfg_next.md "Get by Index") | Get one or more subscription configurations by index in the list. |
| [/api/subscription/config/get](webapi_subscription_cfg_get.md "Get by Name/ID") | Get subscription configurations by a list of IDs or indexes, as well as by name. |

The format, in which the subscription configuration data is passed, is described in the "[Data Structure](webapi_subscription_cfg_data_format.md "Data Structure")" section.