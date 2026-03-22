# GroupCommissionCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupCommissionCreate | [](imtserverapi_groupsymbolcreate.md "GroupSymbolCreate") [](imtserverapi_grouptiercreate.md "GroupTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupCommissionCreate
Create an object of commission configuration for a group.
IMTConCommission* IMTServerAPI::GroupCommissionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommission](imtconcommission.md "IMTConCommission") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommission::Release](imtconcommission_release.md "Release") method of this object.