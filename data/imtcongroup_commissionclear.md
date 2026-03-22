# CommissionClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CommissionClear | [](imtcongroup_commissiondelete.md "CommissionDelete") [](imtcongroup_commissionshift.md "CommissionShift") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CommissionClear
Clear the list of commission settings.
C++
MTAPIRES IMTConGroup::CommissionClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CommissionClear()  
---  
Python (Manager API)
MTConGroup.CommissionClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears the entire list of group commission settings.