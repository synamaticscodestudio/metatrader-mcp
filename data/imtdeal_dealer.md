# Dealer (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Dealer | [](imtdeal_login.md "Login") [](imtdeal_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Dealer
Get the login of a dealer, who has processed a deal.
C++
UINT64 IMTDeal::Dealer() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.Dealer()  
---  
Python
MTDeal.Dealer  
---  
Return Value
The login of a dealer, who has processed a deal. If a deal was processed automatically by the server, 0 is returned.
IMTDeal::Dealer
Set the login of a dealer, who has processed a deal.
C++
MTAPIRES IMTDeal::Dealer( const UINT64 dealer // Dealer )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Dealer( ulong dealer // Dealer )  
---  
Python
MTDeal.Dealer  
---  
Parameters
dealer
[in] The login of a dealer, who has processed a deal. 0 means that the deal was processed automatically by the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.