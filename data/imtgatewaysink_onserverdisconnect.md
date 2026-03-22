# OnServerDisconnect (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnServerDisconnect | [](imtgatewaysink.md "Event Interface") [](imtgatewaysink_onserversynchronized.md "OnServerSynchronized") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnServerDisconnect
A handler of the event of the end of connection to one of the MetaTrader 5 platform components (server).
C++
virtual void IMTGatewaySink::OnServerDisconnect( LPCWSTR address, // IP address const UINT type, // Component type const UINT64 login // Login )  
---  
.NET
virtual void CIMTGatewaySink.OnServerDisconnect( string address, // IP address uint type, // Component type ulong login // Login )  
---  
Parameters
address
[in] IP address, from which a platform component was connected.
type
[in] Type of the platform component that was connected. [IMTGatewayAPI::CONNECT_TYPE_TRADE](imtgatewayapi_enum.htm#enconnecttype) (trading server) and [IMTGatewayAPI::CONNECT_TYPE_HISTORY](imtgatewayapi_enum.htm#enconnecttype) (history server) values are used for passing the type.
login
[in] The login, from which a platform component was connected.
Note
Do not confuse connection login with server ID (IMTConServer::ID). This login is specified in gateway/data feed settings ([IMTConFeeder::Login](imtconfeeder_feedlogin.md "FeedLogin")/[IMTConGateway::Login](imtcongateway_tradinglogin.md "TradingLogin")). The login is always equal to 1000 for local data feeds and gateways.