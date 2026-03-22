# EmailNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailNext | [](imtserverapi_emailtotal.md "EmailTotal") [](imtserverapi_emailget.md "EmailGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailNext
Get a mail server configuration by index.
MTAPIRES IMTServerAPI::EmailNext( const UINT pos, // Configuration position IMTConEmail* email // Mail server configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
email
[out] Mail server configuration object. The 'email' object must be previously created using the [IMTServerAPI::EmailCreate](imtserverapi_emailcreate.md "EmailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies mail server configuration data with the specified index to the 'email' object.