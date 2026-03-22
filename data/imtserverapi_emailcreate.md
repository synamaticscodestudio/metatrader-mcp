# EmailCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailCreate | [](serverapi_config_email.md "Mail Servers") [](imtserverapi_emailsubscribe.md "EmailSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailCreate
Create a mail server configuration object.
IMTConEmail* IMTServerAPI::EmailCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTConEmail](imtconemail.md "IMTConEmail") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConEmail::Release](imtconemail_release.md "Release") method of this object.