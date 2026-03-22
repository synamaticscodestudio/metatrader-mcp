# VolumeClosed (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ VolumeClosed | [](imtdeal_volumeext.md "VolumeExt") [](imtdeal_volumeclosedext.md "VolumeClosedExt") |
| --- | --- | --- |
| --- | --- |

IMTDeal::VolumeClosed
Gets the position volume that was closed by the deal.
C++
UINT64 IMTDeal::VolumeClosed() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.VolumeClosed()  
---  
Python
MTDeal.VolumeClosed  
---  
Return Value
The position volume that was closed by the deal. The volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The value can be obtained only for the deals of type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTDeal::VolumeClosedExt](imtdeal_volumeclosedext.md "VolumeClosedExt") method.
IMTDeal::VolumeClosed
Sets the position volume that was closed by the deal.
C++
MTAPIRES IMTDeal::VolumeClosed( const UINT64 volume // Closed volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.VolumeClosed( ulong volume // Closed volume )  
---  
Python
MTDeal.VolumeClosed  
---  
Parameters
volume
[in] The position volume that was closed by the deal. The volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The value can be set only for the deals of type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTDeal::VolumeClosedExt](imtdeal_volumeclosedext.md "VolumeClosedExt") method.