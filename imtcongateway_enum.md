# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ Enumerations | [](imtcongateway.md "IMTConGateway") [](imtcongateway_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConGateway](imtcongateway.md "IMTConGateway") class contains the following enumerations:
  * [IMTConGateway::EnGatewayMode](imtcongateway_enum.htm#engatewaymode)
  * [IMTConGateway::EnGatewayFlags](imtcongateway_enum.htm#engatewayflags)

IMTConGateway::EnGatewayMode
Possible gateway states are enumerated in IMTConGateway::EnGatewayMode.
| ID | Value | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| GATEWAY_DISABLED | 0 | The gateway is disabled. |
| GATEWAY_ENABLED | 1 | The gateway is enabled. |
| GATEWAY_FIRST |  | Beginning of enumeration. It corresponds to GATEWAY_DISABLED. |
| GATEWAY_LAST |  | End of enumeration. It corresponds to GATEWAY_ENABLED. |

This enumeration is used in the [IMTConGateway::Mode](imtcongateway_mode.md "Mode") method.
IMTConGateway::EnGatewayFlags
The gateway operation options are enumerated in IMTConGateway::EnGatewayFlags.
| ID | Value | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| GATEWAY_FLAG_REMOTE | 0x00000001 | The gateway operates as a remote application. |
| GATEWAY_FLAG_IMPORT_SYMBOLS | 0x00000002 | The gateway is allowed to import symbol settings. |
| GATEWAY_FLAG_IGNORE_QUOTES | 0x00000004 | Do not broadcast quotes from the gateway in the system. |
| GATEWAY_FLAG_IMPORT_BALANCES | 0x00000008 | The gateway is allowed to control the clients' balance using trade executions IMTExecution::TE_BALANCE_CHANGE and IMTExecution::TE_BALANCE_CORRECT. |
| GATEWAY_FLAG_EXTENDED_LOG | 0x00000010 | If you enable this flag, additional information about the gateway operation will be printed to its journal, such as the result of measurement of trade operation handling speed. For more details about the extended logging please read MetaTrader 5 Administrator User Guide (Platform Setup\Gateways\Journal of Gateways). |
| GATEWAY_FLAG_SUPP_POSITIONS | 0x00000020 | The gateway supports requesting of position states in the external trading system. The request can be made from the "Positions" tab of the gateway in MetaTrader 5 Administrator. |
| GATEWAY_FLAG_PROFILLING | 0x00000040 | Collect [advanced metrics](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_gateways/gateways_config#monitoring) related to request processing by the gateway. |
| GATEWAY_FLAG_TRIAL | 0x00000100 | The gateway is running in demo mode. The mode is checked based on the license at the time the module is loaded. |
| GATEWAY_FLAG_INTERNAL | 0x00000200 | The gateway is integrated into the platform. |
| GATEWAY_FLAG_NONE |  | Beginning of enumeration. Corresponds to the absence of flags. |
| GATEWAY_FLAG_ALL |  | End of enumeration. All flags are enabled. |

This enumeration is used in the following methods:
  * [IMTConGateway::Flags](imtcongateway_flags.md "Flags")
  * [IMTConGatewayModule::Flags](imtcongatewaymodule_flags.md "Flags")
