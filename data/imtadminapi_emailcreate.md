# EmailCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Mail Servers ](imtadminapi_config_email.md "Mail Servers")/ EmailCreate | [](imtadminapi_config_email.md "Mail Servers") [](imtadminapi_emailsubscribe.md "EmailSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::EmailCreate
Create a mail server configuration object.
C++
IMTConEmail* IMTAdminAPI::EmailCreate()  
---  
.NET
CIMTConEmail CIMTAdminAPI.EmailCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTConEmail](imtconemail.md "IMTConEmail") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConEmail::Release](imtconemail_release.md "Release") method of this object.