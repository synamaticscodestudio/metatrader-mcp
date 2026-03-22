# Volume (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Volume | [](imtposition_pricetp.md "PriceTP") [](imtposition_volumeext.md "VolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Volume
Gets the volume of a trade position.
C++
UINT64 IMTPosition::Volume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTPosition.Volume()  
---  
Return Value
The volume of a position in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTPosition::VolumeExt](imtposition_volumeext.md "VolumeExt") method.
IMTPosition::Volume
Sets the volume of a trade position.
C++
MTAPIRES IMTPosition::Volume( const UINT64 volume // Position volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.Volume( ulong volume // Position volume )  
---  
Parameters
volume
[in] The volume of a position in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTPosition::VolumeExt](imtposition_volumeext.md "VolumeExt") method.