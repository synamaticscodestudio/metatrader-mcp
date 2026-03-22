# DealAddBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealAddBatchArray | [](imtadminapi_dealaddbatch.md "DealAddBatch") [](imtadminapi_dealupdate.md "DealUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealAddBatchArray
Add a batch of deals to the server database.
C++
MTAPIRES IMTAdminAPI::DealAddBatchArray( IMTDeal**  deals, // Array of deals const UINT deals_total, // Number of deals in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.DealAddBatchArray( CIMTDeal[] deals, // Array of deals MTRetCode[] retcodes // Array of results )  
---  
Parameters
deals
[in] A pointer to the array of deals.
deals_total
[in] The number of deals in the 'deals' array.
results
[out] An array with deal addition results. The size of the 'results' array must not be less than the size of the 'deals' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all deals have been added. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been added. Analyze the 'results' array for more details on the execution results. This array features the results of adding of each individual deal from the 'deals' array. The result index corresponds to the deal index in the source array.
Note
Deals can only be added to the database of the server, to which the application is connected.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.
Use this method very carefully. Deals are added directly to clients' trading histories. The addition of deals does not affect clients' balances and positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") will show that the clients' positions do not match their history of deals. Note that further correction of balances ([IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck")) and positions ([IMTAdminAPI::PositionFix](imtadminapi_positionfix.md "PositionFix")) will require a lot of resources and time, since these methods analyze clients' entire trading histories.
The tickets of the deals you are adding ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall within the deals range on the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and they must be greater than the last used ticket. 
Note that the server allocates new tickets starting from the last used ticket in the range. For example, if you create a deal with a ticket of 5000, the server will allocate tickets 5001, 5002, etc. for further deals (even if tickets before 5000 are not busy).
If deals are added with zero tickets, the server will assign the tickets automatically.
Deals being added are checked for integrity. The following fields must be filled:
  * [IMTDeal::Login](imtdeal_login.md "Login") (an account with this login must exist on the server)
  * [IMTDeal::Symbol](imtdeal_symbol.md "Symbol")
  * [IMTDeal::Action](imtdeal_action.md "Action")
  * [IMTDeal::Volume](imtdeal_volume.md "Volume")
  * [IMTDeal::Price](imtdeal_price.md "Price")
  * [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc")

  * [IMTDeal::Digits](imtdeal_digits.md "Digits")
  * [IMTDeal::DigitsCurrency](imtdeal_digitscurrency.md "DigitsCurrency")
  * [IMTDeal::ContractSize](imtdeal_contractsize.md "ContractSize")

To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.