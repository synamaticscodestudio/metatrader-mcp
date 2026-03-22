# BLegShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ BLegShift | [](imtconspread_blegclear.md "BLegClear") [](imtconspread_blegtotal.md "BLegTotal") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::BLegShift
Shift spread B leg configuration.
C++
MTAPIRES IMTConSpread::BLegShift( const UINT pos, // Spread leg position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.BLegShift( uint pos, // Spread leg position int shift // Shift )  
---  
Python (Manager API)
MTConSpread.BLegShift( pos, # Spread leg position shift # Shift )  
---  
Parameters
pos
[in] Spread leg configuration position starting from 0.
shift
[in] Shift of a leg relative to its current position in minutes. A negative value means the shift to an earlier time, a positive value - to a later time.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.