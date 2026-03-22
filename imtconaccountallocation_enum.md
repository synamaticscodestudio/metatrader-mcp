# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ Enumerations | [](imtconaccountallocation.md "IMTConAccountAllocation") [](imtconaccountallocation_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") contains the following enumerations:
  * [IMTConAccountAllocation::EnFlags](imtconaccountallocation_enum.htm#enflags)

IMTConAccountAllocation::EnFlags
IMTConAccountAllocation::EnFlags lists additional account allocation settings.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_NONE | 0x00000000 | No flags. |
| FLAG_DETAILED_FORM | 0x00000001 | Show extended questionnaire when opening an account. In addition to standard personal details, the questionnaire will require data on nationality, employment, income and trading experience. |
| FLAG_REQUIRE_DOCS | 0x00000002 | Request ID and proof-of-address documents. |
| FLAG_CONFIRM_PHONE | 0x00000004 | Enable verification of the phone specified when opening an account. |
| FLAG_CONFIRM_EMAIL | 0x00000008 | Enable verification of the email specified when opening an account. |
| FLAG_START_KYC | 0x00000010 | Automatically start [KYC verification](imtconkyc.md "IMTConKYC") after opening an account. |
| AGREEMENT_FLAG_ALL |  | Enumeration end. Corresponds to all flags enabled. |

The enumeration is used in the [IMTConAccountAllocation::Flags](imtconaccountallocation_flags.md "Flags") method.