# Firewall (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Firewall | [](imtconholidaysink_onholidaysync.md "OnHolidaySync") [](imtconfirewall.md "IMTConFirewall") |
| --- | --- | --- |
| --- | --- |

Firewall Configuration
A firewall is designed to protect your system from access from unwanted IP addresses. If a group of addresses is blocked, users (client, manager, administrator) with the address within the specified range will not be able to connect to the server. By default, it is assumed that all addresses are allowed.
The latest rule is applied to an address, regardless of previous instructions, except for the addresses that are always allowed. Thus, the position of each instruction in the list is a very important factor when setting access from IP addresses.  
---  
The following firewall interfaces are available:
  * [IMTConFirewall](imtconfirewall.md "IMTConFirewall") Interface for configuring firewall rules.
  * [IMTConFirewallSink](imtconfirewallsink.md "IMTConFirewallSink") >Interface for handling events of changes in the firewall rules.

To help you understand the purpose of interfaces, below is a picture that shows various elements of firewall configuration in the MetaTrader 5 Administrator:
The following elements are shown above:
  1. [Beginning of the range](imtconfirewall_from.md "From") of addresses.
  2. [End of the range](imtconfirewall_to.md "To") of addresses.
  3. [A comment](imtconfirewall_comment.md "Comment") to a rule.
  4. [Action](imtconfirewall_action.md "Action") applied to the range of addresses.
