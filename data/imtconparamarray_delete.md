# Delete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Delete | [](imtconparamarray_addcopy.md "AddCopy") [](imtconparamarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Delete
Deletes an object of a parameter at the specified position.
C++
MTAPIRES IMTConParamArray::Delete( const UINT pos // Position of the parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.Delete( uint  pos // Position of the parameter )  
---  
Parameters
pos
[in] The position of a parameter in the array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTConParam::Release](imtconparam_release.md "Release") method.