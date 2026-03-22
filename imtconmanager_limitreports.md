# LimitReports (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ LimitReports | [](imtconmanager_limitlogs.md "LimitLogs") [](imtconmanager_right.md "Right") |
| --- | --- | --- |
| --- | --- |

IMTConManager::LimitReports
Get the time period of reports available to a manager.
C++
UINT IMTConManager::LimitReports() const  
---  
.NET (Gateway/Manager API)
EnManagerLimit CIMTConManager.LimitReports()  
---  
Python (Manager API)
MTConManager.LimitReports  
---  
Return Value
A value of the [IMTConManager::EnManagerLimit](imtconmanager_enum.htm#enmanagerlimit) enumeration.
IMTConManager::LimitReports
Set the time period of reports available to a manager.
C++
MTAPIRES IMTConManager::LimitReports( const UINT limit // The limit of reports )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.LimitReports( EnManagerLimit limit // The limit of reports )  
---  
Python (Manager API)
MTConManager.LimitReports  
---  
Parameters
limit
[in] The period for which a manager can access reports, is passed using the [IMTConManager::EnManagerLimit](imtconmanager_enum.htm#enmanagerlimit) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.