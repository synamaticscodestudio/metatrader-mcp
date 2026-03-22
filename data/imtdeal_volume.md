# Volume (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Volume | [](imtdeal_pricetp.md "PriceTP") [](imtdeal_volumeext.md "VolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Volume
Gets the volume of a deal.
C++
UINT64 IMTDeal::Volume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.Volume()  
---  
Python
MTDeal.Volume  
---  
Return Value
The deal volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTDeal::VolumeExt](imtdeal_volumeext.md "VolumeExt") method.
IMTDeal::Volume
Sets the volume of a deal.
C++
MTAPIRES IMTDeal::Volume( const UINT64 volume // Deal volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Volume( ulong volume // Deal volume )  
---  
Python
MTDeal.Volume  
---  
Parameters
volume
[in] The deal volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTDeal::VolumeExt](imtdeal_volumeext.md "VolumeExt") method.