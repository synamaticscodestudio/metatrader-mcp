# AccessNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ AccessNext | [](imtconmanager_accesstotal.md "AccessTotal") [](imtconmanager_reportadd.md "ReportAdd") |
| --- | --- | --- |
| --- | --- |

IMTConManager::AccessNext
Get a range of IP addresses, from which a manager is allowed to connect to the platform, based on its position in the list.
C++
MTAPIRES IMTConManager::AccessNext( const UINT pos, // Position of the range IMTConManagerAccess* access // An object of the range of addresses )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.AccessNext( uint pos, // Position of the range CIMTConManagerAccess access // An object of the range of addresses )  
---  
Python (Manager API)
MTConManager.AccessNext( pos # Position of the range )  
---  
MTConManager.AccessGet()  
---  
Parameters
pos
[in] Position of a range of addresses in the list, starting with 0.
access
[out] An object of the range of addresses. The access object must be first created using the [IMTAdminAPI::ManagerAccessCreate](imtadminapi_manageraccesscreate.md "ManagerAccessCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.