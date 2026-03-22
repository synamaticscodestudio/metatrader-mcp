# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTime ](imtcontime.md "IMTConTime")/ Enumerations | [](imtcontime.md "IMTConTime") [](imtcontime_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConTime](imtcontime.md "IMTConTime") class contains one enumeration.
IMTConTime::EnTimeTableMode
Platform operation modes are enumerated in IMTConTime::EnTimeTableMode.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TIME_MODE_DISABLED | 0 | Non-working day. |
| TIME_MODE_ENABLED | 1 | Working day. |
| TIME_MODE_FIRST |  | Beginning of enumeration. In corresponds to TIME_MODE_DISABLED. |
| TIME_MODE_LAST |  | End of enumeration. It corresponds to TIME_MODE_ENABLED. |

This enumeration is used in the following methods:
  * [IMTConTime::TimeTableGet](imtcontime_timetableget.md "TimeTableGet")
  * [IMTConTime::TimeTableSet](imtcontime_timetableset.md "TimeTableSet")
