# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Enumerations | [](imtaccount.md "IMTAccount") [](imtaccount_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTAccount](imtaccount.md "IMTAccount") class contains one enumeration:
IMTAccount::EnSoActivation
The account status as per the minimum amount of funds on the account required to maintain trading positions are enumerated in IMTAccount::EnSoActivation.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ACTIVATION_NONE | 0 | None. |
| ACTIVATION_MARGIN_CALL | 1 | Margin call. |
| ACTIVATION_STOP_OUT | 2 | Stop out. |
| ACTIVATION_FIRST |  | Beginning of enumeration. It corresponds to ACTIVATION_NONE. |
| ACTIVATION_LAST |  | End of enumeration. It corresponds to ACTIVATION_STOP_OUT. |

This enumeration is used in the [IMTAccount::SOActivation](imtaccount_soactivation.md "SOActivation") method.