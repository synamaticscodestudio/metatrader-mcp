# Interaction of the Platform and Gateway API (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API")/ Interaction of the Platform and Gateway API | [](gatewayapi.md "Gateway API") [](gatewayapi_trade_processing.md "Trade Operations in Gateway API") |
| --- | --- | --- |
| --- | --- |

Interaction of the Platform and Gateway API
The MetaTrader 5 trading platform exchanges data with the Gateway API using the client-server technology, where the platform acts as a client and the Gateway API acts as a server. To protect the Gateway API server from unauthorized connection authorization is used. Parameters of the server port of the Gateway API are specified in the Gateway Server field, and authentication parameters are set in the Gateway Login and Gateway Password fields of the gateway or data feed (via the MetaTrader 5 Administrator or the appropriate interfaces — [IMTConFeeder](imtconfeeder.md "MTConFeeder") and [IMTConGateway](imtcongateway.md "IMTConGateway")).
The process of starting the gateway/data feed begins after completing presets and including its configuration in the MetaTrader 5 Administrator. Below is the sequence of actions performed during the start:
  * The [IMTGatewayAPI::Start](imtgatewayapi_start.md "Start") method is called to start the server port of the Gateway API. After that, the Gateway API begins to accept incoming connections from the platform components. The process of data synchronization between the platform and the Gateway API begins.
  * First a history server is connected to the Gateway API. It passes the configuration of the gateway/data feed. At this stage, the work of the Gateway API is defined: whether it will operate as a gateway or as a data feed. Until the history server is connected, other components cannot be connected.
  * If an application is a data feed, other components of the platform are not connected. Transmission of quotes and/or news begins.
  * If the application is a gateway, then the main trading server additionally connects to the Gateway API. It passes the trading platform settings of symbols, groups, etc.
  * Further, all other trading servers of the platform are connected.
  * After synchronization the [IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") event is called.
