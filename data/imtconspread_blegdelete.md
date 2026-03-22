# BLegDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ BLegDelete | [](imtconspread_blegupdate.md "BLegUpdate") [](imtconspread_blegclear.md "BLegClear") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::BLegDelete
Delete spread A leg by the index.
C++
MTAPIRES IMTConSpread::BLegDelete( const UINT pos // Spread leg position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.BLegDelete( uint pos // Spread leg position )  
---  
Python (Manager API)
MTConSpread.BLegDelete( pos # Spread leg position )  
---  
Parameters
pos
[in] Spread leg position starting from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Several symbols can be configured for each leg (several spread leg configurations can be created).