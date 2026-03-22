# Subscriptions (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces")/ Subscriptions | [](imtecnhistorydealarray_searchright.md "SearchRight") [](imtsubscription.md "IMTSubscription") |
| --- | --- | --- |
| --- | --- |

Subscriptions
With the "Subscriptions" service, you can offer additional paid services to traders directly in the client terminals. For example, you can sell subscriptions for high-quality market data from well-known providers, offer personal manager services to assist traders in understanding the basics of trading, deliver one-time services such as position transferring or currency conversion, and much more. For further details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions).
The interfaces described in this section enable the management of [traders' subscription parameters](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions/subscriptions_control):
  * [IMTSubscription](imtsubscription.md "IMTSubscription") — an interface for accessing trader's subscription parameters.
  * [IMTSubscriptionArray](imtsubscriptionarray.md "IMTSubscriptionArray") — an interface for convenient operations with arrays of subscriptions.
  * [IMTSubscriptionHistory](imtsubscriptionhistory.md "IMTSubscriptionHistory") — an interface for accessing [subscription action parameters](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions/subscriptions_control#history).
  * [IMTSubscriptionHistoryArray](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray") — an interface for convenient operations with arrays of subscription actions.
  * [IMTSubscriptionSink](imtsubscriptionsink.md "IMTSubscriptionHistorySink") — an interface for handling events related to changes in the subscriptions database.
  * [IMTSubscriptionHistorySink](imtsubscriptionhistorysink.md "IMTSubscriptionHistorySink") — an interface for handling events related to changes in the database of subscription actions.
