# TierClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ TierClear | [](imtconcommission_tierdelete.md "TierDelete") [](imtconcommission_tiershift.md "TierShift") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::TierClear
Clear the list of commission ranges.
C++
MTAPIRES IMTConCommission::TierClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.TierClear()  
---  
Python (Manager API)
MTConCommission.TierClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of commission configuration ranges.