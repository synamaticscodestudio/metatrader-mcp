# UpdateCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ UpdateCopy | [](imtconparamarray_update.md "Update") [](imtconparamarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::UpdateCopy
Changes a parameter at the specified position of an array by copying the passed parameter object.
C++
MTAPIRES IMTConParamArray::UpdateCopy( const UINT  pos, // Position const IMTConParam* param // Parameter object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.UpdateCopy( uint  pos, // Position CIMTConParam param // Parameter object )  
---  
Parameters
pos
[in] The position of a parameter in the array, starting with 0.
param
[in] Parameter object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method copies the 'param' object to the parameter object at the specified position of an array.
Unlike the [IMTConParamaArray::Update](imtconparamarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the 'param' object, but is more resource-intensive, since an additional object is created.