# Next (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Next | [](imtconparamarray_total.md "Total") [](imtconparamarray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Next
Gets an object of a parameter at the specified position.
C++
IMTDaily* IMTConParamArray::Next( const UINT index // The position of a parameter ) const  
---  
.NET (Gateway/Manager API)
CIMTDaily CIMTConParamArray.Next( uint index // The position of a parameter )  
---  
Parameters
index
[in] The position of a parameter in the array, starting with 0.
Return Value
If successful, it returns a pointer to the object of a parameter at the specified position in the array. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Once the returned object is deleted (by calling [IMTConParamArray::Release](imtconparamarray_release.md "Release")), the pointer stored within the array object becomes invalid, and its call (including the case of array object deletion) causes the crash of the plugin and the server.