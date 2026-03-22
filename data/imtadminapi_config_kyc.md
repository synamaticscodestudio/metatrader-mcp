# KYC (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ KYC | [](imtadminapi_vpsset.md "VPSSet") [](imtadminapi_kyccreate.md "KYCCreate") |
| --- | --- | --- |
| --- | --- |

Integration with KYC providers
The trading platforms supports integrations with KYC providers for automated verification of clients' personal data and documents. This allows the automation of the account opening process:
  * The user requests an account from the terminal by filling our a simple form and uploading the relevant documents
  * The data is automatically verified through the KYC provider
  * A verification report is added to the client record, and the corresponding status is assigned to it
  * After a final check, the manager can move the account to the appropriate real group

For further information, please see [MetaTrader 5 Administrator Help](https://support.metaquotes.net/ru/docs/mt5/platform/administration/integration/integration_kyc).
The functions described in this section enable the management of KYC provider configurations, as well as the subscription to and unsubscribing from events related to configuration changes.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [KYCCreate](imtadminapi_kyccreate.md "KYCCreate") | Create a KYC provider configuration object. |
| [KYCCountryCreate](imtadminapi_kyccountrycreate.md "KYCCountryCreate") | Create an object of a country for which the KYC provider will be used. |
| [KYCGroupCreate](imtadminapi_kycgroupcreate.md "KYCGroupCreate") | Create an object of an account group for which the KYC provider will be used. |
| [KYCSubscribe](imtadminapi_kycsubscribe.md "KYCSubscribe") | Subscribe to events and hooks associated with KYC provider configurations. |
| [KYCUnsubscribe](imtadminapi_kycunsubscribe.md "KYCUnsubscribe") | Unsubscribe from events and hooks associated with KYC provider configurations. |
| [KYCUpdate](imtadminapi_kycupdate.md "KYCUpdate") | Add or update a KYC provider configuration. |
| [KYCUpdateBatch](imtadminapi_kycupdatebatch.md "KYCUpdateBatch") | Add or update a batch of KYC provider configurations. |
| [KYCDelete](imtadminapi_kycdelete.md "KYCDelete") | Delete a KYC provider configuration by name or index. |
| [KYCDeleteBatch](imtadminapi_kycdeletebatch.md "KYCDeleteBatch") | Delete a batch of KYC provider configurations. |
| [KYCShift](imtadminapi_kycshift.md "KYCShift") | Change the position of a KYC provider configuration in the list. |
| [KYCTotal](imtadminapi_kyctotal.md "KYCTotal") | Get the total number of KYC provider configurations existing in the platform. |
| [KYCNext](imtadminapi_kycnext.md "KYCNext") | Get a KYC provider configuration by index. |
| [KYCGet](imtadminapi_kycget.md "KYCGet") | Get a KYC provider configuration by name. |
| [KYCStart](imtadminapi_kycstart.md "KYCStart") | Run a KYC check for the specified client. |