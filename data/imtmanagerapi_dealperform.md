# DealPerform (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealPerform | [](imtmanagerapi_dealdeletebatch.md "DealDeleteBatch") [](imtmanagerapi_dealperformbatch.md "DealPerformBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealPerform
Perform a deal on the client's account. This method performs a market buy or sell operation on the account as if it were performed by the client through the terminal. The only difference is that no trade request and no order is created to perform the deal, and thus routing rules are not applied to the operation. In all other respects, the behavior is the same: the deal execution result is applied to the position and the account trading state; commission is calculated and charged for the deal in accordance with the relevant account group settings.
C++
MTAPIRES IMTManagerAPI::DealPerform( IMTDeal* deal // deal object )  
---  
.NET
MTRetCode CIMTManagerAPI.DealPerform( CIMTDeal deal // deal object )  
---  
Python
ManagerAPI.DealPerform( deal # deal object )  
---  
Parameters
deal
[in/out] Deal object. The deal object must be first created using the [IMTManagerAPI::DealCreate](imtmanagerapi_dealcreate.md "DealCreate") method.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that the deals has been successfully performed. The object of the performed deal from the server database is added to the 'deal' array. If the deal could not be performed, the method will return the relevant error code.
Note
A deal can only be performed on the account that is opened on the same server to which the application is connected.
The ticket of the deal you are performing ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall within the deals range on the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and it must be greater than the last used ticket. 
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
It is not recommended to call the IMTManagerAPI::DealPerform method from the [IMTDealSink::OnDealAdd](imtdealsink_ondealadd.md "OnDealAdd"), [IMTDealSink::OnDealUpdate](imtdealsink_ondealupdate.md "OnDealUpdate") and [IMTDealSink::OnDealPerform](imtdealsink_ondealperform.md "OnDealPerform") handlers.
An example of closing positions (even if trading is disabled for an instrument)
| //+---------------------------------+ // | Close client's all positions at the current price | //+---------------------------------+ MTAPIRES CPluginInstance::CloseAll(UINT64 login) { IMTPositionArray* positions={0}; IMTDeal* deal_tmp ={0}; IMTPosition* pos_tmp={0}; MTAPIRES res; //--- check if(m_api) { positions=m_api->PositionCreateArray(); deal_tmp=m_api->DealCreate(); pos_tmp=m_api->PositionCreate(); } else return(MT_RET_ERR_PARAMS); //--- get positions if(res=m_api->PositionGet(login, positions)!=MT_RET_OK) { m_api->LoggerOut(MTLogOK, L"PositionGet failed [%d]", res); return(MT_RET_ERR_PARAMS); } else { m_api->LoggerOut(MTLogOK, L"client '%I64u' has %d positions, try to close them", login, positions->Total()); //--- for(UINT index=0;index<positions->Total();index++) { pos_tmp=positions->Next(index); if(pos_tmp) { //--- fill the deal object deal_tmp->Login(pos_tmp->Login()); deal_tmp->Symbol(pos_tmp->Symbol()); //--- set the direction of the closing deal depending on the position direction if(pos_tmp->Action() == IMTPosition::POSITION_BUY) deal_tmp->Action(IMTDeal::DEAL_SELL); else deal_tmp->Action(IMTDeal::DEAL_BUY); //--- fill other deal parameters deal_tmp->Volume(pos_tmp->Volume()); deal_tmp->Price(pos_tmp->PriceCurrent()); deal_tmp->PositionID(pos_tmp->Position()); // only filled for hedging accounts //--- close the position  if(res=m_api->DealPerform(deal_tmp)!=MT_RET_OK) m_api->LoggerOut(MTLogOK, L"DealPerform failed [%d]", res); } } } //--- clear the objects if(positions) positions->Release(); //--- clear the objects if(pos_tmp) pos_tmp->Release(); //--- clear the objects if(deal_tmp) deal_tmp->Release(); } //+---------------------------------+ |
| --- | --- | --- |

---