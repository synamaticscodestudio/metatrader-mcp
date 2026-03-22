# GroupUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ GroupUpdate | [](imtconvps_groupadd.md "GroupAdd") [](imtconvps_groupdelete.md "GroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::GroupUpdate
Change a group of accounts in which the Sponsored VPS is allowed.
C++
MTAPIRES IMTConVPS::GroupUpdate( const UINT pos, // Group position const IMTConVPSGroup* group // Group object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.GroupUpdate( uint pos, // Group position CIMTConVPSGroup group // Group object )  
---  
Python
MTConVPS.GroupUpdate( pos, # Group position group # Group object )  
---  
MTConVPS.GroupSet( group_list # List of groups )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
group
[in] Account group object [IMTConVPSGroup](imtconvpsgroup.md "IMTConVPSGroup").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used.