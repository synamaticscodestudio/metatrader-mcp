# KYCAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCAdd | [](imtserverapi_kycunsubscribe.md "KYCUnsubscribe") [](imtserverapi_kycdelete.md "KYCDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCAdd
Add or update a KYC provider configuration.
MTAPIRES IMTServerAPI::KYCAdd( IMTConKYC* config // KYC provider configuration object )  
---  
Parameters
config
[in] KYC provider configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the record exists. If the record already exists, it is updated; otherwise, a new entry is added. A key field for comparison is the configuration name [IMTConKYC::Name()](imtconkyc_name.md "Name"). If you try to add a completely identical record, no changes are made, and therefore the [IMTConKYCSink::OnKYCUpdate](imtconkycsink_onkycupdate.md "OnKYCUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding a record, its correctness is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.