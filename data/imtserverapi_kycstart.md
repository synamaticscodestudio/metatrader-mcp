# KYCStart (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCStart | [](imtserverapi_kycget.md "KYCGet") [](serverapi_config_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCStart
Run a KYC check for the specified client.
MTAPIRES IMTServerAPI::KYCStart( const UINT64 client_id // Client id )  
---  
Parameters
client_id
[in] The identifier of the client for whom the check should be run. The client ID is equal to the [IMTClient::RecordID](imtclient_recordid.md "RecordID") value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The KYC provider through which the check will be performed, is selected based on the client's country and group. For further information, please see [MetaTrader 5 Administrator Help](https://support.metaquotes.net/ru/docs/mt5/platform/administration/integration/integration_kyc#best_provider).