# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ Clear | [](imtconspread_assign.md "Assign") [](imtconspread_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::Clear
Clear an object.
C++
MTAPIRES IMTConSpread::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.