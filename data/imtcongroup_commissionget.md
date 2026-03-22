# CommissionGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CommissionGet | [](imtcongroup_commissionnext.md "CommissionNext") [](imtcongroup_symboladd.md "SymbolAdd") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CommissionGet
Gets a commission setting with the specified name.
C++
MTAPIRES IMTConGroup::CommissionGet( LPCWSTR name, // Commission name IMTConCommission* commission // An object of commission setting ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CommissionGet( string name, // Commission name CIMTConCommission commission // An object of commission setting )  
---  
Python (Manager API)
MTConGroup.CommissionGet( name # Commission name )  
---  
MTConGroup.CommissionGet()  
---  
Parameters
name
[in] The name of a commission configuration.
commission
[out] An object of commission setting. The commission object must first be created using the [IMTAdminAPI::GroupCommissionCreate](imtadminapi_groupcommissioncreate.md "GroupCommissionCreate") or [IMTManagerAPI::GroupCommissionCreate](imtmanagerapi_groupcommissioncreate.md "GroupCommissionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of a commission with a specified name to the commission object.
The [IMTConCommission::Name](imtconcommission_name.md "Name") value is used as the parameter name..