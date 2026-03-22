# GroupClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ GroupClear | [](imtconvps_groupdelete.md "GroupDelete") [](imtconvps_groupshift.md "GroupShift") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::GroupClear
Clear the list of groups in which the Sponsored VPS is allowed.
C++
MTAPIRES IMTConVPS::GroupClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.GroupClear()  
---  
Python
IMTConVPS.GroupClear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete and is no longer used.