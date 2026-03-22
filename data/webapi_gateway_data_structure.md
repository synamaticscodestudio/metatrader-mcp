# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Data Structure | [](webapi_gateway.md "Gateways") [](webapi_gateway_restart.md "Restart") |
| --- | --- | --- |
| --- | --- |

Data Structure
Gateway configuration is passed in JSON format in response to the [/api/gateway/add](webapi_gateway_add.md "Add"), [/api/gateway/next](webapi_gateway_next.md "Get by Index") and [/api/gateway/get](webapi_gateway_get.md "Get by Name") requests.
| Method | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Name | String | Gateway name. |
| Module | String | Gateway module name. |
| GatewayServer | String | The address at which the gateway accepts connections from the history and trade servers. |
| GatewayLogin | String | Login for authorization of the history and trade servers on the gateway. |
| GatewayPassword | String | Password for authorization of the history and trade servers on the gateway. |
| TradingServer | String | Address of the server to which the gateway connects. |
| TradingLogin | String | Login for the authorization of a gateway on the source server. |
| TradingPassword | String | Password for the authorization of a gateway on the source server. |
| Enable | Integer | Gateway operation mode. Passed as a value of the [EnGatewayMode](imtcongateway_enum.htm#engatewaymode) enumeration . |
| Flags | Integer | Gateway operation options. Passed using the [EnGatewayFlags](imtcongateway_enum.htm#engatewayflags) enumeration. |
| ID | Integer | The gateway ID. |
| Gateway | String | Gateway license module name. |
| AccountSummary | Integer | Account number on which all gateway positions are displayed. |
| TimeoutReconnect | Integer | Timeout in seconds to wait between attempts to reconnect to an external server. |
| TimeoutSleep | Integer | Timeout in seconds between the series of reconnections to an external server. |
| TimeoutAttempts | Integer | Number of attempts in a series of reconnections to an external server. |
| State | Array | [Gateway operation statistics](webapi_gateway_data_structure.htm#state). |
| Params | Array | [Gateway parameters](webapi_gateway_data_structure.htm#param). |
| Symbols | Array | The list of symbols for which the gateway provides quotes and processes trading operations. |
| Groups | Array | The list of groups whose trading operations are processed by the gateway. |
| Translates | Array | [Translation settings](webapi_gateway_data_structure.htm#translate) for the price data transmitted by the gateway. |

Gateway operation statistics
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| SysConnection | Integer | The state of gateway connection to an external trading system: 0 � connected, 1 � disconnected. |
| SysLastTime | Integer | The time of the last successful gateway connection to an external trading system in the YYYY-MM-DD HH:MM:SS.MSC format. |
| Company | String | The company by which the gateway executable is signed. |
| Issuer | String | The certification authority that issued the certificate to the above company. |
| StateReceivedTicks | Integer | The number of price changes ([MTTick](mttick.md "MTTick")) received by the gateway from the external system for the current session. |
| StateReceivedBooks | Integer | The number of Market Depth changes ([MTBookDiff](mtbook.md "MTBook/MTBookDiff")) received by the gateway from an external trading system for the current session. |
| TradeAverageTime | Integer | Average time in milliseconds spent by the gateway to process one trading operation. |
| TradeRequestsCount | Integer | The number of trading operations processed by the gateway during the current session. |
| BytesReceived | Integer | Traffic volume received by the gateway during the current session. |
| BytesSent | Integer | Traffic volume sent by the gateway during the current session. |
| StateFlags | Integer | Flags of states. Currently not used. |

Gateway parameters
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Type | Integer | Parameter type. Passed as a value of the [ParamType](imtconparam_enum.md "Enumerations") enumeration. |
| Name | Integer | Parameter name. |
| Value | String | Parameter value. |

Translation settings
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Source | String | The symbol name in the data feed, to which the gateway connects. |
| Symbol | String | The name of the symbol in the trading platform. |
| BidMarkup | Integer | Correction for the Bid price received for a symbol from the data source, to which the gateway connects. |
| AskMarkup | Integer | Correction for the Ask price received for a symbol from the data source, to which the gateway connects. |
| Digits | Integer | The number of digits after the decimal point in the price of the symbol that receives quotes. |

Gateway module parameters
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Name | String | The gateway name, which is inserted by default to a configuration when this module is selected. |
| Module | String | The name of the gateway module file. |
| Gateway | String | Gateway module name. |
| Server | String | The default address of the server to which the gateway module will connect. |
| Login | String | The default login that will be used by the gateway to connect to the server. |
| Password | String | The default password that will be used by a gateway to connect to the server. |
| Copyright | String | Copyright of the gateway module. |
| Description | String | Gateway module description. |
| Version | Integer | The version of the gateway module. |
| Flags | Integer | Available options for gateway module operation. Passed using the [EnGatewayFlags](imtcongateway_enum.htm#engatewayflags) enumeration. |
| Fields | Integer | Editable gateway fields. Passed using the [EnGatewayFieldMask](imtcongatewaymodule_enum.md "Enumerations") enumeration. |
| VersionAPI | Integer | The version of the Gateway API with which the module is compiled. |
| BuildDate | String | Gateway module creation date. |
| VersionAPIDate | String | Released date of the Gateway API version with which the module is compiled. |
| Params | Array | [Gateway module parameters](webapi_gateway_data_structure.htm#param). |