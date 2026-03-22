# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGatewayModule ](imtcongatewaymodule.md "IMTConGatewayModule")/ Enumerations | [](imtcongatewaymodule.md "IMTConGatewayModule") [](imtcongatewaymodule_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The IMTConGatewayModule class contains one enumeration:
IMTConGatewayModule::EnGatewayFieldMask
The editable fields of the gateway configuration are listed in IMTConGatewayModule::EnGatewayFieldMask.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| GATEWAY_FIELD_SERVER | 1 | The "Server" field. |
| GATEWAY_FIELD_LOGIN | 2 | The "Login" field. |
| GATEWAY_FIELD_PASS | 4 | The "Password" field. |
| GATEWAY_FIELD_PARAM | 8 | The "Parameters" field. |
| GATEWAY_FIELD_NONE | 0 | Beginning of enumeration. It corresponds to the absence of editable fields. |
| GATEWAY_FIELD_ALL |  | End of enumeration. It corresponds to the fact that all fields are editable. |

This enumeration is used in the [IMTConGatewayModule::Fields](imtcongatewaymodule_fields.md "Fields") method.