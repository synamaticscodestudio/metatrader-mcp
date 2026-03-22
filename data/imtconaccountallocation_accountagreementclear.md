# AccountAgreementClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ AccountAgreementClear | [](imtconaccountallocation_accountagreementdelete.md "AccountAgreementDelete") [](imtconaccountallocation_accountagreementshift.md "AccountAgreementShift") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAgreementClear
Clear the list of agreements in the account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAgreementClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAgreementClear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears the entire list of agreements in the account allocation setting for the given group.