# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Assign | [](imtcongrouparray_release.md "Release") [](imtcongrouparray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConGroupArray::Assign( const IMTConGroupArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.Assign( CIMTConGroupArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.