# DealAddBatchArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealAddBatchArray | [](imtserverapi_dealaddbatch.md "DealAddBatch") [](imtserverapi_dealupdate.md "DealUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealAddBatchArray
Adds a batch of deals to a server database.
MTAPIRES IMTServerAPI::DealAddBatchArray( IMTDeal**  deals, // An array of deals const UINT deals_total, // The number of deals in the array MTAPIRES* results // An array of results )  
---  
Parameters
deals
[in] A pointer to the array of deals.
deals_total
[in] The number of deals in the 'deals' array.
results
[out] An array with the results of adding of deals. The size of the 'results' array must be not less than that of 'deals'.
Return value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all deals have been added. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of deals have been added. Analyze the 'results' array for a detailed information on execution results. The result of adding of each deal from the 'deals' array is added to 'results'. The index of a result corresponds to the index of a deal in the source array.
Note
Deals can only be added to the database of the server, on which the plugin is running.
Use this method very carefully. Deals are added directly to clients' trading histories. The addition of deals does not affect clients' balances and positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") will show that clients' positions do not match the history of deals. Note that further balance adjustment ([IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck")) and correction of position ([IMTAdminAPI::PositionFix](imtadminapi_positionfix.md "PositionFix")) will require a lot of resources and time, because these methods analyze the entire trading history of clients.
Tickets of the deals you are adding ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall into the range of deals of that trade server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting from the last used ticket in the range. For example, if you create a deal with a ticket of 5000, the server will allocate for further deals the tickets 5001, 5002, etc. (even of tickets before 5000 are not busy).
If deals are added with a zero ticket, appropriate tickets will be automatically assigned by the server.
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