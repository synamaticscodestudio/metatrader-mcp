# FeederUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederUpdate | [](imtadminapi_feederrestart.md "FeederRestart") [](imtadminapi_feederupdatebatch.md "FeederUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederUpdate
Add and update a data feed configuration.
C++
MTAPIRES IMTAdminAPI::FeederUpdate( IMTConFeeder* feeder // The object of data feed configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederUpdate( CIMTConFeeder feeder // The object of data feed configuration )  
---  
Python
AdminAPI.FeederUpdate( feeder # The object of data feed configuration )  
---  
Parameters
feeder
[in] The object of data feed configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_common.md "Common errors") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.