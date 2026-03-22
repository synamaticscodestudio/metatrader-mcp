# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Firewall ](webapi_firewall.md "Firewall")/ Data Structure | [](webapi_firewall.md "Firewall") [](webapi_firewall_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
Group configuration is passed in JSON format as a response to the [/api/firewall/add](webapi_firewall_add.md "Add") and [/api/firewall/next](webapi_firewall_next.md "Get by Index") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Action | Integer | The type of actions undertaken in accordance with the firewall rule. Passed as a value of the [EnAction](imtconfirewall_enum.htm#enaction) enumeration. |
| From | String | Beginning of the range of IP addresses to which the firewall is applied. |
| To | String | End of the range of IP addresses to which the firewall rule is applied. |
| Comment | String | A comment to the firewall rule. |