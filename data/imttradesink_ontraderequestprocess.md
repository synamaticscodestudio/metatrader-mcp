# OnTradeRequestProcess (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ OnTradeRequestProcess | [](imttradesink_ontraderequestdelete.md "OnTradeRequestDelete") [](imttradesink_ontraderequestprocesscloseby.md "OnTradeRequestProcessCloseBy") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::OnTradeRequestProcess
A handler of the event of a successful execution of a [trade request](imtrequest.md "IMTRequest").
virtual void IMTTradeSink::OnTradeRequestProcess( const IMTRequest* request, // A pointer to the request object const IMTConfirm* confirm, // A pointer to the confirmation object const IMTConGroup* group, // A pointer to the group configuration object const IMTConSymbol* symbol, // A pointer to the symbol configuration object const IMTPosition* position, // A pointer to the position object const IMTOrder* order, // A pointer to the order object const IMTDeal* deal // A pointer to the deal object )  
---  
Parameters
request
[in] A pointer to the object of a [trade request](imtrequest.md "IMTRequest").
confirm
[in] A pointer to the object of [confirmation of a trade request](imtconfirm.md "IMTConfirm"), as a result of which a deal is executed.
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the request is being processed.
symbol
[in] A pointer to the object of the [configuration of a symbol](config_symbol.md "Symbols"), which request is being processed.
position
[in] A pointer to the object of a [trade position](imtposition.md "IMTPosition"), which corresponds to the client and symbol, for which a request is being processed.
order
[in] A pointer to the object of a [trade order](imtorder.md "IMTOrder"), which corresponds to the request being processed: a newly created or modified order. Please note that the method passes the current order state, not the future one as after its execution. For example, if the handler triggered during the execution of the order modification request, you will receive information about the initial order state and not about the modified one.
deal
[in][ A pointer to the object of a [trade deal](imtdeal.md "IMTDeal") created as a result of the execution of a trade request.
Note
This method notifies that the corresponding request has been filled and provides additional information.
Depending on the request type, parameters symbol, position, order and deal can be equal to NULL.