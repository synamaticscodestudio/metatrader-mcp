# EmailGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailGet | [](imtserverapi_emailnext.md "EmailNext") [](imtserverapi_emailsend.md "EmailSend") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailGet
Get a mail server configuration by name.
MTAPIRES IMTServerAPI::EmailGet( LPCWSTR name, // Configuration name IMTConEmail* email // Mail server configuration object )  
---  
Parameters
name
[in] The name of the configuration.
email
[out] Mail server configuration object. The 'email' object must be previously created using the [IMTServerAPI::EmailCreate](imtserverapi_emailcreate.md "EmailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConEmail::Name](imtconemail_name.md "Name") value is used for the name.