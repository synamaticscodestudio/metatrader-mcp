# DealAddBatch (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealAddBatch | [](imtserverapi_dealadd.md "DealAdd") [](imtserverapi_dealaddbatcharray.md "DealAddBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealAddBatch
Adds deals to a server database in bulk.
MTAPIRES IMTServerAPI::DealAddBatch( IMTDealArray*  deals, // An array of deals MTAPIRES* results // An array of results )  
---  
Parameters
deals
[in] A pointer to the object of the [IMTDealArray](imtdealarray.md "IMTDealArray") array of deals.
results
[out] An array with the result of the addition of deals. The size of the 'results' array must be not less than that of 'deals'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") code means that all specified deals have been added. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been added. For details, you should analyze the 'results' array. The result of addition of each deal from the 'deal' array is added to the 'results' array. The index of a result corresponds to the index of a deal in the source array.
Note
Deals can only be added to the database of the server, on which the plugin is running.
You should use the method carefully. Deals are directly added to clients' trading history. Addition of a deal does not affect the clients' balances and positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") will show that the clients' positions do not coincide with their trading history. Note that further correction of balance ([IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck")) and positions ([IMTAdminAPI::PositionFix](imtadminapi_positionfix.md "PositionFix")) requires much time and resources, because entire clients' history is analyzed during this operation.
The tickets of the deals being added ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall into the deals range of the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting with the last used ticket in the range. For example, if you create a deal with ticket 5000, the server will allocate for further deals ticket numbers 5001, 5002 etc. (even if tickets below 5000 have not been used).
If deals are added with a zero ticket, appropriate tickets will be automatically assigned by the server.
Deals being added are checked for integrity. The following fields must be specified in deals:
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
IMTServerAPI::DealAddBatch
Adds deals to a server database in bulk.
MTAPIRES IMTServerAPI::DealAddBatch( IMTDeal**  deals, // An array of deals const UINT deals_total, // The number of deals in the array MTAPIRES* results // An array of results )  
---  
Parameters
deals
[in] A pointer to an array of deals.
deals_total
[in] The number of deals in the 'deals' array.
results
[out] An array with the result of the addition of deals. The size of the 'results' array must be not less than that of 'deals'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") code means that all specified deals have been added. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been added. For details, you should analyze the 'results' array. The result of addition of each deal from the 'deal' array is added to the 'results' array. The index of a result corresponds to the index of a deal in the source array.
Note
Deals can only be added to the database of the server, on which the plugin is running.
You should use the method carefully. Deals are directly added to clients' trading history. Addition of a deal does not affect the clients' balances and positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") will show that the clients' positions do not coincide with their trading history. Note that further correction of balance ([IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck")) and positions ([IMTAdminAPI::PositionFix](imtadminapi_positionfix.md "PositionFix")) requires much time and resources, because entire clients' history is analyzed during this operation.
The tickets of the deals being added ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall into the deals range of the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting with the last used ticket in the range. For example, if you create a deal with ticket 5000, the server will allocate for further deals ticket numbers 5001, 5002 etc. (even if tickets below 5000 have not been used).
If deals are added with a zero ticket, appropriate tickets will be automatically assigned by the server.
Deals being added are checked for integrity. The following fields must be specified in deals:
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