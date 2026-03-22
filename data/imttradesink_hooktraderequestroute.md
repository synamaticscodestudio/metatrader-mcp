# HookTradeRequestRoute (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Trade Events ](imttradesink.md "Interface of Trade Events")/ HookTradeRequestRoute | [](imttradesink_hooktraderequestadd.md "HookTradeRequestAdd") [](imttradesink_hooktraderequestprocess.md "HookTradeRequestProcess") |
| --- | --- | --- |
| --- | --- |

IMTTradeSink::HookTradeRequestRoute
A hook of [trade request](imtrequest.md "IMTRequest") routing in a requests queue.
virtual MTAPIRES IMTTradeSink::HookTradeRequestRoute( IMTRequest* request, // A pointer to the request object IMTConfirm* confirm, // A pointer to the confirmation object const IMTConGroup* group, // Group const IMTConSymbol* symbol, // Obsolete parameter const IMTPosition* position, // Obsolete parameter const IMTOrder* order // A pointer to the order object )  
---  
Parameters
request
[in][out] A pointer to the object of [a trade request](imtrequest.md "IMTRequest").
confirm
[in][out] A pointer to the object of [confirmation of a trade request](imtconfirm.md "IMTConfirm"), as a result of which a deal is executed.
group
[in] A pointer to the object of the [group](imtcongroup.md "IMTConGroup") to which the client who has send the request belongs.
symbol
[in] This parameter is obsolete. Its value is always NULL.
position
[in] This parameter is obsolete. Its value is always NULL.
order
[in] A pointer to the object of a [trade order](imtorder.md "IMTOrder"), which corresponds to the request being processed: a newly created or modified order.
Return Value
If the response code [MT_RET_REQUEST_DONE](retcodes_trade_request.md "Trade Requests") is returned from the hook, the request will be confirmed without applying routing rules. If [MT_RET_OK](retcodes_successful.md "Successful completion") is returned, the request will be processed according to the routing rule. In case any other response code is returned, the request will be rejected with that response code.