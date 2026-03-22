# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ Enumerations | [](imtconparam.md "IMTConParam") [](imtconparam_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConParam](imtconparam.md "IMTConParam") class contains one enumeration:
IMTConParam::ParamType
Possible types of parameters are specified in IMTConParam::ParamType.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TYPE_STRING | 0 | String. |
| TYPE_INT | 1 | Integer (int). |
| TYPE_FLOAT | 2 | Floating-point number. |
| TYPE_TIME | 3 | Time. |
| TYPE_DATE | 4 | Date. |
| TYPE_DATETIME | 5 | Date and time. |
| TYPE_GROUPS | 6 | List of groups. |
| TYPE_SYMBOLS | 7 | List of symbols. |
| TYPE_BOOL | 8 | Boolean. |
| TYPE_COLOR | 9 | Color. |
| TYPE_FIRST |  | Beginning of enumeration. It corresponds to TYPE_STRING. |
| TYPE_LAST |  | End of enumeration. It corresponds to TYPE_COLOR. |

This enumeration is used in the [IMTConParam::Type](imtconparam_type.md "Type") method.