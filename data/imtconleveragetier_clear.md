# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageTier ](imtconleveragetier.md "IMTConLeverageTier")/ Clear | [](imtconleveragetier_assign.md "Assign") [](imtconleveragetier_rangefrom.md "RangeFrom") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageTier::Clear
Clear an object.
C++
MTAPIRES IMTConLeverageTier::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageTier.Clear()  
---  
Python (Manager API)
bool MTConLeverageTier.Clear()  
---  
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.