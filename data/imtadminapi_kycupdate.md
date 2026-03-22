# KYCUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCUpdate | [](imtadminapi_kycunsubscribe.md "KYCUnsubscribe") [](imtadminapi_kycupdatebatch.md "KYCUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCUpdate
Add or update a KYC provider configuration.
C++
MTAPIRES IMTAdminAPI::KYCUpdate( IMTConKYC* config // KYC provider configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCUpdate( CIMTConKYC config // KYC provider configuration object )  
---  
Parameters
config
[in] KYC provider configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the record exists. If the record already exists, it is updated; otherwise, a new entry is added. A key field for comparison is the configuration name [IMTConKYC::Name()](imtconkyc_name.md "Name"). If you try to add a completely identical record, no changes are made, and therefore the [IMTConKYCSink::OnKYCUpdate](imtconkycsink_onkycupdate.md "OnKYCUpdate") notification method is not called.
A configuration can only be added or updated from the applications running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding a record, its correctness is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.