# HookTradeExecution (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeExecution | [](imttradesink_hooktradecommissioncharge.md "HookTradeCommissionCharge") [](imttradesink_hooktradesplit.md "HookTradeSplit") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeExecution
A hook of applying a trade execution.
virtual MTAPIRES IMTTradeSink::HookTradeExecution( const IMTConGateway* gateway, // A pointer to the gateway configuration const IMTExecution* execution, // A pointer to the trade execution object const IMTConGroup* group, // A pointer to the group configuration object const IMTConSymbol* symbol, // A pointer to the symbol configuration object IMTPosition* position, // A pointer to the position object IMTOrder* order, // A pointer to the order object IMTDeal* deal // A pointer to the deal object )  
---  
Parameters
gateway
[in] A pointer to the object of a [gateway configuration](imtcongateway.md "IMTConGateway") the trade execution is received from. This parameter is not used and is always equal to NULL.
execution
[in] A pointer to the object of the [trade execution](imtexecution.md "IMTExecution") received.
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the trade execution is being processed.
symbol
[in][out] A pointer to the object of the [configuration of a symbol](config_symbol.md "Symbols"), for which the trade execution is being processed.
position
[in][out] A pointer to the object of a [trade position](imtposition.md "IMTPosition"), which corresponds to the client and symbol, for which the trade execution is being processed.
order
[in][out] A pointer to the object of a [trade order](imtorder.md "IMTOrder"), which corresponds to the trade execution being processed.
deal
[in][out] A pointer to the object of a [trade deal](imtdeal.md "IMTDeal") created as a result of applying the trade execution.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the trade execution be rejected with a response code returned from the hook. Thus, if the response code is different from MT_RET_OK, the trade execution will not be applied.
Note
Depending on the request type, parameters symbol, position and order can be equal to NULL.
Note that after applying the trade execution, a specified order, a deal and a position will be passed in a recalculated state. Accordingly, when modify them, you should monitor the data integrity (for example, when the price of order execution changes, you should also change the deal price and the weighted average price of the position).