# Detach (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Detach | [](imtconparamarray_delete.md "Delete") [](imtconparamarray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Detach
Detaches an object of a parameter from an array.
C++
IMTConParam* IMTConParamArray::Detach( const UINT pos // Position of the parameter )  
---  
.NET (Gateway/Manager API)
CIMTConParam CIMTConParamArray.Detach( uint pos // Position of the parameter )  
---  
Parameters
pos
[in] The position of a parameter in the array, starting with 0.
Return Value
Returns a pointer to the detached object of a parameter.
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, and the deleted object is not freed.