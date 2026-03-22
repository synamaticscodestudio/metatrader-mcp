# DealAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealAdd | [](imtmanagerapi_dealrequestpage.md "DealRequestPage") [](imtmanagerapi_dealaddbatch.md "DealAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealAdd
Add a deal to the server database.
C++
MTAPIRES IMTManagerAPI::DealAdd( IMTDeal* deal // Deal object )  
---  
.NET
MTRetCode CIMTManagerAPI.DealAdd( CIMTDeal deal // Deal object )  
---  
Python
ManagerAPI.DealAdd( deal # Deal object )  
---  
Parameters
deal
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
A deal can only be added to the database of the server, to which the application is connected.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.
Use this method very carefully. The deal is added directly to client's trading history. The addition of a deal does not affect the client's balance and positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") will show that the client's positions do not match the history of deals. Note that further correction of balance ([IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck")) and positions ([IMTAdminAPI::PositionFix](imtadminapi_positionfix.md "PositionFix")) will require a lot of resources and time, because these methods analyze the entire trading history of the client.
The ticket of the deal you are adding ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall within the deals range on the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and it must be greater than the last used ticket. 
Note that the server allocates new tickets starting from the last used ticket in the range. For example, if you create a deal with a ticket of 5000, the server will allocate tickets 5001, 5002, etc. for further deals (even if tickets before 5000 are not busy).
If a deal is added with a zero ticket, the server will assign the ticket automatically.
The deal being added is checked for integrity. The following fields must be filled in that deal:
  * [IMTDeal::Login](imtdeal_login.md "Login") (an account with this login must exist on the server)
  * [IMTDeal::Symbol](imtdeal_symbol.md "Symbol")
  * [IMTDeal::Action](imtdeal_action.md "Action")
  * [IMTDeal::Volume](imtdeal_volume.md "Volume")
  * [IMTDeal::Price](imtdeal_price.md "Price")
  * [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc")
  * [IMTDeal::Digits](imtdeal_digits.md "Digits")
  * [IMTDeal::DigitsCurrency](imtdeal_digitscurrency.md "DigitsCurrency")
  * [IMTDeal::ContractSize](imtdeal_contractsize.md "ContractSize")
