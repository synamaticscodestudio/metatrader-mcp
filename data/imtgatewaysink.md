# Event Interface (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API")/ Event Interface | [](imtgatewayapi_settingsget.md "SettingsGet") [](imtgatewaysink_onserverdisconnect.md "OnServerDisconnect") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink Interface
IMTGatewaySink interface is used to notify on the events happening at a trading platform. It also allows to manage a platform connection to Gateway API.
IMTGatewaySink interface contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [OnServerDisconnect](imtgatewaysink_onserverdisconnect.md "OnServerDisconnect") | A handler of the event of the end of connection to one of the MetaTrader 5 platform components (server). |
| [OnServerSynchronized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized") | A handler of the event of data synchronization between Gateway API and one of the MetaTrader 5 platform (server) components. |
| [OnServerSymbolAdd](imtgatewaysink_onserversymboladd.md "OnServerSymbolAdd") | A handler of the event of symbol adding. |
| [OnServerSymbolDelete](imtgatewaysink_onserversymboldelete.md "OnServerSymbolDelete") | A handler of the event of symbol removal. |
| [OnGatewayConfig](imtgatewaysink_ongatewayconfig.md "OnGatewayConfig") | A handler of the event of passing a gateway/data feed own configuration from a history server connected to it. |
| [OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") | A handler of the following event: Gateway API is synchronized with the platform and is ready for work. |
| [OnGatewayStop](imtgatewaysink_ongatewaystop.md "OnGatewayStop") | OnGatewayStart inverse events hadler. Notifies on the fact that Gateway API is not synchronized with the platform and not ready for work. |
| [OnGatewayShutdown](imtgatewaysink_ongatewayshutdown.md "OnGatewayShutdown") | A handler of the event notifying about the trading platform shutdown or gateway/data feed disconnection. |
| [OnGatewayAccountAnswer](imtgatewaysink_ongatewayaccountanswer.md "OnGatewayAccountAnswer") | A handler of the event of requesting information about a client from MetaTrader 5 platform. |
| [OnGatewayAccountSet](imtgatewaysink_ongatewayaccountset.md "OnGatewayAccountSet") | A handler of the event of modifying information about a client via [IMTGatewayAPI::GatewayAccountSet](imtgatewayapi_gatewayaccountset.md "GatewayAccountSet") method. |
| [OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock") | A handler of the event of capturing (blocking) of a successive trade request from a requests queue. |
| [OnDealerAnswer](imtgatewaysink_ondealeranswer.md "OnDealerAnswer") | A handler of the event notifying on a request confirmation or execution result. |
| [HookServerConnect](imtgatewaysink_hookserverconnect.md "HookServerConnect") | The hook for managing MetaTrader 5 platform components connections to Gateway API. |
| [HookGatewayPositionsRequest](imtgatewaysink_hookgatewaypositionsrequest.md "HookGatewayPositionsRequest") | The hook for receiving states of trading accounts used by the gateway to operate in an external system. |
| [HookGatewayPositionsCheck](imtgatewaysink_hookgatewaypositionscheck.md "HookGatewayPositionsCheck") | Hook for positions verification. This method is reserved for future use. |
| [HookGatewayOrdersRequest](imtgatewaysink_hookgatewayordersrequest.md "HookGatewayOrdersRequest") | The hook for receiving the state of the client's current pending orders in an external trading system. |
| [HookGatewayAccountRequest](imtgatewaysink_hookgatewayaccountrequest.md "HookGatewayAccountRequest") | The hook for synchronizing client's trading data with an external trading system. |