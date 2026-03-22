# ManagerNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerNext | [](imtserverapi_managertotal.md "ManagerTotal") [](imtserverapi_managerget.md "ManagerGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerNext
Gets a manager configuration with the specified index.
MTAPIRES IMTServerAPI::ManagerNext( const UINT pos, // Position of the configuration IMTConManager* manager // An object of manager configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
manager
[out] An object of manager configuration. The manager object must be first created using the [IMTServerAPI::ManagerCreate](imtserverapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a manager with a specified index to the manager object.