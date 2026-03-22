# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Clear | [](imtconleveragearray_assign.md "Assign") [](imtconleveragearray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Clear
Clear an object.
C++
MTAPIRES IMTConLeverageArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.Clear()  
---  
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.