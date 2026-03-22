# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewall ](imtconfirewall.md "IMTConFirewall")/ Enumerations | [](imtconfirewall.md "IMTConFirewall") [](imtconfirewall_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConFirewall](imtconfirewall.md "IMTConFirewall") class contains one enumeration.
IMTConFirewall::EnAction
Types of actions that can be performed in accordance with a firewall rule are listed in IMTConFirewall::EnAction.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ACCESS_BLOCK | 0 | The blocking instruction. |
| ACCESS_PERMIT | 1 | A permitting instruction. |
| ACCESS_WHITELIST | 2 | The "Permit always" instruction. Such an instruction indicates the range of addresses that are allowed to access always, regardless of the blocking instruction and antfilud control. |
| ACCESS_FIRST |  | Beginning of enumeration. It corresponds to ACCESS_BLOCK. |
| ACCESS_LAST |  | End of enumeration. It corresponds to ACCESS_WHITELIST. |

This enumeration is used in the [IMTConFirewall::Action](imtconfirewall_action.md "Action") method.