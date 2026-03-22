# AccountAgreementUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ AccountAgreementUpdate | [](imtconaccountallocation_accountagreementadd.md "AccountAgreementAdd") [](imtconaccountallocation_accountagreementdelete.md "AccountAgreementDelete") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAgreementUpdate
Edit an agreement in the account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAgreementUpdate( const UINT pos, // Agreement position const IMTConAccountAgreement* cfg // Agreement configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAgreementUpdate( uint pos, // Agreement position CIMTConAccountAgreement  cfg // Agreement configuration object )  
---  
Parameters
pos
[in] The position of the agreement in the list, starting from 0.
cfg
[in] Agreement configuration object [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.