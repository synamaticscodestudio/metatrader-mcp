# ManagerAccessCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerAccessCreate | [](imtadminapi_managercreate.md "ManagerCreate") [](imtadminapi_managerreportcreate.md "ManagerReportCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerAccessCreate
Create an object of configuration of an access list by IP addresses for a manager.
C++
IMTConManagerAccess* IMTAdminAPI::ManagerAccessCreate()  
---  
.NET
CIMTConManagerAccess CIMTAdminAPI.ManagerAccessCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConManagerAccess](imtconmanageraccess.md "IMTConManagerAccess") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConManagerAccess::Release](imtconmanageraccess_release.md "Release") method of this object.