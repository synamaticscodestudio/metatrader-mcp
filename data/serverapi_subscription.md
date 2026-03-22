# Subscriptions (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Subscriptions | [](imtserverapi_dailyselectbylogins.md "DailySelectByLogins") [](imtserverapi_subscriptioncreate.md "SubscriptionCreate") |
| --- | --- | --- |
| --- | --- |

Subscriptions
With the "Subscriptions" service, you can offer additional paid services to traders directly in the client terminals. For example, you can sell subscriptions for high-quality market data from well-known providers, offer personal manager services to assist traders in understanding the basics of trading, deliver one-time services such as position transferring or currency conversion, and much more. For further details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions).
The functions described in this section enable the management of subscriptions on traders' accounts:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [SubscriptionCreate](imtserverapi_subscriptioncreate.md "SubscriptionCreate") | Create a subscription object. |
| [SubscriptionCreateArray](imtserverapi_subscriptioncreatearray.md "SubscriptionCreateArray") | Create an object of the subscriptions array. |
| [SubscriptionSubscribe](imtserverapi_subscriptionsubscribe.md "SubscriptionSubscribe") | Subscribe to events and hooks associated with changes in the subscriptions database. |
| [SubscriptionUnsubscribe](imtserverapi_subscriptionunsubscribe.md "SubscriptionUnsubscribe") | Unsubscribe from events and hooks associated with changes in the subscriptions database. |
| [SubscriptionJoin](imtserverapi_subscriptionjoin.md "SubscriptionJoin") | Add a subscription for a user. |
| [SubscriptionCancel](imtserverapi_subscriptioncancel.md "SubscriptionCancel") | Cancel a subscription for a user. |
| [SubscriptionExist](imtserverapi_subscriptionexist.md "SubscriptionExist") | Check if a user has the subscription. |
| [SubscriptionAdd](imtserverapi_subscriptionadd.md "SubscriptionAdd") | Add a user subscription to the server database. |
| [SubscriptionUpdate](imtserverapi_subscriptionupdate.md "SubscriptionUpdate") | Edit a user subscription in the server database. |
| [SubscriptionDelete](imtserverapi_subscriptiondelete.md "SubscriptionDelete") | Delete a user subscription from the server database. |
| [SubscriptionGet](imtserverapi_subscriptionget.md "SubscriptionGet") | Get all subscriptions of a user. |
| [SubscriptionGetBySubscription](imtserverapi_subscriptiongetbysubscription.md "SubscriptionGetBySubscription") | Get a user subscription by the subscription configuration ID. |
| [SubscriptionGetByID](imtserverapi_subscriptiongetbyid.md "SubscriptionGetByID") | Get a subscription by ID. |
| [SubscriptionGetByLogins](imtserverapi_subscriptiongetbylogins.md "SubscriptionGetByLogins") | Get subscriptions by a list of logins. |
| [SubscriptionHistoryCreate](imtserverapi_subscriptionhistorycreate.md "SubscriptionHistoryCreate") | Create a subscription action object. |
| [SubscriptionHistoryCreateArray](imtserverapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") | Create an object of an array of subscription actions. |
| [SubscriptionHistorySubscribe](imtserverapi_subscriptionhistorysubscribe.md "SubscriptionHistorySubscribe") | Subscribe to events and hooks associated with changes in the database of subscription actions. |
| [SubscriptionHistoryUnsubscribe](imtserverapi_subscriptionhistoryunsubscribe.md "SubscriptionHistoryUnsubscribe") | Unsubscribe from events and hooks associated with changes in the database of subscription actions. |
| [SubscriptionHistoryAdd](imtserverapi_subscriptionhistoryadd.md "SubscriptionHistoryAdd") | Add a user subscription action to the server database. |
| [SubscriptionHistoryUpdate](imtserverapi_subscriptionhistoryupdate.md "SubscriptionHistoryUpdate") | Edit a user subscription action in the server database. |
| [SubscriptionHistoryDelete](imtserverapi_subscriptionhistorydelete.md "SubscriptionHistoryDelete") | Delete a user subscription action from the server database. |
| [SubscriptionHistoryGet](imtserverapi_subscriptionhistoryget.md "SubscriptionHistoryGet") | Get user subscription action from the server for the specified date range. |
| [SubscriptionHistoryGetByID](imtserverapi_subscriptionhistorygetbyid.md "SubscriptionHistoryGetByID") | Get a subscription action by ID. |
| [SubscriptionHistoryGetByLogins](imtserverapi_subscriptionhistorygetbylogins.md "SubscriptionHistoryGetByLogins") | Get subscription actions by a list of logins. |