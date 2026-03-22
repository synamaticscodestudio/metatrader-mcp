# GroupCommissionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupCommissionCreate | [](imtmanagerapi_groupsymbolcreate.md "GroupSymbolCreate") [](imtmanagerapi_grouptiercreate.md "GroupTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupCommissionCreate
Create an object of commission configuration for a group.
C++
IMTConCommission* IMTManagerAPI::GroupCommissionCreate()  
---  
.NET
CIMTConCommission CIMTManagerAPI.GroupCommissionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommission](imtconcommission.md "IMTConCommission") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommission::Release](imtconcommission_release.md "Release") method of this object.