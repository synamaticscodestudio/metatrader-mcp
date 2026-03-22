# SymbolOriginal (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ SymbolOriginal | [](imtrequest_symbol.md "Symbol") [](imtrequest_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTRequest::SymbolOriginal
Get the original symbol in a trade request received by the Gateway API.
C++
LPCWSTR IMTRequest::SymbolOriginal() const  
---  
.NET (Gateway/Manager API)
string CIMTRequest.SymbolOriginal()  
---  
Return Value
If successful, returns a pointer to a string with the original request symbol. Otherwise, NULL is returned.
Note
The method is used only in the Gateway API. The value is filled in the [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock") event.
Gateway translation settings ([IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate")) enable the matching of symbols from an external trading system with those on the MetaTrader 5 side. When forwarding requests via a gateway, Gateway API makes automatic translations: it replaces the original symbol name with that used in the external system.
It is possible that one symbol in an external system corresponds to multiple systems on the MetaTrader 5 side. When processing requests in the gateway via [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock"), you can easily determine the original symbol of the request:
  * IMTRequest::SymbolOriginal — original symbol name on the MetaTrader 5 side.
  * [IMTRequest::Symbol](imtrequest_symbol.md "Symbol") — symbol name for the external system translated in accordance with the gateway translation settings.

The pointer to the resulting string is valid for the lifetime of the [IMTRequest](imtrequest.md "IMTRequest") object.
To use the string after removing the object (by calling the [IMTRequest::Release](imtrequest_release.md "Release") method of this object), you should create its copy.
IMTRequest::SymbolOriginal
Set the original symbol in a trade request received by the Gateway API.
C++
MTAPIRES IMTRequest::SymbolOriginal( LPCWSTR symbol // Symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.SymbolOriginal( string symbol // Symbol )  
---  
Parameters
symbol
[in] The original symbol of the trade request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
The method is used only in the Gateway API.