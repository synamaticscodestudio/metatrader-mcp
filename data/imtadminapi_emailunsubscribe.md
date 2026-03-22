# EmailUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Mail Servers ](imtadminapi_config_email.md "Mail Servers")/ EmailUnsubscribe | [](imtadminapi_emailsubscribe.md "EmailSubscribe") [](imtadminapi_emailupdate.md "EmailUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::EmailUnsubscribe
Unsubscribe from events and hooks related to mail server configurations.
C++
MTAPIRES IMTAdminAPI::EmailUnsubscribe( IMTConEmailSink* sink // A pointer to the IMTConEmailSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.EmailUnsubscribe( CIMTConEmailSink sink // The CIMTConEmailSink object )  
---  
Python
AdminAPI.EmailUnsubscribe( sink # IMTConEmailSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConEmailSink](imtconemailsink.md "IMTConEmailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::EmailSubscribe](imtserverapi_emailsubscribe.md "EmailSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.