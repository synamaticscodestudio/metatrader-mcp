# AccountAllocationNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountAllocationNext | [](imtconcommon_accountallocationtotal.md "AccountAllocationTotal") [](imtconaccountallocation.md "IMTConAccountAllocation") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::AccountAllocationNext
Get the account allocation configuration by index.
C++
MTAPIRES IMTConAccountAllocation::AccountAllocationNext( const UINT pos, // Configuration position IMTConAccountAllocation* cfg // Configuration object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.AccountAllocationNext( uint pos, // Configuration position CIMTConAccountAllocation cfg // Configuration object )  
---  
Parameters
pos
[in] The position of the configuration in the list, starting from 0.
cfg
[out] Account allocation configuration object [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation"). The object must first be created using the [IMTServerAPI::CommonCreateAllocation](imtserverapi_commoncreateallocation.md "CommonCreateAllocation"), [IMTReportAPI::CommonCreateAllocation](imtreportapi_commoncreateallocation.md "CommonCreateAllocation") or [IMTAdminAPI::CommonCreateAllocation](imtadminapi_commoncreateallocation.md "CommonCreateAllocation") method.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method copies the parameters of the configuration with the specified index into the 'cfg' object.