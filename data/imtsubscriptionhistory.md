# IMTSubscriptionHistory (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions")/ IMTSubscriptionHistory | [](imtsubscriptionarray_searchright.md "SearchRight") [](imtsubscriptionhistory_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistory
This interface provides access to [parameters of actions with subscriptions](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions/subscriptions_control#history).
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtsubscriptionhistory_release.md "Release") | Delete the current object. |
| [Assign](imtsubscriptionhistory_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtsubscriptionhistory_clear.md "Clear") | Clear an object. |
| [ID](imtsubscriptionhistory_id.md "ID") | Get a unique identifier of a subscription action. |
| [Login](imtsubscriptionhistory_login.md "Login") | Get and set the login of the client to whom the subscription belongs. |
| [Subscription](imtsubscriptionhistory_subscription.md "Subscription") | Get and set the subscription configuration identifier. |
| [Record](imtsubscriptionhistory_record.md "Subscription") | Get and set the identifier of the subscription with which the action is performed. |
| [Action](imtsubscriptionhistory_action.md "Action") | Get and set the type of performed subscription action. |
| [Time](imtsubscriptionhistory_time.md "Time") | Get and set the subscription action time. |
| [Amount](imtsubscriptionhistory_amount.md "Amount") | Get and set the subscription payment amount. |
| [AmountDigits](imtsubscriptionhistory_amountdigits.md "AmountDigits") | Get and set the number of decimal places in the subscription payment amount. |
| [AmountDeal](imtsubscriptionhistory_amountdeal.md "AmountDeal") | Get and set the ticket of the deal by which the subscription payment was conducted. |

The IMTSubscriptionHistory class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnAction](imtsubscriptionhistory_enum.htm#enaction) | Possible actions with subscriptions. |