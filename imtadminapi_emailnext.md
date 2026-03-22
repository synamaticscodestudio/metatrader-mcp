# EmailNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Mail Servers ](imtadminapi_config_email.md "Mail Servers")/ EmailNext | [](imtadminapi_emailtotal.md "EmailTotal") [](imtadminapi_emailget.md "EmailGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::EmailNext
Get a mail server configuration by index.
C++
MTAPIRES IMTAdminAPI::EmailNext( const UINT pos, // Configuration position IMTConEmail* email // Mail server configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.EmailNext( uint  pos, // Configuration position CIMTConEmail email // Email configuration object )  
---  
Python
AdminAPI.EmailNext( pos # Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
email
[out] Mail server configuration object. The 'email' object must be previously created using the [IMTAdminAPI::EmailCreate](imtadminapi_emailcreate.md "EmailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies mail server configuration data with the specified index to the 'email' object.