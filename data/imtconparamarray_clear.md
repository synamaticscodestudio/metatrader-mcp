# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Clear | [](imtconparamarray_assign.md "Assign") [](imtconparamarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Clear
Clear an object.
C++
MTAPIRES IMTConParamArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.