# CommissionNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CommissionNext | [](imtcongroup_commissiontotal.md "CommissionTotal") [](imtcongroup_commissionget.md "CommissionGet") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CommissionNext
Get a commission setting by the index.
C++
MTAPIRES IMTConGroup::CommissionNext( const UINT pos, // Position of the commission IMTConCommission* commission // An object of commission setting ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CommissionNext( uint pos, // Position of the commission CIMTConCommission commission // An object of commission setting )  
---  
Python (Manager API)
MTConGroup.CommissionNext( pos # позиция комиссии )  
---  
Parameters
pos
[in] Position of a commission in the list, starting with 0.
commission
[out] An object of commission setting. The commission object must first be created using the [IMTAdminAPI::GroupCommissionCreate](imtadminapi_groupcommissioncreate.md "GroupCommissionCreate") or [IMTManagerAPI::GroupCommissionCreate](imtmanagerapi_groupcommissioncreate.md "GroupCommissionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of a commission with a specified index to the commission object.