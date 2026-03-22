# DealAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealAdd | [](imtserverapi_dealunsubscribe.md "DealUnsubscribe") [](imtserverapi_dealaddbatch.md "DealAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealAdd
Adds a deal to the server database.
MTAPIRES IMTServerAPI::DealAdd( IMTDeal* deal // An object of a deal )  
---  
Parameters
deal
[in] An object of a deal.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an appropriate error code is returned.
Note
A deal can only be added to the database of the server, on which the plugin is running.
You should use the method carefully. A deal is directly added to a client's trading history. Addition of a deal does not affect the client's balance and positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") will show that the client's positions do not coincide with their trading history. Note that further correction of balance ([IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck")) and positions ([IMTAdminAPI::PositionFix](imtadminapi_positionfix.md "PositionFix")) requires much time and resources, because the client's entire history is analyzed during this operation.
The ticket of the deal being added ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall into the deals range of the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting with the last used ticket in the range. For example, if you create a deal with ticket 5000, the server will allocate for further deals ticket numbers 5001, 5002 etc. (even if tickets below 5000 have not been used).
If a deal is added with a zero ticket, the ticket will be automatically assigned by the server.
The deal being added is checked for integrity. The following fields must be specified in such a deal:
  * [IMTDeal::Login](imtdeal_login.md "Login") (an account with this login must exist on the server)
  * [IMTDeal::Symbol](imtdeal_symbol.md "Symbol")
  * [IMTDeal::Action](imtdeal_action.md "Action")
  * [IMTDeal::Volume](imtdeal_volume.md "Volume")
  * [IMTDeal::Price](imtdeal_price.md "Price")
  * [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc")

  * [IMTDeal::Digits](imtdeal_digits.md "Digits")
  * [IMTDeal::DigitsCurrency](imtdeal_digitscurrency.md "DigitsCurrency")
  * [IMTDeal::ContractSize](imtdeal_contractsize.md "ContractSize")
