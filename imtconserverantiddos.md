# IMTConServerAntiDDoS (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network")/ IMTConServerAntiDDoS | [](imtconserveraccess_serversnext.md "ServersNext") [](imtconserverantiddos_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS
The IMTConServerAntiDDoS interface contains methods for managing parameters of the Anti DDoS Proxy Server component, which enables the use of [external Anti-DDoS services](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_network/network_anti_ddos).
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconserverantiddos_release.md "Release") | Delete the current object. |
| [Assign](imtconserverantiddos_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconserverantiddos_clear.md "Clear") | Clear an object. |
| [Priority](imtconserverantiddos_priority.md "Priority") | Get and set the allowed types of connection to the Access Server. |
| [AccessMask](imtconserverantiddos_accessmask.md "AccessMask") | Get the allowed types of connection to the Anti-DDoS Server. |
| [PointsAdd](imtconserverantiddos_pointsadd.md "PointsAdd") | Add a public access point of the Anti DDoS protection provider. |
| [PointsUpdate](imtconserverantiddos_pointsupdate.md "PointsUpdate") | Edit the public access point of the Anti DDoS protection provider. |
| [PointsShift](imtconserverantiddos_pointsshift.md "PointsShift") | Move a public access point of the Anti DDoS protection provider in the list. |
| [PointsDelete](imtconserverantiddos_pointsdelete.md "PointsDelete") | Delete a public access point of the Anti DDoS protection provider with the specified index. |
| [PointsClear](imtconserverantiddos_pointsclear.md "PointsClear") | Clear the list of access points of the Anti DDoS protection provider. |
| [PointsTotal](imtconserverantiddos_pointstotal.md "PointsTotal") | Get the number of access points of the Anti DDoS protection provider. |
| [PointsNext](imtconserverantiddos_pointsnext.md "PointsNext") | Get a public access point of the Anti DDoS protection provider with the specified index. |
| [ServersAdd](imtconserverantiddos_serversadd.md "ServersAdd") | Add a trade server, the connection to which will be implemented through this Anti DDoS server. |
| [ServersUpdate](imtconserverantiddos_serversupdate.md "ServersUpdate") | Edit a trade server, the connection to which will be implemented through this Anti DDoS server. |
| [ServersShift](imtconserverantiddos_serversshift.md "ServersShift") | Move a trade server, the connection to which is implemented through this Anti DDoS server, in the list. |
| [ServersDelete](imtconserverantiddos_serversdelete.md "ServersDelete") | Delete from the list a trade server, the connection to which is implemented through this Anti DDoS server. |
| [ServersClear](imtconserverantiddos_serversclear.md "ServersClear") | Clear the list of trade servers, the connection to which is implemented through this Anti DDoS server. |
| [ServersTotal](imtconserverantiddos_serverstotal.md "ServersTotal") | Get the number of trade servers, the connection to which is implemented through this Anti DDoS server. |
| [ServersNext](imtconserverantiddos_serversnext.md "ServersNext") | Get a trade server, the connection to which is implemented through this Anti DDoS server, by the index. |
| [SourcesAdd](imtconserverantiddos_sourcesadd.md "SourcesAdd") | Add a range of IP addresses of Anti DDoS provider's proxy servers. |
| [SourcesUpdate](imtconserverantiddos_sourcesupdate.md "SourcesUpdate") | Update the range of IP addresses of Anti DDoS provider's proxy servers. |
| [SourcesDelete](imtconserverantiddos_sourcesdelete.md "SourcesDelete") | Delete the range of IP addresses of Anti DDoS provider's proxy servers. |
| [SourcesShift](imtconserverantiddos_sourcesshift.md "SourcesShift") | Change the position of the range of IP addresses of Anti DDoS provider's proxy servers in the list. |
| [SourcesTotal](imtconserverantiddos_sourcestotal.md "SourcesTotal") | Get the number of ranges of IP addresses of Anti DDoS provider's proxy servers. |
| [SourcesNext](imtconserverantiddos_sourcesnext.md "SourcesNext") | Get the range of IP addresses of Anti DDoS provider's proxy servers at the specified index. |

The IMTConServerAntiDDoS class contains the following methods:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnAccessMask](imtconserverantiddos_enum.md "Enumerations") | Get and set allowed types of connection. |
| [EnServerPriority](imtconserverantiddos_enum.md "Enumerations") | Get and set the basic priority of the Anti DDoS server. |