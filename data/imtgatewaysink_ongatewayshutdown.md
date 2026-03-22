# OnGatewayShutdown (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnGatewayShutdown | [](imtgatewaysink_ongatewaystop.md "OnGatewayStop") [](imtgatewaysink_ongatewayaccountset.md "OnGatewayAccountSet") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnGatewayShutdown
A handler of the event notifying about the trading platform shutdown or gateway/data feed disconnection.
C++
virtual void IMTGatewaySink::OnGatewayShutdown( const UINT64 login // Login )  
---  
.NET
virtual void CIMTGatewaySink.OnGatewayShutdown( ulong login // Login )  
---  
Parameters
login
[in] Login of the platform component from which the shutdown event has been received.
Note
This event allows the programmer to gracefully terminate the gateway/datafeed. After receiving the event, the application must stop operation; otherwise, the process will be stopped forcibly after 5 seconds.
Do not confuse connection login with server ID (IMTConServer::ID). This login is specified in gateway/data feed settings ([IMTConFeeder::Login](imtconfeeder_feedlogin.md "FeedLogin")/[IMTConGateway::Login](imtcongateway_tradinglogin.md "TradingLogin")). The login is always equal to 1000 for local data feeds and gateways.
The event handler is not called for the gateways and data feeds running as a [remote service](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_gateways/gateway_service). Also, the handler is not called if the new [IMTGatewayAPI](imtgatewayapi.md "Main Interface") interface instance was created through the [MTGatewayCreateLocal](mtgatewaycreatelocal.md "MTGatewayCreateLocal") function with the /standalone key passed in the command line options.
Under normal conditions, a locally running gateway/data feed process should not self-shutdown until receiving the IMTGatewaySink::OnGatewayShutdown event. For example, in case of problems with connecting to an external system, the application should implement its own [reconnection](imtgatewayapi_state.md "External Connection Status") logic.