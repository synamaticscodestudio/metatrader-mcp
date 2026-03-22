# AccountAllocationAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountAllocationAdd | [](imtconcommon_accountwithdrawalurl.md "AccountWithdrawalURL") [](imtconcommon_accountallocationupdate.md "AccountAllocationUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAllocationAdd
Add an account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAllocationAdd( IMTConAccountAllocation* cfg // Configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAllocationAdd( CIMTConAccountAllocation cfg // Configuration object )  
---  
Parameters
cfg
[in] Account allocation configuration object [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.