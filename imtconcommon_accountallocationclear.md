# AccountAllocationClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountAllocationClear | [](imtconcommon_accountallocationdelete.md "AccountAllocationDelete") [](imtconcommon_accountallocationshift.md "AccountAllocationShift") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAllocationClear
Clear the list of account allocation configurations.
C++
MTAPIRES IMTConAccountAllocation::AccountAllocationClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAllocationClear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method deletes all account allocation configurations.