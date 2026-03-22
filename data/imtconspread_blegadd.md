# BLegAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ BLegAdd | [](imtconspread_alegnext.md "ALegNext") [](imtconspread_blegupdate.md "BLegUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::BLegAdd
Add configuration of spread B leg.
C++
MTAPIRES IMTConSpread::BLegAdd( IMTConSpreadLeg* leg // Spread leg object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.BLegAdd( CIMTConSpreadLeg leg // Spread leg object )  
---  
Python (Manager API)
MTConSpread.BLegAdd( leg # Spread leg object )  
---  
Parameters
leg
[in] [Spread legs](imtconspreadleg.md "IMTConSpreadLeg") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The leg type is not connected with some definite position direction (buy or sell). Note that client's positions at all leg's symbols should be either long or short.