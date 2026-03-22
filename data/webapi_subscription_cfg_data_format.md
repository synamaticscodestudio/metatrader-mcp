# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Subscriptions ](webapi_subscription_cfg.md "Subscriptions")/ Data Structure | [](webapi_subscription_cfg.md "Subscriptions") [](webapi_subscription_cfg_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
Subscription configuration is passed in JSON format as a response to the [/api/subscription/config/add](webapi_subscription_cfg_add.md "Add"), [/api/subscription/config/next](webapi_subscription_cfg_next.md "Get by Index") and [/api/subscription/config/get](webapi_subscription_cfg_get.md "Get by Name/ID") requests.
General Subscription Paramers
| Parameter | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | Unique configuration identifier. |
| ParentID | Integer | The identifier of the subdirectory in which the configuration is located. |
| Type | Integer | Configuration type. The type is passed by the [EnType](imtconsubscription_enum.htm#entype) enumeration. |
| Name | String | Subscription name. |
| URL | String | A link to an additional subscription description. |
| AgreementURL | String | A link to a subscription agreement. |
| Flags | Integer | Additional subscription settings. Additional settings are passed by the [EnFlags](imtconsubscription_enum.htm#enflags) enumeration. |
| Control | Integer | Subscription management mode in client terminals (allowed actions). Modes are passed by the [EnControlMode](imtconsubscription_enum.htm#encontrolmode) enumeration. |
| Image | Integer | Subscription logo. Logos are passed by the [EnImageType](imtconsubscription_enum.htm#enimagetype) enumeration. |
| ImageURL | String | A link to a custom subscription logo. The field is currently not used. |
| Period | Integer | Subscription period. The period is passed by the [EnPeriod](imtconsubscription_enum.htm#enperiod) enumeration. |
| PeriodCustom | Integer | Custom subscription period in days. |
| FreePeriod | Integer | Trial (free) subscription period. The trial period if passed by the [EnFreePeriod](imtconsubscription_enum.htm#enfreeperiod) enumeration. |
| FreePeriodCustom | Integer | Custom value for a trial (free) subscription period. |
| Price | Float | Subscription price for non-professional traders. |
| PriceCurrency | String | Currency in which the subscription price is specified. |
| PriceProfessional | Float | Subscription price for professional traders. |
| PriceCost | Float | Subscription cost. |
| DependsID | Integer | ID of the subscription which the current subscription depends on. |
| Description | String | Subscription description. |
| Countries | Array | The list of two-letter codes of countries for which the subscription is available. |
| Groups | Array | The list of groups for which the subscription is available. |
| Symbols | Array | [Trading instruments](webapi_subscription_cfg_data_format.htm#symbols) available by subscription. |
| News | Array | [News categories](webapi_subscription_cfg_data_format.htm#news) available by subscription. |

Symbols
| Parameter | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| Level | Integer | The type of price data available by subscription. Price data type is passed by the [EnLevel](imtconsubscriptionsymbol_enum.htm#enlevel) enumeration. |
| Symbols | Integer | Path to the symbol (group of symbols), the data for which is provided by subscription. |
| TickHistory | Integer | Tick data depth available by subscription. Data depth is passed by the [EnTickHistory](imtconsubscriptionsymbol_enum.htm#entickhistory) enumeration. |

News categories
| Parameter | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| Category | String | News categories available by subscription. |
| Language | Integer | The language of news available by subscription. |