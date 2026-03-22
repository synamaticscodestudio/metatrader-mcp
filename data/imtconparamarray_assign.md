# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParamArray ](imtconparamarray.md "IMTConParamArray")/ Assign | [](imtconparamarray_release.md "Release") [](imtconparamarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConParamArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConParamArray::Assign( const IMTConParamArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParamArray.Assign( CIMTConParamArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.