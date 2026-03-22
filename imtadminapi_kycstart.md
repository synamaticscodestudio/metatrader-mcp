# KYCStart (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCStart | [](imtadminapi_kycget.md "KYCGet") [](imtadminapi_config_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCStart
Run a KYC check for the specified client.
C++
MTAPIRES IMTAdminAPI::KYCStart( const UINT64 client_id // Client id )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCStart( ulong client_id // Client id )  
---  
Parameters
client_id
[in] The identifier of the client for whom the check should be run. The client ID is equal to the [IMTClient::RecordID](imtclient_recordid.md "RecordID") value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The KYC provider through which the check will be performed, is selected based on the client's country and group. For further information, please see [MetaTrader 5 Administrator Help](https://support.metaquotes.net/ru/docs/mt5/platform/administration/integration/integration_kyc#best_provider).