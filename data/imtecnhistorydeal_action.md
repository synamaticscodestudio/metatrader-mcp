# Type (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Action | [](imtecnhistorydeal_symbol.md "Symbol") [](imtecnhistorydeal_volumeext.md "VolumeInitialExt") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Action
Get deal type.
C++
UINT IMTECNHistoryDeal::Action() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNHistoryDeal.Action()  
---  
Return Value
[IMTDeal::EnDealAction](imtdeal_enum.htm#endealaction) enumeration value. DEAL_BUY and DEAL_SELL values are used.
IMTECNHistoryDeal
Set the deal type.
C++
MTAPIRES IMTECNHistoryFilling::Action( const UINT action // deal type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Action( uint action // deal type )  
---  
Parameters
action
[in] Deal type. The deal type is passed using the [IMTDeal::EnDealAction](imtdeal_enum.htm#endealaction) enumeration. DEAL_BUY and DEAL_SELL values are used.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.