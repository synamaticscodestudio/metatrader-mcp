# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Enumerations | [](imtconreportmodule.md "IMTConReportModule") [](imtconreportmodule_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") interface contains the following enumerations:
  * [IMTConReportModule::EnSnapshots](imtconreportmodule_enum.htm#ensnapshots)
  * [IMTConReportModule::EnTypes](imtconreportmodule_enum.htm#entypes)

IMTConReportModule::EnSnapshots
Possible modes for creating snapshots of databases when generating reports are enumerated in IMTConReportModule::EnSnapshots. Database snapshots allow you to quickly save a particular database, which helps to avoid the discrepancy between the beginning and end of the report that may occur due to changes in the market environment during the report generation time.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| SNAPSHOT_NONE | 0x0 | No snapshots. |
| SNAPSHOT_USERS | 0x1 | A snapshot of the database of users requested by a manager during report generation. |
| SNAPSHOT_USERS_FULL | 0x2 | A snapshot of the entire database of users. |
| SNAPSHOT_ACCOUNTS | 0x4 | A snapshot of the database of trading accounts requested by a manager during report generation. |
| SNAPSHOT_ACCOUNTS_FULL | 0x8 | A snapshot of the entire database of trading accounts. |
| SNAPSHOT_ORDERS | 0x10 | A snapshot of the database of orders requested by a manager during report generation. |
| SNAPSHOT_ORDERS_FULL | 0x20 | A snapshot of the entire database of orders. |
| SNAPSHOT_POSITIONS | 0x40 | A snapshot of the database of positions requested by a manager during report generation. |
| SNAPSHOT_POSITIONS_FULL | 0x80 | A snapshot of the entire database of positions. |
| SNAPSHOT_FIRST |  | Beginning of enumeration. It corresponds to SNAPSHOT_NONE. |
| SNAPSHOT_LAST |  | End of enumeration. It corresponds to SNAPSHOT_POSITIONS_FULL. |

This enumeration is used in the [IMTConReportModule::Snapshots](imtconreportmodule_snapshots.md "Snapshots") method.
IMTConReportModule::EnTypes
Types of reports that can be supported by the report module are enumerated in IMTConReportModule::EnTypes:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TYPE_NONE | 0x0 | None of the types is supported. |
| TYPE_HTML | 0x1 | Generation of HTML reports. |
| TYPE_TABLE | 0x2 | Generation of reports as binary tables. |
| TYPE_FIRST |  | Beginning of enumeration. Corresponds to TYPE_NONE. |
| TYPE_LAST |  | Beginning of enumeration. It corresponds to TYPE_TABLE. |
| TYPE_ALL |  | All types of reports are supported. |

This enumeration is used in the [IMTConReportModule::Types](imtconreportmodule_types.md "Types") method.