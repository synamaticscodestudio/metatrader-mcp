# AccountAgreementShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ AccountAgreementShift | [](imtconaccountallocation_accountagreementclear.md "AccountAgreementClear") [](imtconaccountallocation_accountagreementtotal.md "AccountAgreementTotal") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAgreementShift
Move an agreement in the account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAgreementShift( const UINT pos, // Agreement position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAgreementShift( uint  pos, // Agreement position int shift // Shift )  
---  
Parameters
pos
[in] The position of the agreement in the list, starting from 0.
shift
[in] Shift of the agreement relative to its current position. A negative value means shift towards the top of the list, and a positive value shifts the item towards the end.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.