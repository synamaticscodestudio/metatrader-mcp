# DealSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ DealSet | [](imtdeal_deal.md "Deal") [](imtdeal_externalid.md "ExternalID") |
| --- | --- | --- |
| --- | --- |

IMTDeal::DealSet
Sets the ticket of a deal.
C++
UINT64 IMTDeal::DealSet( const UINT64 deal // The ticket of a deal )  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.DealSet( ulong deal // The ticket of a deal )  
---  
Python
MTDeal.Deal  
---  
Parameters
deal
[in] Deal ticket.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method should only be used for recovering databases of deals using the [IMTAdminAPI::DealBackupRestore](imtadminapi_dealbackuprestore.md "DealBackupRestore") method.
Do not use this method in any other functions, in which operations with tickets are performed, especially in Sever API hooks. This may corrupt the database.