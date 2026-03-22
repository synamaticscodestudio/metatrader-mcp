# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCGroup ](imtconkycgroup.md "IMTConKYCGroup")/ Clear | [](imtconkycgroup_assign.md "Assign") [](imtconkycgroup_group.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTConKYCGroup::Clear
Clear an object.
C++
MTAPIRES IMTConKYCGroup::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYCGroup.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
This method cleans all fields ​​and removes embedded objects.