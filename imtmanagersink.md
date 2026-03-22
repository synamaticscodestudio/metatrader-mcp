# Manager API Events Interface (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API")/ Interface of Manager API Events | [](imtdealersink_ondealeranswer.md "OnDealerAnswer") [](imtmanagersink_onconnect.md "OnConnect") |
| --- | --- | --- |
| --- | --- |

Manager API Events Interface — IMTManagerSink
IMTManagerSink interface contains the following handlers:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [OnConnect](imtmanagersink_onconnect.md "OnConnect") | A handler that notifies of establishing/restoring a connection between the manager or administrator terminal and the server. |
| [OnDisconnect](imtmanagersink_ondisconnect.md "OnDisconnect") | A handler that notifies of loss of connection between the manager or administrator terminal and the server. |
| [OnTradeAccountSet](imtmanagersink_ontradeaccountset.md "OnTradeAccountSet") | This handler receives [IMTManagerAPI::TradeAccountSet](imtmanagerapi_tradeaccountset.md "TradeAccountSet") method execution result, as well as the final status of a client entry (after the passed changes have been applied). |