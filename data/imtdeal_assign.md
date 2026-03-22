# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Assign | [](imtdeal_release.md "Release") [](imtdeal_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTDeal::Assign( const IMTDeal* deal // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Assign( CIMTDeal deal // Source object )  
---  
Parameters
deal
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.