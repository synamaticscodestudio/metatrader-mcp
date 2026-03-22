# VolumeClosedExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ VolumeClosedExt | [](imtdeal_volumeclosed.md "VolumeClosed") [](imtdeal_profit.md "Profit") |
| --- | --- | --- |
| --- | --- |

IMTDeal::VolumeClosedExt
Gets the extended accuracy volume of a position that was closed by this deal.
C++
UINT64 IMTDeal::VolumeClosedExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.VolumeClosedExt()  
---  
Python
MTDeal.VolumeClosedExt  
---  
Return Value
The position volume that was closed by the deal. The volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The value can only be obtained for deal type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTDeal::VolumeClosed](imtdeal_volumeclosed.md "VolumeClosed") method.
IMTDeal::VolumeClosedExt
Sets the extended accuracy volume of a position that was closed by this deal.
C++
MTAPIRES IMTDeal::VolumeClosedExt( const UINT64 volume // Closed volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.VolumeClosedExt( ulong volume // Closed volume )  
---  
Python
MTDeal.VolumeClosedExt  
---  
Program Parameters
volume
[in] The position volume that was closed by the deal. The volume is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The value can only be set for deal type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTDeal::VolumeClosed](imtdeal_volumeclosed.md "VolumeClosed") method.