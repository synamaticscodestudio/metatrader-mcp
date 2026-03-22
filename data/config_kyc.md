# KYC (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ KYC | [](imtconvpssink_onvpssync.md "OnVPSSync") [](imtconkyc.md "IMTConKYC") |
| --- | --- | --- |
| --- | --- |

Integration with KYC providers
The trading platforms supports integrations with KYC providers for automated verification of clients' personal data and documents. This allows the automation of the account opening process:
  * The user requests an account from the terminal by filling our a simple form and uploading the relevant documents
  * The data is automatically verified through the KYC provider
  * A verification report is added to the client record, and the corresponding status is assigned to it
  * After a final check, the manager can move the account to the appropriate real group

For further information, please see [MetaTrader 5 Administrator Help](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_kyc).
The interfaces described in this section enable the management of KYC provider settings:
  * [IMTConKYC](imtconkyc.md "IMTConKYC") — methods for getting and editing KYC provider configurations.
  * [IMTConKYCCountry](imtconkyccountry.md "IMTConKYCCountry") — methods for getting and editing country settings in KYC providers.
  * [IMTConKYCGroup](imtconkycgroup.md "IMTConKYCGroup") — methods for getting and editing groups settings in KYC providers.
  * [IMTConKYCSink](imtconkycsink.md "IMTConKYCSink") — event handlers for changes in KYC provider configurations.
