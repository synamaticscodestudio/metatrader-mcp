# GroupTierCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupTierCreate | [](imtserverapi_groupcommissioncreate.md "GroupCommissionCreate") [](imtserverapi_groupsubscribe.md "GroupSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupTierCreate
Create an object of commission range configuration for a group.
IMTConCommTier* IMTServerAPI::GroupTierCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommTier](imtconcommtier.md "IMTConCommTier") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommTier::Release](imtconcommtier_release.md "Release") method of this object.