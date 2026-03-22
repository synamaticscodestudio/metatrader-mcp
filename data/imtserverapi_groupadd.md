# GroupAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupAdd | [](imtserverapi_groupunsubscribe.md "GroupUnsubscribe") [](imtserverapi_groupdelete.md "GroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupAdd
Adds or updates a group configuration.
MTAPIRES IMTServerAPI::GroupAdd( IMTConGroup* group // Group configuration object )  
---  
Parameters
group
[in] An object of group configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. A key field for comparison is the name of the group [IMTConGroup::Group()](imtcongroup_group.md "Group"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConGroupSink::OnGroupUpdate](imtcongroupsink_ongroupupdate.md "OnGroupUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
After adding a group, wait approximately 1000 ms before adding new accounts to it. This time is required for the platform to apply the configuration.