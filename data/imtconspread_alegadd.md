# ALegAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ ALegAdd | [](imtconspread_marginmaintenance.md "MarginMaintenance") [](imtconspread_alegupdate.md "ALegUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::ALegAdd
Add configuration of spread A leg.
C++
MTAPIRES IMTConSpread::ALegAdd( IMTConSpreadLeg* leg // Spread leg object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.ALegAdd( CIMTConSpreadLeg leg // Spread leg object )  
---  
Python (Manager API)
MTConSpread.ALegAdd( leg # Spread leg object )  
---  
Parameters
leg
[in] [Spread legs](imtconspreadleg.md "IMTConSpreadLeg") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The leg type is not connected with some definite position direction (buy or sell). Note that client's positions at all leg's symbols should be either long or short.