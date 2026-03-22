# GroupUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupUpdate | [](imtadminapi_groupunsubscribe.md "GroupUnsubscribe") [](imtadminapi_groupupdatebatch.md "GroupUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupUpdate
Adds or updates a group configuration.
C++
MTAPIRES IMTAdminAPI::GroupUpdate( IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupUpdate( CIMTConGroup group // Group configuration object )  
---  
Python
AdminAPI.GroupUpdate( group # Group configuration object )  
---  
Parameters
group
[in] An object of group configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
After adding a group, wait approximately 1000 ms before adding new accounts to it. This time is required for the platform to apply the configuration.