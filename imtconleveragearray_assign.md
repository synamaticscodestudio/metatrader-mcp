# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Assign | [](imtconleveragearray_release.md "Release") [](imtconleveragearray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConLeverageArray::Assign( const IMTConLeverageArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.Assign( CIMTConLeverageArray array  // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.