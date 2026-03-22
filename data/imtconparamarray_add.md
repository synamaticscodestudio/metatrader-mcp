# Add (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Add | [](imtconparamarray_clear.md "Clear") [](imtconparamarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Add
Adds an object of a parameter at the end of an array.
C++
MTAPIRES IMTConParamArray::Add( IMTConParam* param // An object of the parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.Add( CIMTConParam param // An object of the parameter )  
---  
Parameters
param
[in] Parameter object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the 'param' object is passed to the array object. Thus, when deleting an array object (call of [IMTConParamArray::Release](imtconparamarray_release.md "Release")), an earlier inserted object will be automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause crash of the application.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTConParamArray::Add
Adds an object of the array of parameters at the end of an array.
C++
MTAPIRES IMTConParamArray::Add( IMTConParamArray* array // Added array of parameters )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.Add( CIMTConParamArray array // Added array of parameters )  
---  
Parameters
array
[in] The object of the array of parameters.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The 'array' object is cleared (call of [IMTConParamArray::Total](imtconparamarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTConParamArray::Release](imtconparamarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will make the pointer stored within the array object invalid, and its call (including the case of array object deletion) will cause crash of the application. Use [IMTConParamArray::Delete](imtconparamarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.