# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ Clear | [](imtconparam_assign.md "Assign") [](imtconparam_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConParam::Clear
Clear an object.
C++
MTAPIRES IMTConParam::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.