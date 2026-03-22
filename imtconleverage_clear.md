# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ Clear | [](imtconleverage_assign.md "Assign") [](imtconleverage_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::Clear
Clear an object.
C++
MTAPIRES IMTConLeverage::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.Clear()  
---  
Python (Manager API)
MTConLeverage.Clear()  
---  
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.