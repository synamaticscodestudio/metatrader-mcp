# Subscriptions (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)")/ Subscriptions | [](webapi_setting_delete.md "Delete") [](webapi_subscription_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Subscriptions
With the "Subscriptions" service, you can offer additional paid services to traders directly through the client terminals. For example, you can sell subscriptions for high-quality market data from well-known providers, offer personal manager services to assist traders in understanding the basics of trading, deliver one-time services such as position transferring or currency conversion, and much more. For more details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions).
The requests described in this section enable the management of subscriptions on traders' accounts:
| Request | Purpose |
| --- | --- |
| --- | --- |
| [/api/subscription/join](webapi_subscription_join.md "Subscribe") | Add a subscription for a user. |
| [/api/subscription/cancel](webapi_subscription_cancel.md "Unsubscribe") | Cancel a user subscription user. |
| [/api/subscription/add](webapi_subscription_add.md "Add to Database") | Add a user subscription directly to the server database. |
| [/api/subscription/update](webapi_subscription_update.md "Update in Database") | Edit a user subscription directly in the server database. |
| [/api/subscription/delete](webapi_subscription_delete.md "Delete from Database") | Delete a user subscription directly from the server database. |
| [/api/subscription/get](webapi_subscription_get.md "Get Subscriptions") | Get a user subscription user. |
| [/api/subscription/exist](webapi_subscription_exist.md "Check Subscription Existence") | Check if the user has a subscription to the specified service. |
| [/api/subscription/history/add](webapi_subscription_history_add.md "Add to History") | Add a user subscription action directly to the server database. |
| [/api/subscription/history/update](webapi_subscription_history_update.md "Update in History") | Edit a user subscription action directly in the server database. |
| [/api/subscription/history/delete](webapi_subscription_history_delete.md "Delete from History") | Delete a user subscription action directly from the server database. |
| [/api/subscription/history/get](webapi_subscription_history_get.md "Get from History") | Get a history of user's subscription actions. |

The format, in which the subscription data is passed, is described in the "[Data Structure](webapi_subscription_data_structure.md "Data Structure")" section.