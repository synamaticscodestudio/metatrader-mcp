# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Spreads ](webapi_spread.md "Spreads")/ Data Structure | [](webapi_spread.md "Spreads") [](webapi_spread_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
A spread configuration is passed in JSON format in response to the [/api/spread/add](webapi_spread_add.md "Add") and [/api/spread/next](webapi_spread_next.md "Get by Index") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | Spread configuration identifier. |
| Flags | Integer | Spread configuration flags. Currently not used. |
| MarginInitial | Float | Parameter value for setting the initial margin. |
| MarginMaintenance | Float | Parameter value of for setting the maintenance margin. |
| MarginType | Integer | Margin charging type. Passed as a value of the [EnSpreadMarginType](imtconspread_enum.htm#enspreadmargintype) enumeration. |
| ALegAdd | Object | [Spread A leg](webapi_spread_data_structure.htm#leg). |
| BLegAdd | Object | [Spread B leg](webapi_spread_data_structure.htm#leg). |

Spread leg
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Mode | Integer | Method for specifying symbols for a spread leg. Passed as a value of the [EnLegMode](imtconspreadleg_enum.htm#enlegmode) enumeration. |
| Flags | Integer | Spread leg flags. Currently not used. |
| Symbol | String | Symbol or basic asset for a spread leg. |
| TimeFrom | Integer | The beginning of the period for filtering symbols by expiration time when specifying a basic asset for a spread leg. |
| TimeTo | Integer | The end of the period for filtering symbols by expiration time when specifying a basic asset for a spread leg. |
| Ratio | Float | The weight of the specified symbol. |