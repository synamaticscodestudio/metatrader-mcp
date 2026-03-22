# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Clear | [](imtcongrouparray_assign.md "Assign") [](imtcongrouparray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Clear
Clear an object.
C++
MTAPIRES IMTConGroupArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all field values ​and removes embedded objects.