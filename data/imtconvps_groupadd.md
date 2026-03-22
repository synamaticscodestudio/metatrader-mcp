# GroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ GroupAdd | [](imtconvps_rulenext.md "RuleNext") [](imtconvps_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::GroupAdd
Add a group of accounts in which the Sponsored VPS is allowed.
C++
MTAPIRES IMTConVPS::GroupAdd( IMTConVPSGroup* group // Group object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.GroupAdd( CIMTConVPSGroup group // Group object )  
---  
Python
MTConVPS.GroupAdd( group # Group object )  
---  
Parameters
group
[in] Group object [IMTConVPSGroup](imtconvpsgroup.md "IMTConVPSGroup").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used.