# ALegUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ ALegUpdate | [](imtconspread_alegadd.md "ALegAdd") [](imtconspread_alegdelete.md "ALegDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::ALegUpdate
Update spread A leg by the index.
C++
MTAPIRES IMTConSpread::ALegUpdate( const UINT pos, // Spread leg position IMTConSpreadLeg* leg // Spread leg object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.ALegUpdate( uint  pos, // Spread leg position CIMTConSpreadLeg leg // Spread leg object )  
---  
Python (Manager API)
MTConSpread.ALegUpdate( pos, # Spread leg position leg # Spread leg object )  
---  
MTConSpread.ALegSet( leg_list # A list of spread leg objects )  
---  
Parameters
pos
[in] Spread leg position in the list starting with 0.
leg
[in] [Spread legs](imtconspreadleg.md "IMTConSpreadLeg") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.