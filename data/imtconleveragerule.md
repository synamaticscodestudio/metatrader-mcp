# IMTConLeverageRule (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin")/ IMTConLeverageRule | [](imtconleveragearray_searchright.md "SearchRight") [](imtconleveragerule_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule
The IMTConLeverageRule class contains methods for retrieving and updating rules in [floating margin](https://support.metaquotes.net/en/docs/mt5/platform/administration/leverages) configurations:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconleverage_release.md "Release") | Delete the current object. |
| [Assign](imtconleverage_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconleverage_clear.md "Clear") | Clear an object. |
| [Name](imtconleveragerule_name.md "Name") | Get the name of a rule in a floating margin configuration. |
| [Description](imtconleveragerule_description.md "Description") | Get the description of a rule in a floating margin configuration. |
| [Path](imtconleveragerule_path.md "Path") | Get the path to a symbol or group of symbols for which the floating margin rule is applied. |
| [RangeMode](imtconleveragerule_rangemode.md "RangeMode") | Get the level type for a rule in a floating margin configuration. |
| [RangeValueCurrency](imtconleveragerule_rangevaluecurrency.md "RangeValueCurrency") | Get the currency to which the notional value of positions in [IMTConLeverageRule::RANGE_VALUE*](imtconleveragerule_enum.htm#enrangemode) modes is converted. |
| [TierAdd](imtconleveragerule_tieradd.md "TierAdd") | Add a level to a floating margin rule. |
| [TierUpdate](imtconleveragerule_tierupdate.md "TierUpdate") | Update a level in a floating margin rule. |
| [TierDelete](imtconleveragerule_tierdelete.md "TierDelete") | Delete a level from a floating margin rule. |
| [TierClear](imtconleveragerule_tierclear.md "TierClear") | Clear the list of levels in a floating margin rule. |
| [TierShift](imtconleveragerule_tiershift.md "TierShift") | Move a level in a floating margin rule. |
| [TierTotal](imtconleveragerule_tiertotal.md "TierTotal") | Get the total number of levels in a floating margin rule. |
| [TierNext](imtconleveragerule_tiernext.md "TierNext") | Get a level from floating margin rules by index. |

The IMTConLeverageRule class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnRangeMode](imtconleveragerule_enum.htm#enrangemode) | Level types for the rule. |