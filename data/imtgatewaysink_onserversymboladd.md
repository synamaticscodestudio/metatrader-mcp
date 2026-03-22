# OnServerSymbolAdd (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnServerSymbolAdd | [](imtgatewaysink_onserversynchronized.md "OnServerSynchronized") [](imtgatewaysink_onserversymboldelete.md "OnServerSymbolDelete") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnServerSymbolAdd
A handler of the event of adding a new symbol.
C++
virtual void IMTGatewaySink::OnServerSymbolAdd( LPCWSTR symbol // The name of the added symbol )  
---  
.NET
virtual void CIMTGatewaySink.OnServerSymbolAdd( string symbol // The name of the added symbol )  
---  
Parameters
symbol
[in] The name of the added symbol.
Note
This method is called by the Gateway API to notify that a new symbol has been added.
Notifications are called in accordance with the symbol name translation settings (methods [IMTConGateway::Translate*](imtcongateway_translateadd.md "TranslateAdd")):
  * If translation is not configured for the added symbol, the original name of the symbol used in the platform will be passed.
  * If translation is configured for the added symbol, the name of the source symbol is passed in 'symbol'.
  * The IMTGatewaySink::OnServerSymbolAdd method is only called if there were no symbols with the same Source ([IMTConGatewayTranslate::Source](imtcongatewaytranslate_source.md "Source")) specified in translation parameters in the platform before. Consider the following example: the platform has no EURUSD symbol, but it is set as the source in the gateway translation settings. In this case, the gateway will not receive the OnServerSymbolAdd event after adding EURUSD in the platform. The event is not required, since the gateway knows about the need to feed EURUSD quotes through a synonymous symbol.

The event is called only for symbols, for which the history server is ready to receive quotes from a gateway/data feed. The following factors are considered:
  * The symbol settings should not contain the source ([IMTConSymbol::Source](imtconsymbol_source.md "Source")). Otherwise, the quotes are copied from it.
  * Receiving quotes from data sources ([IMTConSymbol::TICK_REALTIME](imtconsymbol_enum.htm#entickflags)) should be enabled in the symbol settings. Otherwise, only quotes thrown in by dealers via the Manager terminals are accepted.
  * The "Quotes" or "Quotes and News" mode ([IMTConFeeder::FEED_FLAG_QUOTES](imtconfeeder_enum.htm#enfeedersmode)) should be used for a data feed. Otherwise, the data feed quotes are rejected.

  * The "Trade and Quote" mode (the [IMTConGateway::GATEWAY_FLAG_IGNORE_QUOTES](imtcongateway_enum.htm#engatewaymode) flag is not enabled) should be used for a gateway. Otherwise, the gateway quotes are rejected.

If any of the above conditions is not met, the event is not called for the appropriate symbol.