# IMTSubscription (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions")/ IMTSubscription | [](reference_subscription.md "Subscriptions") [](imtsubscription_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTSubscription
This interface provides access to a [trader's subscription parameters](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions/subscriptions_control).
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtsubscription_release.md "Release") | Delete the current object. |
| [Assign](imtsubscription_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtsubscription_clear.md "Clear") | Clear an object. |
| [ID](imtsubscription_id.md "ID") | Get a unique subscription identifier. |
| [Login](imtsubscription_login.md "Login") | Get and set the login of the client to whom the subscription belongs. |
| [Subscription](imtsubscription_subscription.md "Subscription") | Get and set the subscription configuration identifier. |
| [Status](imtsubscription_status.md "Status") | Get and set the subscription status. |
| [Flags](imtsubscription_flags.md "Flags") | Get and set additional subscription properties. |
| [TimeSubscribe](imtsubscription_timesubscribe.md "TimeSubscribe") | Get and set the subscription start time. |
| [TimeRenewal](imtsubscription_timerenewal.md "TimeRenewal") | Get and set the last subscription renewal time. |
| [TimeExpire](imtsubscription_timeexpire.md "TimeExpire") | Get and set the subscription expiration time. |

The IMTSubscription class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnStatus](imtsubscription_enum.htm#enstatus) | Possible subscription statuses. |
| [EnFlags](imtsubscription_enum.htm#enflags) | Flags for additional subscription properties. |