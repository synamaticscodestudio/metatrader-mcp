# ManagerAccessCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Managers ](imtreportapi_config_manager.md "Managers")/ ManagerAccessCreate | [](imtreportapi_managercreate.md "ManagerCreate") [](imtreportapi_managerreportcreate.md "ManagerReportCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ManagerAccessCreate
Create an object of configuration of an access list by IP addresses for a manager.
IMTConManagerAccess* IMTReportAPI::ManagerAccessCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConManagerAccess](imtconmanageraccess.md "IMTConManagerAccess") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConManagerAccess::Release](imtconmanageraccess_release.md "Release") method of this object.