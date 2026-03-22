# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerReport ](imtconmanagerreport.md "IMTConManagerReport")/ Enumerations | [](imtconmanagerreport.md "IMTConManagerReport") [](imtconmanagerreport_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConManagerReport](imtconmanagerreport.md "IMTConManagerReport") class contains the following enumerations:
  * [IMTConManagerReport::EnPermissionsFlags](imtconmanagerreport_enum.htm#enpermissionsflags)

IMTConManagerReport::EnPermissionsFlags
The states of manager permissions are listed in IMTConManager::EnPermissionsFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PERMISSION_NONE | 0x00000000 | Access is denied. |
| PERMISSION_VIEW | 0x00000001 | Permission to view the report. |
| PERMISSION_EXPORT | 0x00000002 | Permission to export report data to a file. |
| PERMISSION_ALL |  | Enumeration end. Corresponds to enabling of all permissions. |

The enumeration is used in the [IMTConManagerReport::Permissions](imtconmanagerreport_permissions.md "Permissions") method.