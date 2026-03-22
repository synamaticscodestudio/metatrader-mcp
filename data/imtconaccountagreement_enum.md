# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAgreement ](imtconaccountagreement.md "IMTConAccountAgreement")/ Enumerations | [](imtconaccountagreement.md "IMTConAccountAgreement") [](imtconaccountagreement_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement") class contains the following enumerations:
  * [IMTConAccountAgreement::EnCaptionType](imtconaccountagreement_enum.htm#encaptiontype)
  * [IMTConAccountAgreement::EnFlags](imtconaccountagreement_enum.htm#enflags)

IMTConAccountAgreement::EnCaptionType
IMTConAccountAgreement::EnCaptionType lists types of agreements which are shown to clients when opening an account.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| CAPTION_CUSTOM | 0 | Custom agreement. |
| CAPTION_CLIENT_AGREEMENT | 1 | Client agreement. |
| CAPTION_RISK_DISCLOSURE | 2 | Risk Disclaimer. |
| CAPTION_CLIENT_AGREEMENT_AND_RISK_DISCLOSURE | 3 | Client agreement and Risk disclaimer. |
| CAPTION_COMPLAINTS_HANDLING_PROCEDURE | 4 | Complaint handling procedure. |
| CAPTION_ORDER_EXECUTION_POLICY | 5 | Order execution policy. |
| CAPTION_CLIENT_CATEGORISATION_NOTICE | 6 | Client categorization procedure. |
| CAPTION_CONFLICTS_OF_INTEREST_POLICY | 7 | Conflict of interest clause. |
| CAPTION_DATA_PROTECTION_POLICY | 8 | Data protection policy. |
| CAPTION_FIRST |  | Enumeration start. Corresponds to CAPTION_CUSTOM. |
| CAPTION_LAST |  | Enumeration end. Corresponds to CAPTION_DATA_PROTECTION_POLICY. |

The enumeration is used in the [IMTConAccountAgreement::CaptionType](imtconaccountagreement_captiontype.md "CaptionType") method.
IMTConAccountAgreement::EnFlags
IMTConAccountAgreement::EnFlags lists additional agreement settings.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| AGREEMENT_FLAG_NONE | 0x00000000 | No flags. |
| AGREEMENT_FLAG_MANDATORY | 0x00000001 | The agreement is required. A user cannot open an account without accepting the agreement. |
| AGREEMENT_FLAG_ALL |  | Enumeration end. Corresponds to all flags enabled. |

The enumeration is used in the [IMTConAccountAgreement::Flags](imtconaccountagreement_flags.md "Flags") method.