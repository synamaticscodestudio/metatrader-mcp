# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ Enumerations | [](imtsubscription.md "IMTSubscription") [](imtsubscription_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTSubscription](imtsubscription.md "IMTSubscription") class contains the following enumerations:
  * [IMTSubscription::EnStatus](imtsubscription_enum.htm#enstatus)
  * [IMTSubscription::EnFlags](imtsubscription_enum.htm#enflags)

IMTSubscription::EnStatus
IMTSubscription::EnStatus provides a list of possible subscription states.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| STATUS_ACTIVE | 0 | Active subscription. |
| STATUS_SUSPENDED | 1 | Suspended subscription. |
| STATUS_CANCELED | 2 | Canceled subscription. |
| ORDER_STATE_FIRST |  | Enumeration beginning. Corresponds to STATUS_ACTIVE. |
| ORDER_STATE_LAST |  | End of enumeration. Corresponds to STATUS_CANCELED. |

The enumeration is used in the [IMTSubscription::Status](imtsubscription_status.md "Status") method.
IMTSubscription::EnFlags
IMTSubscription::EnFlags provides a list of flags for additional subscription properties.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_NONE | 0x00 | No flags. |
| FLAG_FREE_PERIOD | 0x01 | A free subscription period is currently active. |
| FLAG_ALL |  | All flags are set. |

The enumeration is used in the [IMTSubscription::Flags](imtsubscription_flags.md "Flags") method.