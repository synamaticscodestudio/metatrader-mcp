# HookTradeRequestProcessCloseBy (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeRequestProcessCloseBy | [](imttradesink_hooktraderequestprocess.md "HookTradeRequestProcess") [](imttradesink_hooktraderequestrulefilter.md "HookTradeRequestRuleFilter") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeRequestProcessCloseBy
A hook of execution of the [trade request](imtrequest.md "IMTRequest") to close a position by an opposite one (TA_CLOSE_BY or TA_DEALER_CLOSE_BY).
virtual MTAPIRES IMTTradeSink::HookTradeRequestProcessCloseBy( const IMTRequest* request, // A pointer to the request object const IMTConfirm* confirm, // A pointer to the confirmation object const IMTConGroup* group, // A pointer to the group configuration object const IMTConSymbol* symbol, // A pointer to the symbol configuration object IMTPosition* position, // A pointer to the position object IMTOrder* order, // A pointer to the order object IMTDeal* deal, // A pointer to the deal object to close the source position IMTDeal* deal_by // A pointer to the deal object to close the opposite position )  
---  
Parameters
request
[in] A pointer to the object of a [trade request](imtrequest.md "IMTRequest").
confirm
[in] A pointer to the object of [confirmation of a trade request](imtconfirm.md "IMTConfirm"), as a result of which a deal is executed.
group
[in] A pointer to the object of the [configuration of the group of a client](config_group.md "Groups"), for whom the request is being processed.
symbol
[in] A pointer to the object of the [configuration of a symbol](config_symbol.md "Symbols"), which request is being processed.
position
[in][out] A pointer to the object of a [trade position](imtposition.md "IMTPosition"), which corresponds to the client and symbol, for which a request is being processed.
order
[in][out] A pointer to the object of a [trade order](imtorder.md "IMTOrder"), which corresponds to the request being processed: a newly created or modified order.
deal
[in] A pointer to the object of the [deal](imtdeal.md "IMTDeal") of ENTRY_OUT_BY type, which was executed in order to close the source position.
deal_by
[in] A pointer to the object of the [deal](imtdeal.md "IMTDeal") of ENTRY_OUT_BY type, which was executed in order to close the opposite position.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the request will be rejected with a response code returned from the hook.
Note
Note that after the execution of a specified order, a deal and a position will be passed in a recalculated state. Therefore, you should ensure the integrity of the changed data.
During a day/month closing, trade requests are not processed by the server in order not to distort the data provided in the reports. Therefore, the HookTradeRequestProcessCloseBy hook is not called at that time as well.