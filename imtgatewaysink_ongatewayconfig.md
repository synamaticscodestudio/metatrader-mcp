# OnGatewayConfig (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnGatewayConfig | [](imtgatewaysink_onserversymboldelete.md "OnServerSymbolDelete") [](imtgatewaysink_ongatewaystart.md "OnGatewayStart") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnGatewayConfig
A handler of the event of passing a gateway own configuration from a history server connected to it.
C++
virtual void IMTGatewaySink::OnGatewayConfig( const UINT64 login, // Login const IMTConGateway* config // Gateway configuration object )  
---  
.NET
virtual void CIMTGatewaySink.OnGatewayConfig( ulong login, // Login CIMTConGateway config // Gateway configuration object )  
---  
Parameters
login
[in] The login, from which a platform component was connected.
*config
[in] [The gateway configuration object](imtcongateway.md "IMTConGateway").
Note
During the connection a history server passes the gateway settings specified in the platform for it.
Do not confuse connection login with server ID (IMTConServer::ID). This login is specified in the gateway settings ([IMTConGateway::Login](imtcongateway_tradinglogin.md "TradingLogin")). The login is always equal to 1000 for local gateways.
The passed configuration contains the list of symbols ([IMTConFeeder::Symbol*](imtconfeeder_symboladd.md "SymbolAdd")), for which the history server is ready to receive quotes from a data feed. The following factors are considered:
  * The symbol settings should not contain the source ([IMTConSymbol::Source](imtconsymbol_source.md "Source")). Otherwise, the quotes are copied from it.
  * Receiving quotes from data sources ([IMTConSymbol::TICK_REALTIME](imtconsymbol_enum.htm#entickflags)) should be enabled in the symbol settings. Otherwise, only quotes thrown in by dealers via the Manager terminals are accepted.
  * The "Quotes" or "Quotes and News" mode ([IMTConFeeder::FEED_FLAG_QUOTES](imtconfeeder_enum.htm#enfeedersmode)) should be used for a data feed. Otherwise, the data feed quotes are rejected.

If any of the above conditions is not met, the corresponding symbols are not passed in the configuration.
IMTGatewaySink::OnGatewayConfig
A handler of the event of passing a data feed own configuration from a history server connected to it.
C++
virtual void IMTGatewaySink::OnGatewayConfig( const UINT64 login, // Login const IMTConFeeder* config // Data feed configuration object )  
---  
.NET
virtual void CIMTGatewaySink.OnGatewayConfig( ulong login, // Login CIMTConFeeder  config // Data feed configuration object )  
---  
Parameters
login
[in] The login, from which a platform component was connected.
*config
[in] [Data feed configuration object](imtconfeeder.md "MTConFeeder").
Note
History servers of different MetaTrader 5 trading platforms can connect to the same data feed. During the connection a history server passes the data feed settings specified in the platform for it.
Do not confuse connection login with server ID (IMTConServer::ID). This login is specified in the data feed settings ([IMTConFeeder::Login](imtconfeeder_feedlogin.md "FeedLogin")). The login is always equal to 1000 for local data feeds.
The passed configuration contains the list of symbols ([IMTConGateway::Symbol*](imtcongateway_symboladd.md "SymbolAdd")), for which the history server is ready to receive quotes from a gateway. The following factors are considered:
  * The symbol settings should not contain the source ([IMTConSymbol::Source](imtconsymbol_source.md "Source")). Otherwise, the quotes are copied from it.
  * Receiving quotes from data sources ([IMTConSymbol::TICK_REALTIME](imtconsymbol_enum.htm#entickflags)) should be enabled in the symbol settings. Otherwise, only quotes thrown in by dealers via the Manager terminals are accepted.
  * The "Trade and Quote" mode (the [IMTConGateway::GATEWAY_FLAG_IGNORE_QUOTES](imtcongateway_enum.htm#engatewaymode) flag is not enabled) should be used for a gateway. Otherwise, the gateway quotes are rejected.

If any of the above conditions is not met, the corresponding symbols are not passed in the configuration.