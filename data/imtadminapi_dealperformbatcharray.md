# DealPerformBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Deals ](imtadminapi_trading_deal.md "Functions")/ DealPerformBatchArray | [](imtadminapi_dealperformbatch.md "DealPerformBatch") [](imtadminapi_trading_position.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::DealPerformBatchArray
Perform multiple deals on the client's account. This method performs market buy or sell operations on the account as if they were performed by the client through the terminal. The only difference is that trade requests and orders are not created to perform the deals, and thus routing rules are not applied to the operations. In all other respects, the behavior the same: deal execution results are applied to positions and to the account trading state; commissions are calculated and charged for the deals in accordance with the relevant account group settings.
C++
MTAPIRES IMTAdminAPI::DealPerformBatchArray( IMTDeal**  deals, // Array of deals const UINT deals_total, // Number of deals in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.DealPerformBatchArray( CIMTDealArray deals, // Array of deals MTRetCode[] res // Array of results )  
---  
Parameters
deals
[in] A pointer to the array of deals.
deals_total
[in] The number of deals in the 'deals' array.
results
[out] An array with deal update results. The size of the 'results' array must not be less than the size of the 'deals' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all the specified deals have been executed. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been executed. Analyze the 'results' array for more details on the execution results. This array features the results of execution of each individual deal from the 'deals' array. The result index corresponds to the deal index in the source array.
Note
Deals can only be performed on the account that is opened on the same server to which the application is connected.
The tickets of the deals you are performing ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall within the deals range on the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and they must be greater than the last used ticket. 
Note that the server allocates new tickets starting from the last used ticket in the range. For example, if you create a deal with a ticket of 5000, the server will allocate tickets 5001, 5002, etc. for further deals (even if tickets before 5000 are not busy).
If no ticket is specified in the deal, the server will assign the ticket automatically.
If to execution time ([IMTDeal::Time](imtdeal_time.md "Time") or [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc")) is specified in the deal, the server will automatically assign the current time.
The deal is checked for integrity during the operation execution. The following fields must be filled in that deal:
  * [IMTDeal::Login](imtdeal_login.md "Login")
  * [IMTDeal::Symbol](imtdeal_symbol.md "Symbol")
  * [IMTDeal::Action](imtdeal_action.md "Action") (only IMTDeal::DEAL_BUY and IMTDeal::DEAL_SELL values are allowed)
  * [IMTDeal::Volume](imtdeal_volume.md "Volume")
  * [IMTDeal::Price](imtdeal_price.md "Price")
  * [IMTDeal::PositionID](imtdeal_positionid.md "PositionID") (when closing a position on a hedging account)

You can additionally specify individual margin ([IMTDeal::RateMargin](imtdeal_ratemargin.md "RateMargin")) and profit ([IMTDeal::RateProfit](imtdeal_rateprofit.md "RateProfit")) recalculation rates in the deal. If not specified, calculated rates will be used.
If commission ([IMTDeal::Commission](imtdeal_commission.md "Commission")) is specified in the deal, it will be applied to the client account. However, it does not replace the commission charged in accordance with the trader's group settings ([IMTConGroup::Commission*](imtcongroup_commissionadd.md "CommissionAdd")). Therefore, the commission specified in the deal is summed up with the calculated commission. 
The deal profit is always calculated by the server even if you specify it in the [IMTDeal::Profit](imtdeal_profit.md "Profit") field. If necessary, the server charges the deal commission automatically (in accordance with the [commission settings](imtconcommission.md "IMTConCommission")).
It is not recommended to call the IMTAdminAPI::DealPerformBatchArray method from the [IMTDealSink::OnDealAdd](imtdealsink_ondealadd.md "OnDealAdd"), [IMTDealSink::OnDealUpdate](imtdealsink_ondealupdate.md "OnDealUpdate") and [IMTDealSink::OnDealPerform](imtdealsink_ondealperform.md "OnDealPerform") handlers.