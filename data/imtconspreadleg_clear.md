# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ Clear | [](imtconspreadleg_assign.md "Assign") [](imtconspreadleg_mode.md "Mode") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadLeg::Clear
Clear an object.
C++
MTAPIRES IMTConSpreadLeg::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpreadLeg.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.