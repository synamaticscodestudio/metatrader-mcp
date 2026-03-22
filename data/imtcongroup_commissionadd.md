# CommissionAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CommissionAdd | [](imtcongroup_limitpositions.md "LimitPositions") [](imtcongroup_commissionupdate.md "CommissionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CommissionAdd
Add a commission setting.
C++
MTAPIRES IMTConGroup::CommissionAdd( IMTConCommission* commission // An object of commission setting )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CommissionAdd( CIMTConCommission commission // An object of commission setting )  
---  
Python (Manager API)
MTConGroup.CommissionAdd( commission # An object of commission setting )  
---  
Parameters
commission
[in] An object of commission setting.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.