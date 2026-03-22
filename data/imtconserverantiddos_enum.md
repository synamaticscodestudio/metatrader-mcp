# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ Enumerations | [](imtconserverantiddos.md "IMTConServerAntiDDoS") [](imtconserverantiddos_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConServerAntiDDoS](imtconserverantiddos.md "IMTConServerAntiDDoS") class contains the following enumerations:
IMTConServerAntiDDoS::EnAccessMask
IMTConServerAntiDDoS::EnAccessMask lists types of connections to the Access Server that can be allowed.
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ACCESS_ALLOW_CLIENT | 1 | Allow client connections. |
| ACCESS_ALLOW_MANAGER | 2 | Allow manager connections. |
| ACCESS_ALLOW_ADMIN | 4 | Allow administrator connections. |
| ACCESS_ALLOW_CLIENT_API | 8 | Allow connections via client API. |
| ACCESS_ALLOW_MANAGER_API | 16 | Allow connections via manager API. |
| ACCESS_ALLOW_NONE |  | Beginning of enumeration. It corresponds to disabling of all permissions. |
| ACCESS_ALLOW_ALL |  | End of enumeration. It corresponds to enabling of all permissions. |

This enumeration is used in the [IMTConServerAntiDDoS::AccessMask](imtconserverantiddos_accessmask.md "AccessMask") method.
IMTConServerAntiDDoS::EnServerPriority
Ranges of Anti-DDoS server priority values are specified in IMTConServerAntiDDoS::EnServerPriority.
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PRIORITY_HIGHEST | 0 | The highest priority of the Anti-DDoS server. |
| PRIORITY_LOWEST | 15 | The lowest priority of the Anti-DDoS server. |
| PRIORITY_IDLE | 255 | Special priority "idle", designed to create backup Anti-DDoS servers. Such servers are only enabled if all other Anti-DDoS servers fail. |
| PRIORITY_FIRST |  | Beginning of enumeration. It corresponds to PRIORITY_HIGHEST. |
| PRIORITY_LAST |  | End of enumeration. It corresponds to PRIORITY_IDLE. |

This enumeration is used in the [IMTConServerAntiDDoS::Priority](imtconserverantiddos_priority.md "Priority") method.