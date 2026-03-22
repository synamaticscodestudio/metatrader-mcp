# GroupCommissionCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupCommissionCreate | [](imtadminapi_groupsymbolcreate.md "GroupSymbolCreate") [](imtadminapi_grouptiercreate.md "GroupTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupCommissionCreate
Create an object of commission configuration for a group.
C++
IMTConCommission* IMTAdminAPI::GroupCommissionCreate()  
---  
.NET
CIMTConCommission CIMTAdminAPI.GroupCommissionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommission](imtconcommission.md "IMTConCommission") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommission::Release](imtconcommission_release.md "Release") method of this object.