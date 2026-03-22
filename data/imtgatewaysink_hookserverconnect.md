# HookServerConnect (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ HookServerConnect | [](imtgatewaysink_ondealerlock.md "OnDealerLock") [](imtgatewaysink_hookgatewaypositionsrequest.md "HookGatewayPositionsRequest") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::HookServerConnect
The hook for managing MetaTrader 5 platform components connections to Gateway API.
C++
virtual MTAPIRES IMTGatewaySink::HookServerConnect( LPCWSTR address, // IP address const UINT type, // Component type const UINT64 login // Login )  
---  
.NET
virtual MTAPIRES CIMTGatewaySink.HookServerConnect( string address, // IP address uint type, // Component type ulong login // Login )  
---  
Parameters
address
[in] IP address, from which a platform component is connected.
type
[in] Type of the platform component that is trying to connect. [IMTGatewayAPI::CONNECT_TYPE_TRADE](imtgatewayapi_enum.htm#enconnecttype) (trading server) and [IMTGatewayAPI::CONNECT_TYPE_HISTORY](imtgatewayapi_enum.htm#enconnecttype) (history server) values are used for passing the type.
login
[in] The login used by a platform component to establish connection.
Return Value
In case of confirmation [MT_RET_OK](retcodes_successful.md "Successful completion") should be returned, otherwise, the request will be rejected with a response code returned from the hook.
Note
Do not confuse connection login with server ID (IMTConServer::ID). This login is specified in gateway/data feed settings ([IMTConFeeder::Login](imtconfeeder_feedlogin.md "FeedLogin")/[IMTConGateway::Login](imtcongateway_tradinglogin.md "TradingLogin")). The login is always equal to 1000 for local data feeds and gateways.