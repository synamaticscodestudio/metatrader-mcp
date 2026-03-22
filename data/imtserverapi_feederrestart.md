# FeederRestart (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederRestart | [](imtserverapi_feedermoduleget.md "FeederModuleGet") [](serverapi_config_time.md "Time") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederRestart
Restart data feeds.
MTAPIRES IMTServerAPI::FeederRestart()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The execution of this command restarts all data feeds.