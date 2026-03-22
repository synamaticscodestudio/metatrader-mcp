# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Messengers ](webapi_messenger.md "Messengers")/ Data Structure | [](webapi_messenger.md "Messengers") [](webapi_messenger_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
A messenger configuration is passed in JSON format in response to the [/api/messenger/add](webapi_messenger_add.md "Add"), [/api/messenger/next](webapi_messenger_next.md "Get by Index") and [/api/messenger/get](webapi_messenger_get.md "Get by Name") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Name | String | Messenger configuration name. |
| Sender | String | The sender name in the messenger configuration. |
| ProviderType | Integer | The messaging service provider in the messenger configuration. Passed as a value of the [EnProviderType](imtconmessenger_enum.htm#enprovidertype) enumeration. |
| ProviderAddress | String | The provider's server address in a messenger configuration. |
| ProviderLogin | String | The login of the account which is used for sending messages via the messenger. |
| ProviderPassword | String | The password of the account which is used for sending messages via the messenger. |
| ProviderToken | String | The authentication token, which is used for sending messages via the messenger. |
| ProviderSubId | String | The sender identifier, which is used for sending messages via the messenger. |
| ProviderCurrency | String | The currency for service provider's pricing. |
| ProviderCurrencyRate | Float | The rate at which the service pricing currency is converted to US dollars. |
| Flags | Integer | Additional messenger settings. Passed using the [EnFlags](imtconmessenger_enum.htm#enflags) enumeration. |
| Countries | Array | [The list of countries](webapi_messenger_data_structure.htm#country), for which this messenger is used. |
| Groups | Array | [The list of groups](webapi_messenger_data_structure.htm#group), for which this messenger is used. |

Countries
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| PhoneCode | Integer | Country phone code. |

Groups
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Group | String | Full path to the group. |
| Sender | String | Message sender name. |