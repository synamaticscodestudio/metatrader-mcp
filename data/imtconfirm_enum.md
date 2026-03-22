# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Enumerations | [](imtconfirm.md "IMTConfirm") [](imtconfirm_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConfirm](imtconfirm.md "IMTConfirm") class contains one enumeration:
IMTConfirm::EnConfirmFlags
Possible options of request confirmation are listed in IMTConfirm::EnConfirmFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| CONFIRM_FLAG_NONE | 0 | No confirmation options. |
| CONFIRM_FLAG_TICK | 1 | Adding the price at which the request is executed to the stream of quotes. |
| CONFIRM_FLAG_ALL |  | Enabling all options. |

This enumeration is used in the [IMTConfirm::Flags](imtconfirm_flags.md "Flags") method.