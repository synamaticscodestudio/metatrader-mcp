# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ Clear | [](imtconleveragerule_assign.md "Assign") [](imtconleveragerule_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::Clear
Clear an object.
C++
MTAPIRES IMTConLeverageRule::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.Clear()  
---  
Python (Manager API)
bool MTConLeverageRule.Clear()  
---  
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.