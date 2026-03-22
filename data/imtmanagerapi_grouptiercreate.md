# GroupTierCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupTierCreate | [](imtmanagerapi_groupcommissioncreate.md "GroupCommissionCreate") [](imtmanagerapi_groupsubscribe.md "GroupSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupTierCreate
Create an object of commission range configuration for a group.
C++
IMTConCommTier* IMTManagerAPI::GroupTierCreate()  
---  
.NET
CIMTConCommTier CIMTManagerAPI.GroupTierCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommTier](imtconcommtier.md "IMTConCommTier") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommTier::Release](imtconcommtier_release.md "Release") method of this object.