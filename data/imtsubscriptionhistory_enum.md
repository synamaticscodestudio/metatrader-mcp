# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscriptionHistory ](imtsubscriptionhistory.md "IMTSubscriptionHistory")/ Enumerations | [](imtsubscriptionhistory.md "IMTSubscriptionHistory") [](imtsubscriptionhistory_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTSubscriptionHistory](imtsubscriptionhistory.md "IMTSubscriptionHistory") class contains the following enumerations:
  * [IMTSubscriptionHistory::EnAction](imtsubscriptionhistory_enum.htm#enaction)

IMTSubscriptionHistory::EnAction
IMTSubscriptionHistory::EnAction provides a list of possible subscription actions.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ACTION_SUBSCRIBE | 0 | Subscribing. |
| ACTION_RENEWAL | 1 | Subscription renewal. |
| ACTION_SUSPEND | 2 | Subscription suspension. |
| ACTION_CANCEL | 3 | Unsubscribing. |
| ACTION_DELETED | 4 | Deleting a subscription. |
| ACTION_FIRST |  | Enumeration beginning. Corresponds to ACTION_SUBSCRIBE. |
| ACTION_LAST |  | End of enumeration. Corresponds to ACTION_DELETED. |

The enumeration is used in the [IMTSubscriptionHistory::Action](imtsubscriptionhistory_action.md "Action") method.