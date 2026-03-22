# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ Enumerations | [](imtconcommon.md "IMTConCommon") [](imtconcommon_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConCommon](imtconcommon.md "IMTConCommon") class contains one enumeration.
IMTConCommon::EnUpdateMode
The modes of receiving the platform components updates are listed in IMTConCommon::EnUpdateMode.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| UPDATE_DISABLE | 0 | Update disabled. |
| UPDATE_ENABLE | 1 | Update enabled. |
| UPDATE_ENABLE_BETA | 2 | Update, including intermediate versions. |
| UPDATE_FIRST |  | Beginning of enumeration. It corresponds to UPDATE_DISABLE. |
| UPDATE_LAST |  | End of enumeration. It corresponds to UPDATE_ENABLE_BETA. |

This enumeration is used in method [IMTConCommon::LiveUpdateMode](imtconcommon_liveupdatemode.md "LiveUpdateMode").