# IMTConClusterState (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network")/ IMTConClusterState | [](imtconserverantiddos_sourcesnext.md "SourcesNext") [](imtconclusterstate_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTConClusterState
The IMTConClusterState interface contains methods for controlling network connection between the trading platform components.
Use these methods to receive data on the connection state, network delays and data exchange speed between the current server ([IMTConServer::Id](imtconserver_id.md "Id")) and another selected server within the cluster. The selected cluster server is specified during the call of [IMTConServer::ClusterStateGet](imtconserver_clusterstateget.md "ClusterStateGet") or [IMTConServer::ClusterStateNext](imtconserver_clusterstatenext.md "ClusterStateNext") as an identifier or position in the list of components, respectively.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconclusterstate_release.md "Release") | Delete the current object. |
| [Assign](imtconclusterstate_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconclusterstate_clear.md "Clear") | Clear an object. |
| [Id](imtconclusterstate_id.md "Id") | Get the ID of the server, connection to which you want to analyze. |
| [Connected](imtconclusterstate_connected.md "Connected") | Get connection status with the selected server. |
| [ConnectedAddress](imtconclusterstate_connectedaddress.md "ConnectedAddress") | Get the address of the server, connection to which you want to analyze. |
| [ConnectedTime](imtconclusterstate_connectedtime.md "ConnectedTime") | Get the time of the last connection to the selected server. |
| [StatsDay](imtconclusterstate_statsday.md "StatsDay") | Get the day for which the network information is provided. |
| [StatsPing](imtconclusterstate_statsping.md "StatsPing") | Get the last measured value of the network delay (ping) to the selected server. |
| [StatsPingMin](imtconclusterstate_statspingmin.md "StatsPingMin") | Get the lowest value of the network delay (ping) to the selected server for the current day. |
| [StatsPingMax](imtconclusterstate_statspingmax.md "StatsPingMax") | Get the largest value of the network delay (ping) to the selected server for the current day. |
| [StatsSpeed](imtconclusterstate_statsspeed.md "StatsSpeed") | Get the last measured data transfer rate to the selected server. |
| [StatsSpeedMin](imtconclusterstate_statsspeedmin.md "StatsSpeedMin") | Get the lowest data transfer rate to the selected server for the current day. |
| [StatsSpeedMax](imtconclusterstate_statsspeedmax.md "StatsSpeedMax") | Get the largest data transfer rate to the selected server for the current day. |