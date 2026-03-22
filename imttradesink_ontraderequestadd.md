# OnTradeRequestAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ OnTradeRequestAdd | [](imttradesink.md "Interface of Trade Events") [](imttradesink_ontraderequestupdate.md "OnTradeRequestUpdate") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::OnTradeRequestAdd
A handler of the event of adding a checked [trade request](imtrequest.md "IMTRequest") in the requests queue.
virtual void IMTTradeSink::OnTradeRequestAdd( const IMTRequest* request, // A pointer to the request object const IMTConGroup* group, // A pointer to the group configuration object const IMTConSymbol* symbol, // A pointer to the symbol configuration object const IMTPosition* position, // A pointer to the position object const IMTOrder* order // A pointer to the order object )  
---  
Parameters
request
[in] A pointer to the object of a [trade request](imtrequest.md "IMTRequest").
group
[in] A pointer to the object of the [configuration of the group](config_group.md "Groups") of a client, for whom the request is being processed.
symbol
[in] A pointer to the object of the [configuration of a symbol](config_symbol.md "Symbols"), which request is being processed.
position
[in] A pointer to the object of a [trade position](imtposition.md "IMTPosition"), which corresponds to the client and symbol, for which a request is being processed.
order
[in] A pointer to the object of a [trade order](imtorder.md "IMTOrder"), which corresponds to the request being processed: a newly created or modified order.
Note
This method notifies that the correctness of the appropriate trade request has been check and it has been added to the trade requests queue.
Depending on the request type, parameters symbol, position and order can be equal to NULL.