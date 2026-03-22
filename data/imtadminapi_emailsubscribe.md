# EmailSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Mail Servers ](imtadminapi_config_email.md "Mail Servers")/ EmailSubscribe | [](imtadminapi_emailcreate.md "EmailCreate") [](imtadminapi_emailunsubscribe.md "EmailUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::EmailSubscribe
Subscribe to events and hooks related to mail server configurations.
C++
MTAPIRES IMTAdminAPI::EmailSubscribe( IMTConEmailSink* sink // A pointer to the IMTConEmailSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.EmailSubscribe( CIMTConEmailSink sink // The CIMTConEmailSink object )  
---  
Python
AdminAPI.EmailSubscribe( sink # IMTConEmailSink object )  
---  
Parameters
sink
[in] A pointer to the object which implements the [IMTConEmailSink](imtconemailsink.md "IMTConEmailSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConEmailSink](imtconemailsink.md "IMTConEmailSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
To receive [IMTConEmailSink::OnEmailSync](imtconemailsink_onemailsync.md "OnEmailSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::EmailUnsubscribe](imtserverapi_emailunsubscribe.md "EmailUnsubscribe") or until the plugin is deleted.