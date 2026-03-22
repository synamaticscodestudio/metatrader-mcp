# FeederAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederAdd | [](imtserverapi_feederunsubscribe.md "FeederUnsubscribe") [](imtserverapi_feederdelete.md "FeederDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederAdd
Adds or updates a data feed configuration.
MTAPIRES IMTServerAPI::FeederAdd( IMTConFeeder* feeder // The object of data feed configuration )  
---  
Parameters
feeder
[in] The object of data feed configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. A key field for comparison is the name of the configuration [IMTConFeeder:: Name ()](imtconfeeder_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConFeederSink::OnFeederUpdate](imtconfeedersink_onfeederupdate.md "OnFeederUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_common.md "Common errors") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.