# DealPerformCloseBy (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealPerformCloseBy | [](imtserverapi_dealperform.md "DealPerform") [](imtserverapi_dealperformbatch.md "DealPerformBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealPerformCloseBy
Close a position by an opposite one. This method performs a Close By operation, as if it is performed by the client through the terminal. The only difference is that no trade request and no order is created to perform the deal, and thus routing rules are not applied to the operation. In all other respects, the behavior is the same: the deal execution result is applied to the position and the account trading state; commission is calculated and charged for the deal in accordance with the relevant account group settings.
MTAPIRES IMTServerAPI::DealPerformCloseBy( IMTDeal* deal, // The deal object IMTDeal* dealby // The deal object )  
---  
Parameters
deal
[in/out] When calling the method, fill in only one parameter in the deal object: [IMTDeal::PositionID](imtdeal_positionid.md "PositionID"). The ticket of the position to close is specified in this parameter. The server will fill in other required fields automatically. You can additionally specify an individual profit recalculation rate ([IMTDeal::RateProfit](imtdeal_rateprofit.md "RateProfit")) in a deal. If you do not specify it, a calculated rate will be used.
dealby
[in/out] When calling the method, fill in only one parameter in the deal object: [IMTDeal::PositionID](imtdeal_positionid.md "PositionID"). The ticket of the opposite position is specified here. The server will fill in other required fields automatically.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that the deal has been successfully closed. The objects of the executed deals (of [IMTDeal::ENTRY_OUT_BY](imtdeal_enum.htm#endealaction) type) from the server database are added to 'deal' and 'dealby'. If the operation could not be performed, the method returns a corresponding error code.
Note
The operation can only be performed on the account existing on the same server, on which the plugin is running.
The method can only be used on hedging supporting accounts ([IMTConGroup::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode)).