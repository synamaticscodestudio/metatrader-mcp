# Subscriptions (MetaTrader5SDK)

|  | [ Return Codes ](reference_retcodes.md "Return Codes")/ Subscriptions | [](retcodes_messenger.md "Messengers") [](reference_structures.md "Structures") |
| --- | --- | --- |
| --- | --- |

Subscriptions
This group of codes is returned by the server when working with [subscription configurations](config_subscription.md "Subscriptions") and [databases](reference_subscription.md "Subscriptions"):
| Constant | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| MT_RET_SUBS_NOT_FOUND | 15000 | [Subscription](imtsubscription.md "IMTSubscription") not found. |
| MT_RET_SUBS_NOT_FOUND_CFG | 15001 | [Subscription configuration](imtconsubscription.md "IMTConSubscription") not found. |
| MT_RET_SUBS_NOT_FOUND_USER | 15002 | User from subscription not found. |
| MT_RET_SUBS_DISABLED | 15003 | Subscription disabled. The current status can be obtained via [IMTSubscription::Status](imtsubscription_status.md "Status"). |
| MT_RET_SUBS_PERMISSION_USER | 15004 | Subscription not allowed for the user. |
| MT_RET_SUBS_PERMISSION_SUBSCRIBE | 15005 | Subscription not allowed. The availability of a subscription option is determined by the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") property. |
| MT_RET_SUBS_PERMISSION_UNSUBSCRIBE | 15006 | Unsubscribing not allowed. The ability to unsubscribe is determined by the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") property. |
| MT_RET_SUBS_REAL_ONLY | 15007 | Subscription only allowed for real accounts. |