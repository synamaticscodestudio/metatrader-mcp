# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ Clear | [](imtcongroupsymbol_assign.md "Assign") [](imtcongroupsymbol_default.md "Default") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::Clear
Clear an object.
C++
MTAPIRES IMTConGroupSymbol::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.Clear()  
---  
Python (Manager API)
MTConGroupSymbol.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.