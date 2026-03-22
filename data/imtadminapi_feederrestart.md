# FeederRestart (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederRestart | [](imtadminapi_feederunsubscribe.md "FeederUnsubscribe") [](imtadminapi_feederupdate.md "FeederUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederRestart
Restart data feeds.
C++
MTAPIRES IMTAdminAPI::FeederRestart()  
---  
.NET
MTRetCode CIMTAdminAPI.FeederRestart()  
---  
Python
AdminAPI.FeederRestart()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This command restarts all data feeds.