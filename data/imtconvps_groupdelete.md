# GroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ GroupDelete | [](imtconvps_groupupdate.md "GroupUpdate") [](imtconvps_groupclear.md "GroupClear") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::GroupDelete
Remove a group of accounts from the list of groups in which the Sponsored VPS is allowed.
C++
MTAPIRES IMTConVPS::GroupDelete( const UINT pos // Group position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.GroupDelete( uint pos // Group position )  
---  
Python
MTConVPS.GroupDelete( pos # Group position )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used.