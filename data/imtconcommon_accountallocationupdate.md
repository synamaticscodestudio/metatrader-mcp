# AccountAllocationUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountAllocationUpdate | [](imtconcommon_accountallocationadd.md "AccountAllocationAdd") [](imtconcommon_accountallocationdelete.md "AccountAllocationDelete") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAllocationUpdate
Edit an account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAllocationUpdate( const UINT pos, // Configuration position const IMTConAccountAgreement* cfg // Configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAllocationUpdate( uint pos, // Configuration position CIMTConAccountAgreement  cfg // Configuration object )  
---  
Parameters
pos
[in] The position of the configuration in the list, starting from 0.
cfg
[in] Account allocation configuration object [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.