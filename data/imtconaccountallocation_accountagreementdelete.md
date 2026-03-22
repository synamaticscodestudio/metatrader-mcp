# AccountAgreementDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ AccountAgreementDelete | [](imtconaccountallocation_accountagreementupdate.md "AccountAgreementUpdate") [](imtconaccountallocation_accountagreementclear.md "AccountAgreementClear") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAgreementDelete
Remove an agreement from the account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAgreementDelete( const UINT pos // Agreement position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAgreementDelete( uint pos // Agreement position )  
---  
Parameters
pos
[in] The position of the agreement in the list, starting from 0.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.