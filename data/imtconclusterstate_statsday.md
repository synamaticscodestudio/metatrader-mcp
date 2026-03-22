# StatsDay (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConClusterState ](imtconclusterstate.md "IMTConClusterState")/ StatsDay | [](imtconclusterstate_connectedtime.md "ConnectedTime") [](imtconclusterstate_statsping.md "StatsPing") |
| --- | --- | --- |
| --- | --- |

IMTConClusterState::StatsDay
Get the day for which the network information is provided.
C++
INT64 IMTConClusterState::StatsDay() const  
---  
.NET (Gateway/Manager API)
long IMTConClusterState.StatsDay()  
---  
Return Value
The beginning of the day (00:00) for which the network information is provided. The date is specified in seconds since 01.01.1970.