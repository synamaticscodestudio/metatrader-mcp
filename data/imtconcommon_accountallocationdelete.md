# AccountAllocationDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountAllocationDelete | [](imtconcommon_accountallocationupdate.md "AccountAllocationUpdate") [](imtconcommon_accountallocationclear.md "AccountAllocationClear") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAllocationDelete
Delete an account allocation configuration.
C++
MTAPIRES IMTConAccountAllocation::AccountAllocationDelete( const UINT pos // Configuration position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAllocationDelete( uint pos // Configuration position )  
---  
Parameters
pos
[in] The position of the configuration in the list, starting from 0.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.