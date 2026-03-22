# GroupTierCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupTierCreate | [](imtadminapi_groupcommissioncreate.md "GroupCommissionCreate") [](imtadminapi_groupsubscribe.md "GroupSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupTierCreate
Create an object of commission range configuration for a group.
C++
IMTConCommTier* IMTAdminAPI::GroupTierCreate()  
---  
.NET
CIMTConCommTier CIMTAdminAPI.GroupTierCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommTier](imtconcommtier.md "IMTConCommTier") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommTier::Release](imtconcommtier_release.md "Release") method of this object.