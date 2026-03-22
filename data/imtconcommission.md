# IMTConCommission (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups")/ IMTConCommission | [](imtcongroupsink_hookgroupdelete.md "HookGroupDelete") [](imtconcommission_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConCommission
The IMTConCommission class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconcommission_release.md "Release") | Delete the current object. |
| [Assign](imtconcommission_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconcommission_clear.md "Clear") | Clear an object. |
| [Name](imtconcommission_name.md "Name") | Get and set the commission configuration name. |
| [Description](imtconcommission_description.md "Description") | Get and set the description of the commission configuration. |
| [Path](imtconcommission_path.md "Path") | Get and set the path to a symbol or group of symbols that are subject to commission. |
| [Mode](imtconcommission_mode.md "Mode") | Get and set the commission type. |
| [RangeMode](imtconcommission_rangemode.md "RangeMode") | Get and set the type of commission ranges - by trade volume or turnover. |
| [ChargeMode](imtconcommission_chargemode.md "ChargeMode") | Get and set the commission charging time. |
| [EntryMode](imtconcommission_entrymode.md "EntryMode") | Get and set commission calculation mode depending on the deal direction. |
| [ActionMode](imtconcommission_actionmode.md "ActionMode") | Get and set commission calculation mode depending on the deal type. |
| [ProfitMode](imtconcommission_profitmode.md "ProfitMode") | Get and set commission calculation mode depending on the deal profit. |
| [ReasonFlags](imtconcommission_reasonflags.md "ReasonFlags") | Get and set commission calculation mode depending on the reason for the deal execution. |
| [TurnoverCurrency](imtconcommission_turnovercurrency.md "TurnoverCurrency") | Get and set the currency, in which the money turnover is calculated. |
| [TierAdd](imtconcommission_tieradd.md "TierAdd") | Add commission range. |
| [TierUpdate](imtconcommission_tierupdate.md "TierUpdate") | Update commission range. |
| [TierDelete](imtconcommission_tierdelete.md "TierDelete") | Delete a commission range by the index. |
| [TierClear](imtconcommission_tierclear.md "TierClear") | Clear the list of commission ranges. |
| [TierShift](imtconcommission_tiershift.md "TierShift") | Moves a commission range in the list. |
| [TierTotal](imtconcommission_tiertotal.md "TierTotal") | Get the number of commission ranges. |
| [TierNext](imtconcommission_tiernext.md "TierNext") | Get a commission range by the index. |

The IMTConCommission class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnCommMode](imtconcommission_enum.htm#encommmode) | Type of commission � standard or agent. |
| [EnCommRangeMode](imtconcommission_enum.htm#encommrangemode) | Type of commission ranges � by trade volume or turnover. |
| [EnCommChargeMode](imtconcommission_enum.htm#encommchargemode) | Charging mode � instant, at the end of the day or at the end of the month. |
| [EnCommEntryMode](imtconcommission_enum.htm#encommentrymode) | Commission mode depending on the direction of deals. |
| [EnCommActionMode](imtconcommission_enum.htm#encommactionmode) | Commission mode depending on the deal type. |
| [EnCommProfitMode](imtconcommission_enum.htm#encommprofitmode) | Commission charging mode depending on the deal profit. |
| [EnCommReasonFlags](imtconcommission_enum.htm#encommreasonflags) | Commission charging mode depending on the deal execution reasons. |