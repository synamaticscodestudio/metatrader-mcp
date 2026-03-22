# DealPerform (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealPerform | [](imtserverapi_dealselectbylogins.md "DealSelectByLogins") [](imtserverapi_dealperformcloseby.md "DealPerformCloseBy") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealPerform
Perform a deal on the client's account. This method performs a market buy or sell operation on an account, as if it is performed by the client through the terminal. The only difference is that no trade request and no order is created to perform the deal, and thus routing rules are not applied to the operation. In all other respects, the behavior is the same: the deal execution result is applied to the position and the account trading state; commission is calculated and charged for the deal in accordance with the relevant account group settings.
MTAPIRES IMTServerAPI::DealPerform( IMTDeal* deal // An object of a deal )  
---  
Parameters
deal
[in/out] An object of the deal. The deal object must be first created using the [IMTServerAPI::DealCreate](imtserverapi_dealcreate.md "DealCreate") method.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that the deal has been successfully created. The object of the executed deal from the server base is added to 'deal'. If a deal could not be executed, the method returns a corresponding error code.
Note
A deal can only be performed on the account existing on the same server, on which the plugin is running.
The ticket of the deal being performed ([IMTDeal::DealSet](imtdeal_dealset.md "DealSet")) must fall into the deals range of the trading server ([IMTConServerTrade::DealsRange*](imtconservertrade_dealsrangeadd.md "DealsRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting with the last used ticket in the range. For example, if you create a deal with ticket 5000, the server will allocate for further deals ticket numbers 5001, 5002 etc. (even if tickets below 5000 have not been used).
If the ticket is not specified in a deal, the server will automatically assign a ticket to such a deal.
If execution time ([IMTDeal::Time](imtdeal_time.md "Time") or [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc")) is not specified in a deal, the server will automatically set the current time.
The deal integrity is checked during the operation. The following fields must be specified in such a deal:
  * [IMTDeal::Login](imtdeal_login.md "Login")
  * [IMTDeal::Symbol](imtdeal_symbol.md "Symbol")
  * [IMTDeal::Action](imtdeal_action.md "Action") (only values IMTDeal::DEAL_BUY and IMTDeal::DEAL_SELL are allowed)
  * [IMTDeal::Volume](imtdeal_volume.md "Volume")
  * [IMTDeal::Price](imtdeal_price.md "Price")
  * [IMTDeal::PositionID](imtdeal_positionid.md "PositionID") (when closing a position on a hedging account)

You can additionally specify in a deal an individual margin recalculation rate ([IMTDeal::RateMargin](imtdeal_ratemargin.md "RateMargin")) and profit recalculation rate([IMTDeal::RateProfit](imtdeal_rateprofit.md "RateProfit")). If you do not specify them calculated rates will be used.
If commission ([IMTDeal::Commission](imtdeal_commission.md "Commission")) is specified in a deal, this commission will be applied to the trading account. However, it does not replace the commission charged in accordance with the trader's group settings ([IMTConGroup::Commission*](imtcongroup_commissionadd.md "CommissionAdd")). Therefore, the commission specified in the deal is summed up with the calculated commission. 
The profit of a deal is always calculated by the server, even if you specify profit in the [IMTDeal::Profit](imtdeal_profit.md "Profit") field. The server automatically charges commission on a deal if necessary (in accordance with [commission settings](imtconcommission.md "IMTConCommission")).
It is not recommended to call IMTServerAPI::DealPerform from the following handlers: [IMTDealSink::OnDealAdd](imtdealsink_ondealadd.md "OnDealAdd"), [IMTDealSink::OnDealUpdate](imtdealsink_ondealupdate.md "OnDealUpdate") and [IMTDealSink::OnDealPerform](imtdealsink_ondealperform.md "OnDealPerform").
An example of closing positions (even if trading is disabled for an instrument)
| //+---------------------------------+ // | Closing client's all positions at the current price | //+---------------------------------+ MTAPIRES CPluginInstance::CloseAll(UINT64 login) { IMTPositionArray* positions={0}; IMTDeal* deal_tmp ={0}; IMTPosition* pos_tmp={0}; MTAPIRES res; //--- Check if(m_api) { positions=m_api->PositionCreateArray(); deal_tmp=m_api->DealCreate(); pos_tmp=m_api->PositionCreate(); } else return(MT_RET_ERR_PARAMS); //--- Get positions if(res=m_api->PositionGet(login, positions)!=MT_RET_OK) { m_api->LoggerOut(MTLogOK, L"PositionGet failed [%d]", res); return(MT_RET_ERR_PARAMS); } else { m_api->LoggerOut(MTLogOK, L"client '%I64u' has %d positions, try to close them", login, positions->Total()); //--- for(UINT index=0;index<positions->Total();index++) { pos_tmp=positions->Next(index); if(pos_tmp) { //--- Fill the deal object deal_tmp->Login(pos_tmp->Login()); deal_tmp->Symbol(pos_tmp->Symbol()); //--- Set the direction of the closing deal depending on the position direction if(pos_tmp->Action() == IMTPosition::POSITION_BUY) deal_tmp->Action(IMTDeal::DEAL_SELL); else deal_tmp->Action(IMTDeal::DEAL_BUY); //--- Fill other deal parameters deal_tmp->Volume(pos_tmp->Volume()); deal_tmp->Price(pos_tmp->PriceCurrent()); deal_tmp->PositionID(pos_tmp->Position()); // Only filled for hedging accounts //--- Close position  if(res=m_api->DealPerform(deal_tmp)!=MT_RET_OK) m_api->LoggerOut(MTLogOK, L"DealPerform failed [%d]", res); } } } //--- Clear objects if(positions) positions->Release(); //--- Clear objects if(pos_tmp) pos_tmp->Release(); //--- Clear objects if(deal_tmp) deal_tmp->Release(); } //+---------------------------------+ |
| --- | --- | --- |

---