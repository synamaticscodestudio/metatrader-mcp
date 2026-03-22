# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ Enumerations | [](imtconkyc.md "IMTConKYC") [](imtconkyc_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConKYC](imtconkyc.md "IMTConKYC") class contains the following enumerations:
  * [IMTConKYC::EnFlags](imtconkyc_enum.htm#enflags)
  * [IMTConKYC::EnProviderType](imtconkyc_enum.htm#enprovidertype)

IMTConKYC::EnFlags
IMTConKYC::EnFlags contains KYC provider configuration flags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_NONE | 0 | No flags. |
| FLAG_ENABLED | 1 | The KYC provider configuration is enabled. If the flag is not set, this provider will not be used for automated verifications. |
| FLAG_DEFAULT | 2 | Default provider. The platform uses this option when selecting a KYC provider to check client data, if verification based on group or country settings failed. |
| FLAG_FIRST |  | Beginning of enumeration. Corresponds to FLAG_NONE. |
| FLAG_ALL |  | End of enumeration. Corresponds to enabling of all flags. |

The enumeration is used in the [IMTConKYC::Flags](imtconkyc_flags.md "Flags") method.
IMTConKYC::EnProviderType
The IMTConKYC::EnProviderType enumeration contains supported KYC providers.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PROVIDER_KYC_SUMSUB | 0 | [Sum & Substance](https://sumsub.com/) |
| PROVIDER_KYC_WORLD_CHECK | 1 | [World-Check](https://www.refinitiv.com/en/products/world-check-kyc-screening) (currently not supported) |
| PROVIDER_KYC_ESPEAR | 2 | [eSpear](https://espear.com/) (currently not supported) |
| PROVIDER_KYC_FIRST |  | Beginning of enumeration. Corresponds to PROVIDER_KYC_SUMSUB. |
| PROVIDER_KYC_LAST | 299 | End of enumeration. Corresponds to PROVIDER_KYC_ESPEAR. |

The enumeration is used in the [IMTConKYC::ProviderType](imtconkyc_providertype.md "ProviderType") method.