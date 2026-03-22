# VolumeInitialExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ VolumeExt | [](imtecnhistorydeal_action.md "Type") [](imtecnhistorydeal_price.md "Price") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::VolumeExt
Get the volume of a deal.
C++
UINT64 IMTECNHistoryDeal::VolumeExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryDeal.VolumeExt()  
---  
Return Value
Deal volume. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
IMTECNHistoryDeal::VolumeExt
Set the volume of a deal.
C++
MTAPIRES IMTECNHistoryDeal::VolumeExt( const UINT64 volume // volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.VolumeExt( ulong volume // volume )  
---  
Parameters
volume
[in] Deal volume. The value is specified in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.