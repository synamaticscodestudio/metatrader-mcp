# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ Enumerations | [](imtconemail.md "IMTConEmail") [](imtconemail_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConEmail](imtconemail.md "IMTConEmail") class contains one enumeration:
IMTConEmail::EnFlags
The IMTConEmail::EnFlags enumeration contains mail server configuration flags.
| Identifier | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_NONE | 0 | No flags. |
| FLAG_ENABLED | 1 | The mail server configuration is enabled. If the flag is not set, emails will not be sent via this server. |
| FLAG_DEFAULT | 2 | Default mail server. The special "Default" option can be selected for the used mail server in group settings ([IMTConGroup::ReportsEmail](imtcongroup_reportsemail.md "ReportsEmail")) and account allocation settings. In this case the platform will check the list of all servers and will send emails via the first available server with the FLAG_DEFAULT enabled. |
| FLAG_FIRST |  | Beginning of enumeration. Corresponds to FLAG_NONE. |
| FLAG_ALL |  | End of enumeration. All flags are enabled. |

The enumeration is used in the [IMTConEmail::Flags](imtconemail_flags.md "Flags") methods.