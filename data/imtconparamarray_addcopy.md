# AddCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ AddCopy | [](imtconparamarray_add.md "Add") [](imtconparamarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::AddCopy
Add a copy of an object of parameters at the end of an array.
C++
MTAPIRES IMTConParamArray::AddCopy( const IMTConParam* param // Added parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.AddCopy( CIMTConParam param // Added parameter )  
---  
Parameters
param
[in] Parameter object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'param' object and places it at the end of the array.
Unlike [IMTConParamArray::Add(IMTConParam* param)](imtconparamarray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'param' object, but is more resource-intensive, since an additional object is created.
IMTConParamArray::AddCopy
Adds copies of parameter objects into an array.
C++
MTAPIRES IMTConParamArray::AddCopy( const IMTConParamArray* array // The added array of parameters )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.AddCopy( CIMTConParamArray array // The added array of parameters )  
---  
Parameters
array
[in] The object of the array of parameters.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates copies of the objects of parameters belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTConParamArray::Add(IMTConParamArray* array)](imtconparamarray_add.md "Add"), calling this method does not change the source array object, but is more resource-intensive, since additional objects are created.