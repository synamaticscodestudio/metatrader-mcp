# Mail Servers (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ Mail Servers | [](imtadminapi_reportmoduleget.md "ReportModuleGet") [](imtadminapi_emailcreate.md "EmailCreate") |
| --- | --- | --- |
| --- | --- |

Integration with mail services
The MetaTrader 5 platform features the built-in email service. The service is used to send trading reports to traders, as well as for the confirmation of email addresses specified during account opening via client terminals. For more details, please read the [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration).
The functions described in this section enable users to manage mail server configurations, as well as to subscribe and to unsubscribe from events related to configuration changes.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [EmailCreate](imtadminapi_emailcreate.md "EmailCreate") | Create a mail server configuration object. |
| [EmailSubscribe](imtadminapi_emailsubscribe.md "EmailSubscribe") | Subscribe to events and hooks related to mail server configurations. |
| [EmailUnsubscribe](imtadminapi_emailunsubscribe.md "EmailUnsubscribe") | Unsubscribe from events and hooks related to mail server configurations. |
| [EmailUpdate](imtadminapi_emailupdate.md "EmailUpdate") | Add or update a mail server configuration. |
| [EmailUpdateBatch](imtadminapi_emailupdatebatch.md "EmailUpdateBatch") | Add or edit multiple mail server configurations. |
| [EmailDelete](imtadminapi_emaildelete.md "EmailDelete") | Delete a mail server configuration by the name or index. |
| [EmailDeleteBatch](imtadminapi_emaildeletebatch.md "EmailDeleteBatch") | Delete multiple mail server configurations. |
| [EmailShift](imtadminapi_emailshift.md "EmailShift") | Change the position of a mail server configuration in the list. |
| [EmailTotal](imtadminapi_emailtotal.md "EmailTotal") | Get the total number of mail server configurations available in the platform. |
| [EmailNext](imtadminapi_emailnext.md "EmailNext") | Get a mail server configuration by index. |
| [EmailGet](imtadminapi_emailget.md "EmailGet") | Get a mail server configuration by name. |
| [EmailSend](imtadminapi_emailsend.md "EmailSend") | Send an email to a selected address. |