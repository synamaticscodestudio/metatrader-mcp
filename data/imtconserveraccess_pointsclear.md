# PointsClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PointsClear | [](imtconserveraccess_pointsdelete.md "PointsDelete") [](imtconserveraccess_pointstotal.md "PointsTotal") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PointsClear
Clear the list of access points.
C++
MTAPIRES IMTConServerAccess::PointsClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.PointsClear()  
---  
Python (Manager API)
MTConServerAccess.PointsClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method clears the list of server access points.