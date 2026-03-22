# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ Enumerations | [](imtconserver.md "IMTConServer") [](imtconserver_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConServer](imtconserver.md "IMTConServer") class contains the following enumerations:
IMTConServer::EnServerTypes
Server types are listed in IMTConServer::EnServerTypes.
| ID | Value | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| NET_MAIN_TRADE_SERVER | 0 | The Main Trade Server. |
| NET_TRADE_SERVER | 1 | Trade Server. |
| NET_HISTORY_SERVER | 2 | History Server. |
| NET_ACCESS_SERVER | 3 | Access Server. |
| NET_BACKUP_SERVER | 4 | Backup Server. |
| NET_ANTIDDOS_SERVER | 7 | Component for connecting an external Anti-DDoS service provider. |
| NET_SERVER_FIRST |  | Beginning of enumeration. It correspond to NET_MAIN_TRADE_SERVER. |
| NET_SERVER_LAST |  | End of enumeration. It correspond to NET_ANTIDDOS_SERVER. |

This enumeration is used in the [IMTConServer::Type](imtconserver_type.md "Type") method.
IMTConServer::EnFailoverModes
Automated failover modes are enumerated in IMTConServer::EnFailoverModes.
| Identifier | Value | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| FAILOVER_MODE_DISABLED | 0 | Automated failover is disabled. |
| FAILOVER_MODE_BY_MOST | 1 | Switch to a backup server if the main server is unavailable for the most of monitoring access points. |
| FAILOVER_MODE_BY_ALL | 2 | Switch to a backup server if the main server is unavailable for all of the monitoring access points. |
| FAILOVER_MODE_FIRST |  | Beginning of enumeration. It corresponds to FAILOVER_MODE_DISABLED. |
| FAILOVER_MODE_LAST |  | End of enumeration. It corresponds to FAILOVER_MODE_BY_ALL. |

This enumeration is used in the [IMTConServer::FailoverMode](imtconserver_failovermode.md "FailoverMode") method.