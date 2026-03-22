# EmailGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Mail Servers ](imtadminapi_config_email.md "Mail Servers")/ EmailGet | [](imtadminapi_emailnext.md "EmailNext") [](imtadminapi_emailsend.md "EmailSend") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::EmailGet
Get a mail server configuration by name.
C++
MTAPIRES IMTAdminAPI::EmailGet( LPCWSTR name, // Configuration name IMTConEmail* email // Mail server configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.EmailGet( string name, // Configuration name CIMTConEmail email // Mail server configuration object )  
---  
Python
AdminAPI.EmailGet( name # Configuration name )  
---  
Parameters
name
[in] The name of the configuration.
email
[out] Mail server configuration object. The 'email' object must be previously created using the [IMTAdminAPI::EmailCreate](imtadminapi_emailcreate.md "EmailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConEmail::Name](imtconemail_name.md "Name") value is used for the name.