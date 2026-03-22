# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ Enumerations | [](imtconserveraccess.md "IMTConServerAccess") [](imtconserveraccess_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConServerAccess](imtconserveraccess.md "IMTConServerAccess") class contains the following enumerations:
IMTConServerAccess::EnAccessMask
Type of allowable connections to the Access Server are listed in the IMTConServerAccess::EnAccessMask enumeration.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ACCESS_ALLOW_CLIENT | 1 | Allow client connections. |
| ACCESS_ALLOW_MANAGER | 2 | Allow manager connections. |
| ACCESS_ALLOW_ADMIN | 4 | Allow administrator connections. |
| ACCESS_ALLOW_RESERVED | 8 | The value is reserved for future use. |
| ACCESS_ALLOW_MANAGER_API | 16 | Allow connections via manager API. |
| ACCESS_ALLOW_WEB_API | 32 | Allow connections via the Web API. |
| ACCESS_ALLOW_VPS | 64 | Allow connections only for client terminals running on [built-in VPSs](https://www.mql5.com/en/vps). |
| ACCESS_FLAGS_HIDELOGIN | 128 | Hilde client logins from server logs. It is recommended to enable this option for [rented access servers](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_network/hosted_access_server). |
| ACCESS_ALLOW_NONE |  | Beginning of enumeration. It corresponds to disabling of all permissions. |
| ACCESS_ALLOW_ALL |  | End of enumeration. It corresponds to enabling of all permissions. |

This enumeration is used in the [IMTConServerAccess::AccessMask](imtconserveraccess_accessmask.md "AccessMask") method.
IMTConServerAccess::EnServerPriority
The thresholds of the access server priority are specified in IMTConServerAccess::EnServerPriority.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PRIORITY_HIGHEST | 0 | The highest priority of the Access Server. |
| PRIORITY_LOWEST | 15 | The lowest priority of the Access Server. |
| PRIORITY_IDLE | 255 | Special priority "idle", designed to create backup access servers. Such servers are enabled only in case all other access servers fail. |
| PRIORITY_FIRST |  | Beginning of enumeration. It corresponds to PRIORITY_HIGHEST. |
| PRIORITY_LAST |  | End of enumeration. It corresponds to PRIORITY_IDLE. |

This enumeration is used in the [IMTConsServerAccess::Priority](imtconserveraccess_priority.md "Priority") method.
IMTConServerAccess::EnAccessFlags
Additional settings of Access Servers are enumerated in IMTConServerAccess::EnAccessFlags.
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ACCESS_FLAGS_INVISIBLE | 1 | The flag is used for configuring the operation of the Access Server with an [external Anti-DDoS service provider](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_network/network_anti_ddos). When the flag is enabled, the Access Server becomes invisible for all types of terminals, although it is still possible to connect to this server. Not knowing the address of the server, attackers will not be able to perform an attack. An Anti-DDoS service provider will forward legitimate client connections to this server. |
| ACCESS_FLAGS_NONE | 0 | Beginning of enumeration. No flags. |
| ACCESS_FLAGS_ALL | 1 | End of enumeration. Corresponds to enabling all the flags. |

This enumeration is used in the [IMTConServerAccess::AccessFlags](imtconserveraccess_accessflags.md "AccessFlags") method.