# ManagerAccessCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Managers ](imtmanagerapi_config_manager.md "Managers")/ ManagerAccessCreate | [](imtmanagerapi_managercreate.md "ManagerCreate") [](imtmanagerapi_managerreportcreate.md "ManagerReportCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ManagerAccessCreate
Create an object of access list configuration by IP addresses for a manager.
C++
IMTConManagerAccess* IMTManagerAPI::ManagerAccessCreate()  
---  
.NET
CIMTConManagerAccess CIMTManagerAPI.ManagerAccessCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConManagerAccess](imtconmanageraccess.md "IMTConManagerAccess") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConManagerAccess::Release](imtconmanageraccess_release.md "Release") method of this object.