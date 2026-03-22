# PointsClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ PointsClear | [](imtconserver_pointsdelete.md "PointsDelete") [](imtconserver_pointstotal.md "PointsTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServer::PointsClear
Clear the list of access points.
C++
MTAPIRES IMTConServer::PointsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.PointsClear()  
---  
Python (Manager API)
MTConServer.PointsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of server access points.