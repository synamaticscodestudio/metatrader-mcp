# EmailAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailAdd | [](imtserverapi_emailunsubscribe.md "EmailUnsubscribe") [](imtserverapi_emaildelete.md "EmailDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailAdd
Add or update a mail server configuration.
MTAPIRES IMTServerAPI::EmailAdd( IMTConEmail* config // Mail server configuration object )  
---  
Parameters
config
[in] Mail server configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the record already exists. If the record exists, it is updated, otherwise a new one is added. A key field for comparison is the configuration name [IMTConEmail::Name()](imtconemail_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConEmailSink::OnEmailUpdate](imtconemailsink_onemailupdate.md "OnEmailUpdate") notification method is not called.
A configuration can only be added or updated from the plugins running on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
The record correctness is checked before the configuration is added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.