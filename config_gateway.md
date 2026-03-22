# Gateways (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Gateways | [](imtconhistorysyncsink_onhistorysyncsync.md "OnHistorySyncSync") [](imtcongateway.md "IMTConGateway") |
| --- | --- | --- |
| --- | --- |

Gateway Configuration
Gateways are used for integrating the MetaTrader 5 platform with external trading systems. Gateways allow to transmit trade operations to external systems, as well as transmit quotes and news from them.
The following gateway interfaces are available:
  * [IMTConGateway](imtcongateway.md "IMTConGateway") An interface that provides access to all the main parameters of the gateway.
  * [IMTConGatewayModule](imtcongatewaymodule.md "IMTConGatewayModule") An interface that provides access to the parameters of the gateway module.
  * [IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate") An interface that provides access to the settings for converting symbols and quotes received via the gateway.
  * [IMTConGatewaySink](imtcongatewaysink.md "IMTConGatewaySink") An interface is used for handling gateway events.

The below figure shows different elements of gateway configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [The name of gateway configuration](imtcongateway_name.md "Name").
  2. [Gateway ID](imtcongateway_id.md "ID").
  3. [Gateway operation mode](imtcongateway_flags.md "Flags").
  4. [Address of the server of the external trading system](imtcongateway_tradingserver.md "TradingServer").
  5. The gateway status.
  6. [The state of the gateway configuration](imtcongateway_mode.md "Mode").
  7. [The gateway module](imtcongateway_module.md "Module").
  8. [Gateway server address](imtcongateway_gatewayserver.md "GatewayServer").
  9. [A login for authentication on the gateway server](imtcongateway_gatewaylogin.md "GatewayLogin").
  10. [A password for authentication on the gateway server](imtcongateway_gatewaypassword.md "GatewayPassword").
  11. [A login to authorize on the external server](imtcongateway_tradinglogin.md "TradingLogin").
  12. [A password to authorize on the external server](imtcongateway_tradingpassword.md "TradingPassword").
  13. [Configuration of groups](imtcongateway_groupadd.md "GroupAdd"), trade operations from which will be processed by the gateway.
  14. [Configuration of symbols](imtcongateway_symboladd.md "SymbolAdd"), for which the gateway will transmit quotes and process trade operations.
  15. [Configuration of parameters for conversion](imtcongateway_translateadd.md "TranslateAdd") of price data transmitted by the gateway.
  16. [Setup of gateway parameters](imtcongateway_parameteradd.md "ParameterAdd").
  17. [Setup of gateway timeouts](imtcongateway_timeout.md "Timeout").
