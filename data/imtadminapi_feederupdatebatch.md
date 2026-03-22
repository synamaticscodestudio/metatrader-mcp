# FeederUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederUpdateBatch | [](imtadminapi_feederupdate.md "FeederUpdate") [](imtadminapi_feederdelete.md "FeederDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederUpdateBatch
Add and edit multiple data feed configurations.
C++
MTAPIRES IMTAdminAPI::FeederUpdateBatch( IMTConFeeder**  configs, // An array of configurations const UINT config_total, // The number of configurations in the array MTAPIRES* results // An array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederUpdateBatch( CIMTConFeeder[] configs, // An array of configurations MTRetCode[] results // An array of results )  
---  
Python
AdminAPI.FeederUpdateBatch( feeders # An array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/update.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of applying of each configuration change on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful sending of changes to a server; results of applying the changes are passed in the 'results' parameter.
Further Note
A configuration can only be added or updated from the applications that run on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_common.md "Common errors") is returned.
Before adding an entry, its correctness is checked. If an entry is incorrect, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this entry.