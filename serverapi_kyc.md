# KYC (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ KYC | [](imtserverapi_vpsset.md "VPSSet") [](imtserverapi_kyccreate.md "KYCCreate") |
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
| [KYCCreate](imtserverapi_kyccreate.md "KYCCreate") | Create a KYC provider configuration object. |
| [KYCCountryCreate](imtserverapi_kyccountrycreate.md "KYCCountryCreate") | Create an object of a country for which the KYC provider will be used. |
| [KYCGroupCreate](imtserverapi_kycgroupcreate.md "KYCGroupCreate") | Create an object of an account group for which the KYC provider will be used. |
| [KYCSubscribe](imtserverapi_kycsubscribe.md "KYCSubscribe") | Subscribe to events and hooks associated with KYC provider configurations. |
| [KYCUnsubscribe](imtserverapi_kycunsubscribe.md "KYCUnsubscribe") | Unsubscribe from events and hooks associated with KYC provider configurations. |
| [KYCAdd](imtserverapi_kycadd.md "KYCAdd") | Add or update a KYC provider configuration. |
| [KYCDelete](imtserverapi_kycdelete.md "KYCDelete") | Delete a KYC provider configuration by name or index. |
| [KYCShift](imtserverapi_kycshift.md "KYCShift") | Change the position of a KYC provider configuration in the list. |
| [KYCTotal](imtserverapi_kyctotal.md "KYCTotal") | Get the total number of KYC provider configurations existing in the platform. |
| [KYCNext](imtserverapi_kycnext.md "KYCNext") | Get a KYC provider configuration by index. |
| [KYCGet](imtserverapi_kycget.md "KYCGet") | Get a KYC provider configuration by name. |
| [KYCStart](imtserverapi_kycstart.md "KYCStart") | Run a KYC check for the specified client. |