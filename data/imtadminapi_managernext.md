# ManagerNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerNext | [](imtadminapi_managertotal.md "ManagerTotal") [](imtadminapi_managerget.md "ManagerGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerNext
Gets a manager configuration with the specified index.
C++
MTAPIRES IMTAdminAPI::ManagerNext( const UINT pos, // Position of the configuration IMTConManager* manager // An object of manager configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ManagerNext( uint pos, // Position of the configuration CIMTConManager manager // An object of manager configuration )  
---  
Python
AdminAPI.ManagerNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
manager
[out] An object of manager configuration. The manager object must be first created using the [IMTAdminAPI::ManagerCreate](imtadminapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a manager with a specified index to the manager object.