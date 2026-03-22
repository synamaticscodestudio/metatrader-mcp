# Mail Servers (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Mail Servers | [](imtserverapi_reportmoduleget.md "ReportModuleGet") [](imtserverapi_emailcreate.md "EmailCreate") |
| --- | --- | --- |
| --- | --- |

Integration with mail services
The MetaTrader 5 platform features the built-in email service. The service is used to send trading reports to traders, as well as for the confirmation of email addresses specified during account opening via client terminals. For more details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration).
The functions described in this section enable users to manage mail server configurations, as well as to subscribe and to unsubscribe from events related to configuration changes.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [EmailCreate](imtserverapi_emailcreate.md "EmailCreate") | Create a mail server configuration object. |
| [EmailSubscribe](imtserverapi_emailsubscribe.md "EmailSubscribe") | Subscribe to events and hooks related to mail server configurations. |
| [EmailUnsubscribe](imtserverapi_emailunsubscribe.md "EmailUnsubscribe") | Unsubscribe from events and hooks related to mail server configurations. |
| [EmailAdd](imtserverapi_emailadd.md "EmailAdd") | Add or update a mail server configuration. |
| [EmailDelete](imtserverapi_emaildelete.md "EmailDelete") | Delete a mail server configuration by the name or index. |
| [EmailShift](imtserverapi_emailshift.md "EmailShift") | Change the position of a mail server configuration in the list. |
| [EmailTotal](imtserverapi_emailtotal.md "EmailTotal") | Get the total number of mail server configurations available in the platform. |
| [EmailNext](imtserverapi_emailnext.md "EmailNext") | Get a mail server configuration by index. |
| [EmailGet](imtserverapi_emailget.md "EmailGet") | Get a mail server configuration by name. |
| [EmailSend](imtserverapi_emailsend.md "EmailSend") | Send an email to a selected address. |