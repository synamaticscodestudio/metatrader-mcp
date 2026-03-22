# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ Enumerations | [](imtconleveragerule.md "IMTConLeverageRule") [](imtconleveragerule_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") class contains the following enumerations:
  * [IMTConLeverageRule::EnRangeMode](imtconleveragerule_enum.htm#enrangemode)

IMTConLeverageRule::EnRangeMode
IMTConLeverageRule::EnRangeMode contains types of rule levels.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| RANGE_VOLUME | 0 | Total volume of open positions across all instruments form the [IMTConLeverageRule::Path](imtconleveragerule_path.md "Path") parameter. |
| RANGE_VOLUME_PER_SYMBOL | 1 | Volume of open positions for each individual instrument from the [IMTConLeverageRule::Path](imtconleveragerule_path.md "Path") parameter. |
| RANGE_VALUE | 2 | Total value of open positions across all instruments from the [IMTConLeverageRule::Path](imtconleveragerule_path.md "Path") parameter. |
| RANGE_VALUE_PER_SYMBOL | 3 | Value of open positions for each individual instrument from the [IMTConLeverageRule::Path](imtconleveragerule_path.md "Path") parameter. |
| RANGE_FIRST |  | Enumeration start. Corresponds to RANGE_VOLUME. |
| RANGE_LAST |  | Enumeration end. Corresponds to RANGE_VALUE_PER_SYMBOL. |

The enumeration is used in the [IMTConLeverageRule::RangeMode](imtconleveragerule_rangemode.md "RangeMode") method.