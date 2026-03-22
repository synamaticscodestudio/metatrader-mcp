# AccountAgreementNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ AccountAgreementNext | [](imtconaccountallocation_accountagreementtotal.md "AccountAgreementTotal") [](imtconaccountagreement.md "IMTConAccountAgreement") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAgreementNext
Get agreement by index.
C++
MTAPIRES IMTConAccountAllocation::AccountAgreementNext( const UINT pos, // Agreement position IMTConAccountAgreement* cfg // Agreement configuration object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAgreementNext( uint pos, // Agreement position CIMTConAccountAgreement cfg // Agreement configuration object )  
---  
Parameters
pos
[in] The position of the agreement in the list, starting from 0.
cfg
[out] Agreement configuration object [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement"). The object must first be created using the [IMTServerAPI::CommonCreateAgreement](imtserverapi_commoncreateagreement.md "CommonCreateAgreement"), [IMTReportAPI::CommonCreateAgreement](imtreportapi_commoncreateagreement.md "CommonCreateAgreement") or [IMTAdminAPI::CommonCreateAgreement](imtadminapi_commoncreateagreement.md "CommonCreateAgreement") method.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method copies the parameters of the agreement with the specified index into the 'cfg' object.