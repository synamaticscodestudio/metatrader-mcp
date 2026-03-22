# Shift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Shift | [](imtconparamarray_updatecopy.md "UpdateCopy") [](imtconparamarray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Shift
Changes the position of a parameter in an array.
C++
MTAPIRES IMTConParamArray::Shift( const UINT pos, // Position of the parameter const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.Shift( uint pos, // Position of the parameter int shift // Shift )  
---  
Parameters
pos
[in] The position of a parameter in the array, starting with 0.
shift
[in] Shift of a parameter relative to its current position. A negative value means the shift to the beginning of an array, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.