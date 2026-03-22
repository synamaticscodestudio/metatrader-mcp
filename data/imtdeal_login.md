# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Login | [](imtdeal_externalid.md "ExternalID") [](imtdeal_dealer.md "Dealer") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Login
Get the login of the client, to whom the deal belongs.
C++
UINT64 IMTDeal::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.Login()  
---  
Python
MTDeal.Login  
---  
Return Value
The login of the client, to whom the order belongs.
IMTDeal::Login
Set the login of the client, to whom the deal belongs.
C++
MTAPIRES IMTDeal::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Login( ulong login // Login )  
---  
Python
MTDeal.Login  
---  
Parameters
login
[in] The login of the client, to whom the deal belongs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.