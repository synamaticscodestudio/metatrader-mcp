# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ Enumerations | [](imtconfeedermodule.md "IMTConFeederModule") [](imtconfeedermodule_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConFeederModule](imtconfeedermodule.md "IMTConFeederModule") calss contains one enumeration:
IMTConFeederModule::EnFeedersFieldFlags
Flags of editable fields are listed in IMTConFeederModule::EnFeedersFieldFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEED_FIELD_SERVER | 1 | The "Server" field. |
| FEED_FIELD_LOGIN | 2 | The "Login" field. |
| FEED_FIELD_PASS | 4 | The "Password" field. |
| FEED_FIELD_PARAM | 8 | The "Parameters" field. |
| FEED_FIELD_NONE | 0 | Beginning of enumeration. It corresponds to the absence of required fields. |
| FEED_FIELD_ALL |  | End of enumeration. It corresponds to the fact that all fields are required. |

This enumeration is used in the [IMTConFeederModule::Modes](imtconfeedermodule_modes.md "Modes") method.