# AccountAgreementAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ AccountAgreementAdd | [](imtconaccountallocation_confirmationemail.md "ConfirmationEmail") [](imtconaccountallocation_accountagreementupdate.md "AccountAgreementUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAgreementAdd
Add an agreement to the account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAgreementAdd( IMTConAccountAgreement* cfg // Agreement configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAgreementAdd( CIMTConAccountAgreement cfg // Agreement configuration object )  
---  
Parameters
cfg
[in] Agreement configuration object [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.