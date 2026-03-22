# BLegNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ BLegNext | [](imtconspread_blegtotal.md "BLegTotal") [](imtconspreadleg.md "IMTConSpreadLeg") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::BLegNext
Get spread B leg configuration by the index.
C++
MTAPIRES IMTConSpread::BLegNext( const UINT pos, // Configuration position IMTConSpreadLeg* leg // Spread leg object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.BLegNext( uint pos, // Configuration position CIMTConSpreadLeg leg // Spread leg object )  
---  
Python (Manager API)
MTConSpread.BLegNext( pos, # Configuration position leg # Spread leg object )  
---  
MTConSpread.BLegGet()  
---  
Parameters
pos
[in] Spread leg configuration position starting from 0.
leg
[out] Spread leg configuration object. The leg object should be first created using [IMTManagerAPI::SpreadLegCreate](imtmanagerapi_spreadlegcreate.md "SpreadLegCreate"), [IMTAdminAPI::SpreadLegCreate](imtadminapi_spreadcreate.md "SpreadCreate") or [IMTGatewayAPI::SpreadLegCreate](imtgatewayapi_spreadlegcreate.md "SpreadLegCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.