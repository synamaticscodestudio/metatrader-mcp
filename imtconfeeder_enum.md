# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Enumerations | [](imtconfeeder.md "MTConFeeder") [](imtconfeeder_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConFeeder](imtconfeeder.md "MTConFeeder") class contains two enumerations.
IMTConFeeder::EnFeederFlags
Flags of predefined data feed settings are listed in IMTConFeeder::EnFeederFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEED_FLAG_QUOTES | 0x0000001 | The data feed sends quotes. |
| FEED_FLAG_NEWS | 0x0000002 | The data feed sends news. |
| FEED_FLAG_REMOTE | 0x0000008 | The data feed is running on a remote computer. |
| FEED_FLAG_TRIAL | 0x0000010 | The data feed is running in demo mode. The mode is checked based on the license at the time the module is loaded. |
| FEED_FLAG_INTERNAL | 0x0000020 | The data feed is integrated into the platform. This is [MetaTrader 5 Feeder](https://support.metaquotes.net/ru/docs/mt5/platform/components/datafeeds/metatrader5feeder). |
| FEED_FLAG_IMPORT_SYMBOLS | 0x0000040 | The data feed is allowed to import symbol settings. |
| FEED_FLAG_NONE | 0 | Beginning of enumeration. It corresponds to the absence of flags |
| FEED_FLAG_ALL |  | End of enumeration. It correspond to the presence of all flags. |

This enumeration is used in the following methods:
  * [IMTConFeeder::Flags](imtconfeeder_flags.md "Flags")
  * [IMTConFeederModule::Modes](imtconfeedermodule_modes.md "Modes")

IMTConFeeder::EnFeedersMode
Modes of data feed operation are listed in IMTConFeeder::EnFeedersMode.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEEDER_DISBALED | 0 | The data feed is disabled. |
| FEEDER_ENABLED | 1 | The data feed is enabled. |
| FEEDER_FIRST |  | Beginning of enumeration. It corresponds to FEEDER_DISBALED. |
| FEEDER_LAST |  | End of enumeration. It corresponds to FEEDER_ENABLED. |

This enumeration is used in the [IMTConFeeder::Mode](imtconfeeder_mode.md "Mode") method.